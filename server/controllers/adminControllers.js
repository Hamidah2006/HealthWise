import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });

export const registerAdmin = async (req, res) => {
  const { username, password } = req.body;
  const exists = await Admin.findOne({ username });

  if (exists) return res.status(400).json({ message: 'Admin already exists' });

  const admin = await Admin.create({ username, password });
  res.status(201).json({ _id: admin._id, username: admin.username });
};

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });

  if (admin && (await admin.matchPassword(password))) {
    const token = generateToken(admin._id);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
                
