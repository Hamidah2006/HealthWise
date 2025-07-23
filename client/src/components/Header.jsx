import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-sky-600 text-white p-4 flex justify-between">
    <h1 className="text-2xl font-bold">HealthWise</h1>
    <nav className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/book">Book Appointment</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  </header>
);

export default Header;
