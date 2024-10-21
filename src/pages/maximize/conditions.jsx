import React from "react";
import "./conditions.css"; // Importation du fichier CSS

const CGV = () => {
  return (
    <div className="cgv-container">
      <h1 className="cgv-title">Conditions Générales de Vente</h1>
      <p className="cgv-intro">
        Les présentes Conditions Générales de Vente (CGV) s’appliquent aux services de
        Tierce Maintenance Applicative (TMA) et de Business Process Outsourcing (BPO)
        fournis par SME StrategiTech dans le cadre des abonnements Maximize. Elles
        définissent les modalités contractuelles entre le Client et SME StrategiTech, et
        s’appliquent dès la souscription à une offre TMA.
      </p>

      <h2 className="cgv-section-title">1. Objet du Contrat</h2>
      <p className="cgv-text">
        Les présentes conditions ont pour objet de définir les modalités et conditions
        dans lesquelles SME StrategiTech s’engage à fournir des prestations de maintenance
        et d’évolution d’applications pour le compte du Client, dans le cadre d’un
        abonnement mensuel aux services de TMA.
      </p>

      <h2 className="cgv-section-title">2. Souscription et Entrée en Vigueur</h2>
      <p className="cgv-text">
        La souscription à un abonnement TMA Maximize est effective à partir de la
        validation de la commande et du premier paiement automatique.
      </p>

      <h2 className="cgv-section-title">3. Modalités de Paiement</h2>
      <p className="cgv-text">
        Le paiement des prestations de TMA s’effectue par prélèvement automatique mensuel
        sur le compte du Client. Les tarifs et détails des prestations sont stipulés dans
        l’Annexe A. Toute modification de tarif sera notifiée par SME StrategiTech au
        moins 30 jours avant son entrée en vigueur.
      </p>
      <ul className="cgv-list">
        <li>Le prélèvement s’effectue chaque mois à la date anniversaire de la souscription.</li>
        <li>
          En cas de non-paiement à l’échéance, SME StrategiTech se réserve le droit de
          suspendre les services jusqu’au règlement des sommes dues.
        </li>
        <li>
          Si le Client souhaite résilier son abonnement, un préavis de 30 jours est requis
          avant l’arrêt des services.
        </li>
      </ul>

      <h2 className="cgv-section-title">4. Durée et Renouvellement</h2>
      <p className="cgv-text">
        Le contrat de TMA est souscrit pour une durée indéterminée avec un engagement
        minimum de 3 mois. À l’issue de cette période initiale, l’abonnement est renouvelé
        automatiquement chaque mois par tacite reconduction, sauf en cas de résiliation
        selon les termes spécifiés ci-dessous.
      </p>

      <h2 className="cgv-section-title">5. Résiliation</h2>
      <p className="cgv-text">
        Le Client peut résilier son abonnement TMA à tout moment après la période
        d’engagement minimale de 3 mois, sous réserve de respecter un préavis de 30 jours.
        SME StrategiTech peut résilier l’abonnement en cas de non-paiement ou de violation
        grave des présentes CGV.
      </p>

      <h2 className="cgv-section-title">6. Portée des Prestations</h2>
      <p className="cgv-text">
        Les prestations de TMA incluent :
      </p>
      <ul className="cgv-list">
        <li>Maintenance corrective : correction des anomalies identifiées dans les applications maintenues.</li>
        <li>Maintenance évolutive : amélioration des fonctionnalités et adaptation aux évolutions technologiques ou réglementaires.</li>
        <li>Support technique : assistance au Client pour l’utilisation des applications.</li>
        <li>Surveillance : suivi des performances et gestion proactive des incidents.</li>
      </ul>

      <h2 className="cgv-section-title">7. Interventions supplémentaires</h2>
      <p className="cgv-text">
        Si les besoins du Client dépassent le volume d’heures d’intervention inclus dans son
        offre, des heures supplémentaires peuvent être facturées au tarif horaire applicable
        à l’offre souscrite, ou une mise à jour de l’abonnement peut être proposée pour
        couvrir ces nouveaux besoins.
      </p>

      <h2 className="cgv-section-title">8. Responsabilités</h2>
      <p className="cgv-text">
        SME StrategiTech s’engage à fournir les services de TMA dans les meilleures conditions
        de qualité et de sécurité. Toutefois, l’entreprise ne saurait être tenue responsable des
        interruptions de service liées à des facteurs externes hors de son contrôle.
      </p>

      <h2 className="cgv-section-title">9. Confidentialité et Propriété</h2>
      <p className="cgv-text">
        SME StrategiTech s’engage à respecter la confidentialité des données et informations
        fournies par le Client dans le cadre du contrat TMA.
      </p>

      <h2 className="cgv-section-title">10. Limitation de Responsabilité</h2>
      <p className="cgv-text">
        En cas de manquement de SME StrategiTech dans la fourniture des services, la responsabilité
        de l’entreprise sera limitée au montant de l’abonnement TMA payé par le Client pour le
        mois concerné par le litige.
      </p>

      <h2 className="cgv-section-title">11. Réclamations</h2>
      <p className="cgv-text">
        Toute réclamation liée à l’exécution des prestations de TMA devra être adressée par écrit
        à SME StrategiTech dans un délai de 30 jours suivant la survenue du problème.
      </p>

      <h2 className="cgv-section-title">12. Modification des CGV</h2>
      <p className="cgv-text">
        SME StrategiTech se réserve le droit de modifier les présentes CGV à tout moment.
      </p>

      <h2 className="cgv-section-title">13. Loi applicable et Juridiction compétente</h2>
      <p className="cgv-text">
        Le contrat TMA est régi par le droit français. En cas de litige relatif à l’interprétation
        ou à l’exécution des présentes CGV, les parties s’efforceront de trouver une solution amiable.
      </p>
    </div>
  );
};

export default CGV;
