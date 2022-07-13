import {Request, Response} from "express";
import {MySQLService} from "./mySQL.service";
import { Homework } from '../model/Homework';
import moment from 'moment';
import {generateWorkloadData} from "../helpers/studentWorkload.helper";
import {AWSUploader} from "./bucket.service";
import {S3File} from "../interfaces/S3File.interface";

export class StudentService {
  
  getStudentAttendance(req: Request, res: Response) {
    const period: string = req.params.period;
    const timeZoneOffset = (new Date()).getTimezoneOffset() * 60000;
    const currentDate = new Date(Date.now() - timeZoneOffset).toISOString().slice(0, 10).replace('T', ' ');
    let periodCounter;
    let lessonsCounter: number;
    
    switch (period) {
      case 'week':
        periodCounter = 7 * 24 * 60 * 60 * 1000;
        break;
      case 'month':
        periodCounter = 30 * 24 * 60 * 60 * 1000;
        break;
      case 'year':
        periodCounter = 365 * 24 * 60 * 60 * 1000;
        break;
      default:
        periodCounter = 7 * 24 * 60 * 60 * 1000;
    }
    
    const from = new Date(new Date(currentDate).getTime() - periodCounter).toISOString().slice(0, 10).replace('T', ' ');
    
    const dbRequest = MySQLService.getInstance();
    dbRequest
      .read(`SELECT COUNT(*) as lessonsCounter FROM schedule JOIN students ON students.class_id = schedule.class_id  WHERE students.user_id=${req.user.id} AND schedule.start BETWEEN "${from} 00:00:00" AND "${currentDate} 00:00:00"`)
      .then((response: any) => {
        if (response) {
          lessonsCounter = response[0].lessonsCounter
        }
        return dbRequest.read(`SELECT COUNT(*) as missedLessons FROM missing JOIN schedule ON schedule.id = missing.event_id WHERE missing.student_id = ${req.user.id} AND schedule.start BETWEEN "${from} 00:00:00" AND "${currentDate} 00:00:00"`);
      })
      .then((value: any) => {
        if (value?.missedLessons === 0) {
          return res.status(200).send({message: 'SUCCESS', value: 100})
        }
        return res.status(200).send({message: 'SUCCESS', value: 100 - Math.ceil(value[0].missedLessons / lessonsCounter * 100)})
      })
      .catch((value: { code: number; message: string }) => {
        //TODO
        res.status(value.code).send({message: value.message});
      });
  }
  
  getStudentDeadlines(req: Request, res: Response) {
    const dbRequest = MySQLService.getInstance();
    dbRequest.read(`SELECT students.class_id FROM students WHERE students.user_id=${req.user.id}`)
      .then((response: any) => {
        if (response.length === 0) {
          return Promise.reject({code: 403, message: 'NOT_AUTHORIZED'})
        }

        try {
          const timeZoneOffset = (new Date()).getTimezoneOffset() * 60000;
          const currentDate = new Date((Date.now()) - timeZoneOffset).toISOString().slice(0, 19).replace('T', ' ');
          return Homework.find({classId: response[0].class_id || 0, deadline: {$gte: new Date(`${currentDate}`).toISOString()}}).sort({deadline: 1});
        } catch (err) {
          return Promise.reject({code: 409, message: 'CONNECTION_ERROR'})
        }
      })
      .then((value: any) => {
        res.status(200).send({message: 'SUCCESS', value})
      })
      .catch((value: { code: number; message: string }) => {
        //TODO
        res.status(value.code).send({message: value.message});
      });
  }

  getStudentAverageGrade(req: Request, res: Response) {
    const dbRequest = MySQLService.getInstance();
    dbRequest
      .read(`SELECT AVG(grade) as avgGrade FROM grades INNER JOIN schedule ON grades.event_id = schedule.id WHERE student_id =${req.user.id} AND schedule.start BETWEEN "${process.env.YEAR_START}" AND "${process.env.YEAR_END}"`)
      .then((response: any) => {
        let data;

        if (!response[0].avgGrade) {
          data = null;
        } else {
          data = parseFloat(response[0].avgGrade).toFixed(1);
        }

        res.status(200).send({message: 'SUCCESS', value: data});
      })
      .catch((value: { code: number; message: string }) => {
        //TODO
        res.status(value.code).send({message: value.message});
      });
  }

  getDaysWithoutBadGrades(req: Request, res: Response) {
    const dbRequest = MySQLService.getInstance();
    dbRequest.read(`SELECT grades.* FROM grades INNER JOIN schedule ON grades.event_id = schedule.id WHERE grades.grade < 4 AND grades.student_id=${req.user.id} AND schedule.start BETWEEN "${process.env.YEAR_START}" AND "${process.env.YEAR_END}"`)
      .then((response: any) => {
        if (response.length === 0) {
          return Promise.reject({code: 200, message: 'SUCCESS', value: null})
        }

        return dbRequest.read(`SELECT MAX(schedule.start) as lastBadGrade FROM grades INNER JOIN schedule ON grades.event_id = schedule.id WHERE grades.grade < 4 AND grades.student_id=${req.user.id} AND schedule.start BETWEEN "${process.env.YEAR_START}" AND "${process.env.YEAR_END}" ORDER BY schedule.start`)
      })
      .then((response: any) => {
        if (response.length === 0) {
          return Promise.reject({code: 200, message: 'SUCCESS', value: null})
        }
        const timeZoneOffset = (new Date()).getTimezoneOffset() * 60000;
        const currentDate = new Date(Date.now() - timeZoneOffset).toISOString().slice(0, 19).replace('T', ' ');
        const lastDay = new Date(response[0].lastBadGrade).toISOString().slice(0, 19).replace('T', ' ');
        return dbRequest.read(`SELECT DATEDIFF("${currentDate}","${lastDay}") as dayCounter`)
      })
      .then((response: any) => {
        return res.status(200).send({message: 'SUCCESS', value: response[0].dayCounter});
      })
      .catch((value: { code: number; message: string, value?: string }) => {
        //TODO
        return res.status(value.code).send({message: value.message, value: value?.value});
      });
  }

  getStudentWorkload(req: Request, res: Response) {
    const weekStart = moment().startOf('isoWeek').format().slice(0, 19).replace('T', ' ');
    const weekEnd = moment().endOf('isoWeek').format().slice(0, 19).replace('T', ' ');
    const dbRequest = MySQLService.getInstance();
    dbRequest.read(`SELECT schedule.* FROM schedule JOIN students ON students.class_id = schedule.class_id WHERE students.user_id = 1 AND schedule.start BETWEEN "${weekStart.slice(0, 10)} 00:00:00" AND "${weekEnd.slice(0, 10)} 23:59:59" ORDER BY schedule.start`)
      .then((response: any) => {
        const data = generateWorkloadData(new Date(weekStart), new Date(weekEnd), response);
        return res.status(200).send({message: 'SUCCESS', value: data})
      })
  }

  sendStudentHomework(req: Request, res: Response) {
    const s3 = new AWSUploader();
    const files = <S3File[]><unknown>req.files;
    s3.multiplyUpload(files).then((response) => {
      console.log(response);
    });
  }

}
