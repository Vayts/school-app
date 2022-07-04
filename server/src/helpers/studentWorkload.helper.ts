import moment, * as moments from 'moment';
import { extendMoment } from 'moment-range';
import {Schedule} from "../interfaces/schedule.interface";

const momentExt = extendMoment(moments);

export function generateWorkloadData(weekStart: Date, weekEnd: Date, data: Schedule[]) {
  const range = momentExt.range(weekStart, weekEnd);
  const fullRange = range.snapTo('day');
  const arr = Array.from(fullRange.by("d"))
  const dataset: any = [];
  const dates: string[] = [];
  arr.forEach((el) => {
    const date = el.toISOString().slice(5,10).split('-').reverse().join('.')
    dataset.push({ date, hours: 0 })
    dates.push(date);
  });
  data.forEach((el) => {
    const date = el.start.toISOString().slice(5,10).split('-').reverse().join('.');
    const datasetIndex = dates.indexOf(date);
    const start = moment(new Date(el.start));
    const end = moment(new Date(el.end));
    const lessonDuration = moment.duration(end.diff(start)).asHours();
    dataset[datasetIndex].hours = dataset[datasetIndex].hours + lessonDuration;
  })
  return [{hours: 2, empty: true }, ...dataset, {hours: 2, empty: true }];
}
