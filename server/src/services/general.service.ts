import {Event} from "../model/Events";
import {Request, Response} from "express";

export class GeneralService {

  async getEvents(req: Request, res: Response) {
    try {
      const timeZoneOffset = (new Date()).getTimezoneOffset() * 60000;
      const currentDate = new Date((Date.now() + 24 * 60 * 60) - timeZoneOffset).toISOString().slice(0, 10).replace('T', ' ');
      const events = await Event.find({start: {$gte: new Date(`${currentDate} 00:00:00`).toISOString()}}).sort({deadline: 1});
      res.status(200).send({message: 'SUCCESS', value: events})
    } catch (err) {
      res.status(409).send({message: 'CONNECTION_ERROR'});
    }
  }
}
