// src/pages/Maximize.js

import React from 'react';
import './maximize.css';
import Offres from './offre';
import FAQ from './faq';
import TermsAndConditions from './conditions';


function Maximize() {
  return (
    <div>
      <div className="intro-container">
        <div className="intro-overlay">
          <h1>Maximize - by </h1>
          <h1 className="intro-title">
            SME <span className="highlight-blue">StrategiTech</span>
          </h1>
          <p className="intro-text">
            Votre Partenaire pour une Transformation Digitale réussie
          </p>
        
        </div>
      </div>
      <h2 className="presentation-title">Présentation de Maximize</h2>
      
      <div className="grid-container">
        {/* Carte de présentation */}
        <div className="card presentation-card">
          <p className="presentation-text">
            Chez SME StrategiTech, nous comprenons que la réussite de votre entreprise repose sur l’optimisation continue de vos applications, mais aussi sur une gestion efficace de vos processus métiers. C’est pourquoi nous avons créé <strong>Maximize</strong>, une solution hybride qui combine la <strong>Tierce Maintenance Applicative (TMA)</strong> et le <strong>Business Process Outsourcing (BPO)</strong>. Cette offre complète permet non seulement de garantir la performance de vos applications, mais aussi d’optimiser vos opérations internes pour soutenir votre croissance.
          </p>
        </div>
        

        {/* Carte "Pourquoi choisir Maximize ?" */}
        <div className="card why-choose-card">
         
          <div className="presentation-feature">
            <div className="icon">🔒</div>
            <div className="feature-text">
              <h4>Fiabilité & Sécurité</h4>
              <p>
                Vos applications et processus métiers sont au cœur de vos opérations. Avec Maximize, nous assurons un suivi continu de vos systèmes et une gestion efficace des opérations externalisées. Nos protocoles de sécurité garantissent la protection de vos données sensibles, tant pour la gestion des applications que pour les processus externalisés.
              </p>
            </div>
          </div>
          
        
        
        </div>

        {/* Autres cartes (ajoute des éléments ici si nécessaire) */}
        <div className="card additional-card">
        <div className="presentation-feature">
            <div className="icon">🔄</div>
            <div className="feature-text">
              <h4>Amélioration Continue</h4>
              <p>
                Dans un environnement en constante évolution, vos applications et vos processus métiers doivent rester performants. Maximize propose une évolution continue de vos outils numériques et de vos workflows métiers, avec de nouvelles fonctionnalités, des corrections de bugs et une optimisation des processus.
              </p>
            </div>
          </div>
        </div>
        <div className="card additional-card">
        <div className="presentation-feature">
            <div className="icon">⚡</div>
            <div className="feature-text">
              <h4>Support Réactif</h4>
              <p>
                Que vous ayez besoin de support technique ou de gestion externalisée de certains processus métier, notre équipe de spécialistes est disponible pour vous fournir une assistance rapide et efficace. Nous garantissons une réponse sous 24 heures.
              </p>
            </div>
          </div>
        </div>
        <div className="card additional-card">
        <div className="presentation-feature">
            <div className="icon">📈</div>
            <div className="feature-text">
              <h4>Évolutivité</h4>
              <p>
                Maximize s’adapte à vos besoins, que ce soit pour la maintenance applicative ou pour l'externalisation de processus métiers. Nos offres modulables vous permettent de choisir les services les mieux adaptés à votre activité.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Offres /> 
      <FAQ /> 
      <TermsAndConditions />
      

    </div>
  );
}

export default Maximize;
