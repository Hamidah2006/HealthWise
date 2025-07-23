import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState('');

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('/api/appointments', formData);
    if (res.data.success) {
      setSuccess('Appointment booked successfully! Confirmation sent to your email.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
      <input
        name="name"
        placeholder="Your Name"
        className="w-full mb-2 p-2 border"
        onChange={handleChange}
        value={formData.name}
        required
      />
      <input
        name="email"
        placeholder="Email"
        className="w-full mb-2 p-2 border"
        onChange={handleChange}
        value={formData.email}
        required
      />
      <textarea
        name="message"
        placeholder="Health concern..."
        className="w-full mb-2 p-2 border"
        onChange={handleChange}
        value={formData.message}
        required
      />
      <button className="bg-sky-600 text-white px-4 py-2">Submit</button>
      {success && <p className="text-green-600 mt-2">{success}</p>}
    </form>
  );
};

export default AppointmentForm;
      
