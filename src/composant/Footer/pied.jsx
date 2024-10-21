// src/composant/Footer/Footer.js

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './pied.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-menu">
          <h3>Menu</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/expertise">Expertise</a></li>
            <li><a href="/secteurs">Secteurs</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/maximize">Maximize</a></li>
          </ul>
        </div>

        <div className="footer-privacy">
          <h3>Politique de Confidentialité</h3>
          <p>Nous respectons votre vie privée et nous engageons à protéger vos données.</p>
        </div>

        <div className="footer-socials">
          <h3>Réseaux Sociaux</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SME StrategiTech. Tous droits réservés.</p>
      </div>
    </div>
  );
};

export default Footer;
