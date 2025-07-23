import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../auth';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  return (
    <nav className="bg-sky-700 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
        Logout
      </button>
    </nav>
  );
};

export default AdminNavbar;
