import { Schema, model } from 'mongoose';

const StatSchema = new Schema({
  month: String,
  date: String,
  year: String,
  tendency: String,
  district: String,
})

export default model('Stat', StatSchema);
