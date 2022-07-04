import { Request, Response, Router } from 'express';
import { MySQLService } from '../services/mySQL.service';

export class CalendarController {
    path = '/calendar';

    router = Router();

    constructor() {
        this.checkRoutes();
    }

    checkRoutes() {
        this.router.get('/schedule/:date', this.getSchedule)
    }

    getSchedule(req: Request, res: Response) {
        const timeZoneOffset = (new Date()).getTimezoneOffset() * 60000;
        const reqDate = (new Date(req.params.date).getTime());
        const formattedDate = new Date((reqDate - timeZoneOffset)).toISOString().slice(0, 10).replace('T', ' ');


        const dbRequest = MySQLService.getInstance();
        const query = `SELECT schedule.id, schedule.name, schedule.start, schedule.end, schedule.required, schedule.isGrade, CONCAT(users.firstName, ' ', users.lastName) as teacher FROM schedule LEFT JOIN users ON schedule.teacher_id = users.id WHERE schedule.start BETWEEN "${formattedDate} 00:00:00" AND "${formattedDate} 23:59:59"`
        dbRequest
            .read(query)
            .then((value: any) => {
                res.status(200).send({ message: 'DONE', schedule: value });
            })
            .catch((value: { code: number; message: string }) => {
                res.status(value.code).send({ message: value.message });
        });
    };
}
