// src/pages/home/Home.js

import React from 'react';
import './acceuil.css'; 
import Suite from './suite'
import Ensuite from './ensuite'
import Nosservices from './Nos services/Nosservices'

const Home = () => {
  return (
    <div className="home">
      <div className="intro-container">
        <div className="intro-overlay">
          <h1 className="intro-title">
            SME <span className="highlight-blue">StrategiTech</span>
          </h1>
          <h2 className="intro-subtitle">Transformation Digitale</h2>
          <p className="intro-text">
            Votre Partenaire pour une Transformation Digitale réussie
          </p>
          <a href="https://calendly.com/sme-strategitech/30min" className="intro-button">Commencer votre transformation</a>
        </div>
      </div>
      
      <Suite/>
    <Ensuite/>
    <Nosservices/>
      

      
    </div>
  );
};

export default Home;
