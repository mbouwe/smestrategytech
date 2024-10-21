import React from 'react';
import './nosservices.css'; // Assurez-vous d'avoir un fichier CSS associé

export default function Nosservices() {
  return (
    <div className="expertise-services-container">
      <div className="expertise-column">
        <h2>Notre Expertise</h2>
        <p>
          Nous sommes spécialisés dans la transformation digitale des entreprises. 
          Nous vous accompagnons dans la modernisation de vos processus métiers, 
          l'optimisation des flux de travail, et l'adoption des meilleures technologies 
          pour booster votre productivité et offrir une expérience utilisateur optimale.
        </p>
      </div>
      
      <div className="services-column">
        <h2>Nos Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="path/to/image1.jpg" alt="Numérisation des Ressources" className="service-image" />
            <h3>Numérisation des Ressources</h3>
            <p className="service-description">Convertir vos documents en formats numériques pour une gestion plus efficace.</p>
          </div>
          <div className="service-card">
            <img src="path/to/image2.jpg" alt="Digitalisation des Processus" className="service-image" />
            <h3>Digitalisation des Processus</h3>
            <p className="service-description">Moderniser vos processus métier pour optimiser votre productivité.</p>
          </div>
          <div className="service-card">
            <img src="path/to/image3.jpg" alt="Digitalisation des Outils" className="service-image" />
            <h3>Digitalisation des Outils</h3>
            <p className="service-description">Améliorer vos outils pour une meilleure performance et expérience utilisateur.</p>
          </div>
          <div className="service-card">
            <img src="path/to/image4.jpg" alt="Transformation Digitale Complète" className="service-image" />
            <h3>Transformation Digitale Complète</h3>
            <p className="service-description">Accompagnement dans votre transition vers un modèle plus agile et connecté.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
