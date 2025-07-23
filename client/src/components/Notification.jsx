import React from 'react';

const Notification = ({ message }) => (
  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-2 mb-3">
    {message}
  </div>
);

export default Notification;
