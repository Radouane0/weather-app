import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import DayPage from './pages/DayPage/DayPage';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  window.scrollTo({top: 0, behavior: 'smooth'});

  return (
    <div>
      <NavBar />
      <div className="bg-main">
        <Routes forceRefresh={false}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/weather-day/:day" element={<DayPage />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;


