import React from 'react';
import './Suite.css';

export default function Suite() {
  return (
    <div className="suite-container">
      <div className="welcome-text">
        <h2>Bienvenue chez SME StrategiTech</h2>
        <p>
          Chez SME StrategiTech, nous sommes passionnés par l'innovation et la transformation digitale des entreprises de toute taille. Notre mission est d'accompagner les entreprises dans leur parcours numérique en leur offrant des solutions adaptées, des services personnalisés et un accompagnement sur mesure pour répondre à leurs besoins spécifiques.
        </p>
        <a href="https://calendly.com/sme-strategitech/30min" className="welcome-button">Découvrez nos services</a>
      </div>
      <div className="services-list">
        <div className="service-card">
          <div className="service-icon">🛠️</div>
          <h3 className="service-title">Expertise Agile</h3>
          <p className="service-description">
            Transformez votre entreprise avec notre approche agile et adaptative.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3 className="service-title">Innovation Digitale</h3>
          <p className="service-description">
            Libérez le potentiel numérique de votre entreprise grâce à nos solutions innovantes.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">🤝</div>
          <h3 className="service-title">Accompagnement</h3>
          <p className="service-description">
            Profitez d'un accompagnement sur mesure pour une transformation digitale réussie.
          </p>
        </div>
      </div>
    </div>
  );
}
