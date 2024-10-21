// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <img src="src/assets/SME.png" alt="sme" />
        <div className="n-name">
          <div className="n-name1">SME</div>
          <div className="n-name2">StrategyTech</div>
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link to="/">Acceuil</Link>
            </li>
            <li>
              <Link to="/expertise">Expertise</Link>
            </li>
            <li>
              <Link to="/secteurs">Secteur</Link>
            </li>
            <li>
              <Link to="/about">À Propos</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/maximize">Maximize</Link>
            </li>
            <li>
              <Link to="/contact">Nous Contacter</Link>
            </li>
          </ul>
        </div>
    
      </div>
    </div>
  );
}
