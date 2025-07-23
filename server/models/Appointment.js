import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  time: String,
  message: String,
}, { timestamps: true });

export default mongoose.model('Appointment', appointmentSchema);
