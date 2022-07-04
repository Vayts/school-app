import { Request, Response, Router } from 'express';
import path from 'node:path'

export class PagesController {
  path = '/';

  router = Router();

  constructor() {
    this.checkRoutes();
  }

  private checkRoutes() {
    this.router.get('/', this.main);
  }

  main(req: Request, res: Response) {
    res.sendFile(path.resolve(path.resolve(), './../client', 'dist/index.html'));
  }

}
