import bcrypt from 'bcrypt';
import {Request, Response} from "express";
import {MySQLService} from "./mySQL.service";
import {UserDto} from "../dto/user.dto";
import {generateTokens} from "../helpers/auth.helper";
import {User} from "../interfaces/user.interface";
import {Tokens} from "../interfaces/tokens.interface";
import {TokenUser} from "../interfaces/tokenUser.interface";
import jwt, {JwtPayload} from "jsonwebtoken";

export class AuthService {
  
  register(req: Request, res: Response) {
    const user = req.body;
    let userDto: any;
    let tokens: any;
    const dbRequest = MySQLService.getInstance();
    const queryCheck = `SELECT *  FROM users WHERE login = "${user.login}"`
    const queryAdd = `INSERT INTO users SET ?`

    dbRequest.read(queryCheck)
      // .then(async (response: any) => {
      //   if (response.length !== 0) {
      //     return Promise.reject({code: 403, message: 'LOGIN_IN_USE'});
      //   }
      //
      //   const hashedPassword = await bcrypt.hash(user.password, 8);
      //   const column = {...user, password: hashedPassword};
      //   return dbRequest.create(queryAdd, column);
      // })
      // .then((value: any) => {
      //   userDto = new UserDto({...user, id: value.insertId});
      //   return dbRequest.read(`SELECT * FROM token WHERE user_id=${value.insertId}`)
      // })
      // .then((response: any) => {
      //   tokens = tokenService.generateTokens({...userDto})
      //   if (response.length > 0) {
      //     const query = `UPDATE token SET ? WHERE user_id=${userDto.id}`
      //     return dbRequest.update(query, {refreshToken: tokens.refreshToken})
      //   }
      //   const query = `INSERT INTO token SET ?`
      //   return dbRequest.create(query, {userRole: userDto.role, user_id: userDto.id, refreshToken: tokens.refreshToken})
      // })
      // .then(() => {
      //   generateJWT(res, {...userDto})
      //   return res.status(200).send({message: 'Super'});
      // })
      // .catch((value: { code: number; message: string }) => {
      //   console.log(value);
      //
      //   res.status(value.code).send({message: value.message});
      // });
  }

  login(req: Request, res: Response) {
    const {login, password} = req.body;
    let user: User;
    let tokens: Tokens;
    
    const dbRequest = MySQLService.getInstance();
    dbRequest
      .read(`SELECT * FROM users WHERE login="${login}"`)
      .then((response: User[]) => {
        if (response.length === 0) {
          return Promise.reject({code: 403, message: 'WRONG_LOGIN_PASSWORD'});
        }
        user = new UserDto(response[0])
        return bcrypt.compare(password, <string>response[0].password)
      })
      .then((value: boolean) => {
        if (!value) {
          return Promise.reject({code: 403, message: 'WRONG_LOGIN_PASSWORD'});
        }
        
        tokens = generateTokens({...user});
        res.cookie('school_woop_secure', tokens.refreshToken, {httpOnly: true, secure: true, maxAge: 30 * 24 * 60 * 60 * 1000, sameSite: false})
        return dbRequest.read(`SELECT * FROM token WHERE user_id=${user.id}`)
      })
      .then((value: TokenUser[]) => {
        if (value.length === 0) {
          return dbRequest.create('INSERT INTO token SET ?', {userRole: user.role, refreshToken: tokens.refreshToken, user_id: user.id})
        }
        return dbRequest.update(`UPDATE token SET ? WHERE user_id=${user.id}`, {refreshToken: tokens.refreshToken})
      })
      .then(() => {
        res.status(200).send({ message: 'SUCCESS', user: {...user, token: tokens.accessToken} })
      })
      .catch((value: { code: number; message: string }) => {
        //TODO
        res.status(value.code).send({message: value.message});
      });
  }

  logout(req: Request, res: Response) {
    console.log(req.cookies)
    const jwtToken = req.cookies.school_woop_secure;
    console.log(jwtToken)
    if (!jwtToken) return res.status(204).end();

    const dbRequest = MySQLService.getInstance();
    dbRequest.read(`SELECT * FROM token where refreshToken="${jwtToken}"`)
      .then((response: any) => {
        if (response.length === 0) {
          res.clearCookie('school_woop_secure', { httpOnly: true, secure: true, sameSite: false })
          return res.status(204).end();
        }

        return dbRequest.update(`UPDATE token SET ? WHERE refreshToken="${jwtToken}"`, {refreshToken: ''})
      })
      .then(() => {
        res.clearCookie('school_woop_secure', { httpOnly: true, secure: true, sameSite: false })
        res.status(204).end();
      })
      .catch((value: { code: number; message: string }) => {
        console.log(value);
        res.status(value.code).send({ message: value.message });
      });
  }

  refresh(req: Request, res: Response) {
    const jwtToken = req.cookies.school_woop_secure;
    if (!jwtToken) return res.status(401).send({message: 'NOT_AUTHORIZED'});
    
    const dbRequest = MySQLService.getInstance();
    dbRequest
      .read(`SELECT * FROM token WHERE refreshToken="${jwtToken}"`)
      .then((response: TokenUser[]) => {
        if (response.length === 0) return Promise.reject({ code: 401, message: 'NOT_AUTHORIZED' });
  
        try {
          const decoded = <JwtPayload>jwt.verify(jwtToken, <string>process.env.JWT_REFRESH_SECRET);
          
          if (decoded.id !== response[0].user_id) {
            return Promise.reject({ code: 401, message: 'NOT_AUTHORIZED' });
          }
          const user = new UserDto(decoded);
          const newAccessToken = jwt.sign({...user}, <string>process.env.JWT_ACCESS_SECRET,{expiresIn: '60m'});
          
          res.status(200).send({ message: 'SUCCESS', user: {...user, token: newAccessToken} })
        } catch (err) {
          return Promise.reject({ code: 401, message: 'NOT_AUTHORIZED' });
        }
      })
      .catch((value: { code: number; message: string }) => {
      //TODO
      res.status(value.code).send({message: value.message});
    });
  }
}
