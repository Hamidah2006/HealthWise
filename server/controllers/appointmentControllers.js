import Appointment from '../models/Appointment.js';
import sendEmail from '../utils/sendEmail.js';

export const createAppointment = async (req, res) => {
  const { name, email, date, time, message } = req.body;

  try {
    const appointment = await Appointment.create({ name, email, date, time, message });

    // Email to admin
    const emailContent = `
      <h2>New Appointment</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
    await sendEmail(process.env.ADMIN_EMAIL, 'New Appointment Notification', emailContent);

    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create appointment' });
  }
};

export const getAppointments = async (req, res) => {
  const appointments = await Appointment.find().sort({ createdAt: -1 });
  res.json(appointments);
};

export const deleteAppointment = async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);

  if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

  await appointment.remove();
  res.json({ message: 'Appointment deleted' });
};
