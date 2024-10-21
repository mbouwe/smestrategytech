import React, { useState } from 'react';
import './FAQ.css'; // Fichier CSS amélioré

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Fonction pour gérer l'ouverture/fermeture des éléments de la FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle l'état
  };

  // Liste des questions/réponses
  const faqs = [
    {
      question: "Quelles applications sont éligibles à la TMA et aux services BPO ?",
      answer:
        "Toutes vos applications, qu’elles soient web, mobiles, SaaS ou encore des systèmes ERP, CRM, ainsi que vos processus métier critiques peuvent bénéficier des services Maximize. Que vous ayez besoin de support pour des logiciels développés en interne ou par un autre prestataire, nous sommes en mesure d'assurer leur maintenance. De plus, nos services de BPO (Business Process Outsourcing) peuvent compléter la gestion applicative en prenant en charge les processus opérationnels associés, pour une solution complète.",
    },
    {
      question: "Que faire si je dépasse mes heures d’intervention ?",
      answer:
        "Pas de panique. Si vous atteignez la limite d’heures incluse dans votre forfait, vous pouvez opter pour une migration vers une offre supérieure ou des heures supplémentaires seront simplement facturées selon le tarif horaire en vigueur. Nos services incluent un support 24/7 dans la majorité des offres, assurant une intervention rapide et continue.",
    },
    {
      question: "Puis-je changer de forfait à tout moment ?",
      answer:
        "Oui, nos offres sont flexibles et évolutives. Vous pouvez ajuster votre abonnement à tout moment, en fonction de l’évolution de vos besoins et sans interruption de service. Cela inclut également la possibilité de compléter les services de TMA par une gestion BPO pour vos processus métiers si nécessaire.",
    },
    {
      question: "Quels sont les avantages de combiner la TMA et le BPO ?",
      answer:
        "En croisant la Tierce Maintenance Applicative (TMA) avec nos services de BPO, vous obtenez une optimisation complète non seulement de vos applications, mais aussi de vos processus métiers associés.",
    },
    {
        question: "Quels sont les avantages de combiner la TMA et le BPO ?",
        answer:
          "En croisant la Tierce Maintenance Applicative (TMA) avec nos services de BPO, vous obtenez une optimisation complète non seulement de vos applications, mais aussi de vos processus métiers associés. Cela permet de déléguer à un prestataire unique la gestion technique et opérationnelle de vos outils numériques et de vos workflows, vous garantissant une performance maximale à moindre coût et un suivi opérationnel rigoureux.",
      },
      {
        question: "Comment la BPO peut-elle améliorer la gestion de mes applications ?",
        answer:
          "Nos services BPO s'intègrent parfaitement avec la TMA pour gérer vos processus métiers clés (comme la gestion des commandes, les services client ou la facturation) directement au sein de vos applications. Cette approche permet d’aligner les performances applicatives et opérationnelles, en automatisant ou externalisant les tâches répétitives tout en améliorant l'efficacité globale de votre entreprise.",
      },


    {
      question: "Comment fonctionne le support technique ?",
      answer:
        "Notre support est accessible 24/7 pour répondre à toutes vos demandes, que ce soit pour des incidents critiques ou des questions techniques. Selon votre offre, vous aurez accès à des équipes dédiées capables de vous fournir une assistance immédiate et personnalisée, adaptée à vos exigences.",
    },
    {
        question: "Quelles sont les options de personnalisation pour mon entreprise ?",
        answer:
          "Nos offres incluent une gamme complète de services personnalisables, de la maintenance corrective et évolutive sur mesure à la gestion des processus métiers avec la BPO. Pour les grandes entreprises ou celles ayant des besoins spécifiques, nous proposons des solutions totalement sur mesure, adaptées à la complexité de vos environnements technologiques et organisationnels.",
      },
      {
        question: "Mon entreprise est en pleine croissance. Comment Maximize peut m’aider à évoluer ?",
        answer:
          "Maximize est conçu pour accompagner les entreprises en pleine croissance. Grâce à nos offres modulables, vous pouvez faire évoluer votre abonnement pour inclure des fonctionnalités supplémentaires ou un soutien plus intensif, tout en intégrant des services BPO pour externaliser certaines tâches administratives et optimiser vos opérations.",
      },
      {
        question: "Quelles sont les garanties de sécurité pour mes données et mes applications ?",
        answer:
          "Nous mettons en place des protocoles de sécurité rigoureux pour protéger vos applications et vos données. Toutes nos interventions, qu'elles concernent la TMA ou le BPO, sont effectuées dans un environnement sécurisé. Nous appliquons des normes de conformité strictes et des pratiques de sauvegarde pour garantir la protection et la confidentialité de vos informations.",
      },
      {
        question: "Comment suivre la performance de mes applications et processus ?",
        answer:
          "Avec chaque forfait, vous recevez des rapports réguliers détaillant la performance de vos applications et processus métiers. Ces rapports incluent des analyses approfondies, des recommandations pour l’optimisation, ainsi qu'un suivi des incidents pour garantir une amélioration continue. Vous pouvez également demander des rapports spécifiques à tout moment, selon vos besoins.",
      },
      {
        question: "Comment démarrer avec Maximize ?",
        answer:
          "Il vous suffit de choisir l'offre qui correspond le mieux à vos besoins. Que vous cherchiez une solution simple de maintenance applicative ou une prise en charge complète de vos processus métiers grâce au BPO, nous vous accompagnons dès la souscription. Vous bénéficiez immédiatement de nos services de suivi, de support et d’optimisation continue.",
      },
    // Ajoutez plus de FAQ ici
  ];

  return (
    <section id="faq">
      <h2 className="faq-title">FAQ</h2>
      {faqs.map((faq, index) => (
        <article
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          aria-expanded={activeIndex === index ? 'true' : 'false'}
        >
          <h3
            tabIndex="0"
            role="button"
            aria-controls={`faq${index}`}
            onClick={() => toggleFAQ(index)}
            onKeyPress={(e) => e.key === 'Enter' && toggleFAQ(index)}
          >
            {faq.question}
            <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
          </h3>
          <p
            id={`faq${index}`}
            className="faq-answer"
            style={{ maxHeight: activeIndex === index ? '200px' : '0' }}
          >
            {faq.answer}
          </p>
        </article>
      ))}
    </section>
  );
};

export default FAQ;
