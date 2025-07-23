import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar';
import Notification from '../components/Notification';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [notif, setNotif] = useState('');

  const fetchAppointments = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('/api/admin/appointments', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setAppointments(res.data);
  };

  const handleDelete = async id => {
    const token = localStorage.getItem('token');
    await axios.delete(`/api/admin/appointments/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setNotif('Appointment deleted.');
    fetchAppointments();
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Appointments</h2>
        {notif && <Notification message={notif} />}
        <ul className="space-y-3">
          {appointments.map((appt) => (
            <li key={appt._id} className="border p-4 flex justify-between items-center">
              <div>
                <p><strong>Name:</strong> {appt.name}</p>
                <p><strong>Email:</strong> {appt.email}</p>
                <p><strong>Message:</strong> {appt.message}</p>
              </div>
              <button onClick={() => handleDelete(appt._id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
        
