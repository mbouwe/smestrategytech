// src/pages/Offres.js ou dans Maximize.js

import React from 'react';
import './offre.css';

function Offres() {
  return (
    <section id="offres">
      <h2 className='titre'>Nos Offres Maximize</h2>
      <div className="offres-container">
        {/* Pack Begin */}
        <div className="offre-card">
          <h3>Pack Begin</h3>
          <p className='prix'>89€ / mois</p>
          <h4>Prestations Incluses :</h4>
          <ul>
            <li>Maintenance corrective de base : Résolution de bugs et problèmes critiques identifiés dans l'application.</li>
            <li>Assistance technique par email et téléphone : Support technique disponible, limité à 8 heures par mois.</li>
            <li>Mises à jour mineures de l’application : Application des mises à jour et correctifs mineurs.</li>
            <li>Surveillance de la performance : Rapport mensuel avec jusqu'à 3 alertes.</li>
          </ul>
          <h4>Nombre Maximum de Prestations :</h4>
          <ul>
            <li>5 incidents techniques par mois</li>
            <li>1 rapport de performance par mois sur demande</li>
          </ul>
          <a href="https://app-eu1.hubspot.com/payments/fvC44QzGQhS9HXx?referrer=PAYMENT_LINK" className="btn">Souscrire</a>
        </div>

        {/* Pack Basic */}
        <div className="offre-card">
          <h3>Pack Basic</h3>
          <p className='prix'>190€ / mois</p>
          <h4>Prestations Incluses :</h4>
          <ul>
            <li>Maintenance corrective et préventive : Résolution de bugs et maintenance préventive.</li>
            <li>Assistance technique 24/7 : Support technique disponible en continu.</li>
            <li>Mises à jour majeures et mineures : Application des mises à jour et améliorations.</li>
            <li>Surveillance proactive de la performance : Rapport mensuel avec jusqu'à 5 alertes.</li>
          </ul>
          <h4>Nombre Maximum de Prestations :</h4>
          <ul>
            <li>10 incidents techniques par mois</li>
            <li>2 rapports de performance par mois sur demande</li>
            <li>1 mise à jour majeure par trimestre</li>
          </ul>
          <a href="https://app-eu1.hubspot.com/payments/kvPtGYQR9?referrer=PAYMENT_LINK" className="btn">Souscrire</a>
        </div>

        {/* Pack Advanced */}
        <div className="offre-card offre">
        <div class="bandeau-recommande">Recommandé</div> 
          <h3>Pack Advanced</h3>
          <p className='prix'>440€ / mois</p>
          <h4>Prestations Incluses :</h4>
          <ul>
            <li>Maintenance corrective, préventive et évolutive : Résolution de bugs et évolutions selon les besoins.</li>
            <li>Assistance technique 24/7 avec support dédié : Support spécialisé en continu.</li>
            <li>Mises à jour majeures et mineures : Améliorations adaptées aux évolutions spécifiques.</li>
            <li>Analyse des performances et recommandations : Analyse approfondie des performances.</li>
          </ul>
          <h4>Nombre Maximum de Prestations :</h4>
          <ul>
            <li>20 incidents techniques par mois</li>
            <li>3 rapports de performance par mois sur demande</li>
            <li>2 mises à jour majeures par trimestre</li>
            <li>1 analyse de performance détaillée par mois sur demande</li>
          </ul>
          <a href="https://app-eu1.hubspot.com/payments/XD9ZMfTZhc?referrer=PAYMENT_LINK" className="btn">Souscrire</a>
        </div>

        {/* Pack Premium */}
        <div className="offre-card">
          <h3>Pack Premium</h3>
          <p className='prix'> 875€ / mois</p>
          <h4>Prestations Incluses :</h4>
          <ul>
            <li>Maintenance corrective, préventive et évolutive avancée : Service complet de maintenance.</li>
            <li>Support technique premium 24/7 : Accès à une équipe spécialisée.</li>
            <li>Mises à jour complètes et personnalisées : Mises à jour sur mesure.</li>
            <li>Analyse et optimisation continue des performances : Rapports détaillés avec recommandations.</li>
            <li>Gestion proactive des incidents avec plan de contingence.</li>
          </ul>
          <h4>Nombre Maximum de Prestations :</h4>
          <ul>
            <li>30 incidents techniques par mois</li>
            <li>4 rapports de performance par mois sur demande</li>
            <li>3 mises à jour majeures par trimestre</li>
            <li>1 optimisation des performances par mois</li>
          </ul>
          <a href="https://app-eu1.hubspot.com/payments/jH27sjSgSH?referrer=PAYMENT_LINK" className="btn">Souscrire</a>
        </div>

        {/* Pack Custom */}
        <div className="offre-card">
          <h3>Pack Custom</h3>
          <p className='prix'>Contactez-nous pour un devis personnalisé.</p>
          <h4>Prestations Incluses :</h4>
          <ul>
            <li>Maintenance corrective, préventive et évolutive sur mesure : Services personnalisés.</li>
            <li>Support technique entièrement personnalisé : Assistance technique sur mesure.</li>
            <li>Mises à jour et améliorations personnalisées : Développements selon les besoins.</li>
            <li>Analyse approfondie des performances : Rapports personnalisés.</li>
            <li>Gestion des processus d’intégration et des déploiements complexes.</li>
          </ul>
          <h4>Nombre Maximum de Prestations :</h4>
          <ul>
            <li>Illimité, en fonction des besoins spécifiques du Client</li>
            <li>1 rapport de performance approfondi par semaine sur demande</li>
            <li>Planification et coordination sur demande</li>
          </ul>
          <a href="https://forms.gle/8vMaPsZxbkThSBYr9" className="btn">Contactez-nous</a>
        </div>
      </div>
<div class="comment-ca-marche-container">
  <h2>Comment ça marche ?</h2>

  <div class="cartes-container">
  
    <div class="carte">
      <h3>1:Choisissez votre offre</h3>
      <p>Sélectionnez le pack qui correspond à vos besoins.</p>
    </div>

  
    <div class="carte">
      <h3>2:Automatisez votre paiement</h3>
      <p>Configurez un paiement automatique pour simplifier la gestion.</p>
    </div>

    
    <div class="carte">
      <h3>3:Suivi et support</h3>
      <p>Profitez de notre suivi continu et de notre support 24/7.</p>
    </div>
  </div>
</div>

    </section>
  );
}

export default Offres;
