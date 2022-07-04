import { App } from './app';
import {CalendarController} from "./controllers/calendar.controller";
import {AuthController} from "./controllers/auth.controller";
import {PagesController} from "./controllers/pages.controller";
import {StudentController} from "./controllers/student.controller";

const app = new App([new CalendarController(), new AuthController(), new PagesController(), new StudentController()]);

app.start();
