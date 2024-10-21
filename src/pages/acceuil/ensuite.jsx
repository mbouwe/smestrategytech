import React from 'react';
import './ensuite.css';
import centralImage from '/Users/imac/smestrategy/public/SME.png'; 

export default function Ensuite() {
  return (
    <div className="ensuite-container">
      <div className="services-arborescence">
        <img src={centralImage} alt="Central" className="central-image" />
        <div className="service-item left-top">
          <h3>Numérisation des Ressources</h3>
          <p>Nous vous aidons à convertir vos documents en formats numériques pour une gestion plus efficace et une meilleure accessibilité.</p>
        </div>
        <div className="service-item left-bottom">
          <h3>Digitalisation des Processus</h3>
          <p>Nous proposons des solutions pour moderniser vos processus métier, optimiser vos flux et améliorer votre productivité.</p>
        </div>
        <div className="service-item right-top">
          <h3>Digitalisation des Outils</h3>
          <p>Nous modernisons vos outils et technologies pour une meilleure performance et une expérience utilisateur optimale.</p>
        </div>
        <div className="service-item right-bottom">
          <h3>Transformation Digitale Complète</h3>
          <p>Nous vous accompagnons dans votre transition vers un modèle plus agile, connecté et orienté client.</p>
        </div>
      </div>
      <button className="contact-button">Contactez-Nous</button>
    </div>
  );
}
