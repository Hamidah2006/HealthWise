import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppointmentForm from '../components/AppointmentForm';

const BookAppointment = () => (
  <>
    <Header />
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl mb-4 text-sky-700 font-semibold">Book an Appointment</h2>
      <AppointmentForm />
    </div>
    <Footer />
  </>
);

export default BookAppointment;
