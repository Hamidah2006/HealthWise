import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('/api/admin/login', credentials);
    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto mt-10 shadow-md border rounded">
      <h2 className="text-2xl mb-4 text-center text-sky-700 font-bold">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          className="w-full mb-3 p-2 border"
          placeholder="Username"
          onChange={handleChange}
          value={credentials.username}
          required
        />
        <input
          type="password"
          name="password"
          className="w-full mb-3 p-2 border"
          placeholder="Password"
          onChange={handleChange}
          value={credentials.password}
          required
        />
        <button className="bg-sky-700 text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
