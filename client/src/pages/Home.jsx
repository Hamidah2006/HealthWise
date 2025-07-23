import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <Header />
    <main className="p-6 text-center">
      <h2 className="text-4xl text-sky-700 font-bold mb-4">Welcome to HealthWise</h2>
      <p className="mb-6 text-lg">Book health-based diet consultations based on your condition.</p>
      <Link to="/book">
        <button className="bg-sky-600 text-white px-6 py-2 rounded shadow">Book Now</button>
      </Link>
    </main>
    <Footer />
  </>
);

export default Home;
