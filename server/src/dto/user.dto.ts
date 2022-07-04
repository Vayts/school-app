export class UserDto {
   login: string;
   id: number;
   role: string;
   firstName: string;
  
  constructor(user: any) {
    this.login = user.login;
    this.id = user.id;
    this.role = user.role.toLowerCase();
    this.firstName = user.firstName;
  }
}
