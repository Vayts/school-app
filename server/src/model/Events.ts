import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  }
});

export const Event = mongoose.model('Event', EventSchema);
