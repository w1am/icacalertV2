import { Schema, model } from 'mongoose';

const AlertSchema = new Schema({
  desc: { type: String, required: true },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  city: String,
  district: String,
  latitude: String,
  longitude: String,
  mdhm: { type: String, default: String },
  d: { type: String, required: true },
  my: { type: String, required: true }
})

export default model('Alert', AlertSchema)
