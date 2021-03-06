import { Router } from "express";
import {verifyUser} from "../middleware/verifyUser.middleware";
import {StudentService} from "../services/student.service";
import {GeneralService} from "../services/general.service";
const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({storage: storage})

export class StudentController {
  path = '/student';
  
  router = Router();
  
  service = new StudentService();

  generalService = new GeneralService();
  
  constructor() {
    this.checkRoutes();
  }
  
  checkRoutes() {
    this.router.get('/attendance/:period', verifyUser, this.service.getStudentAttendance);
    this.router.get('/deadlines', verifyUser, this.service.getStudentDeadlines);
    this.router.get('/average_grade', verifyUser, this.service.getStudentAverageGrade);
    this.router.get('/bad_grades', verifyUser, this.service.getDaysWithoutBadGrades);
    this.router.get('/workload', verifyUser, this.service.getStudentWorkload);
    this.router.post('/homework/:id', verifyUser, upload.array('file'), this.service.sendStudentHomework);
    this.router.get('/events', verifyUser, this.generalService.getEvents);
  }
}
