import express from 'express';
import {
  createAppointment,
  getAppointments,
  deleteAppointment,
} from '../controllers/appointmentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(createAppointment).get(protect, getAppointments);
router.route('/:id').delete(protect, deleteAppointment);

export default router;
