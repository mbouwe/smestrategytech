import React, { useState } from 'react';
import './contact.css'; // Assurez-vous d'avoir un fichier CSS associé

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Reset du formulaire après soumission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-us-page">
      {/* Ajout de la section d'introduction */}
      <div className="intro-container">
        <div className="intro-overlay">
          <h1 className="intro-title">
            SME <span className="highlight-blue">StrategiTech</span>
          </h1>
          <h2 className="intro-subtitle">Transformation Digitale</h2>
          <p className="intro-text">
            Nous sommes ravis de discuter de vos projets et besoins numériques.
          </p>
        </div>
      </div>

      {/* Contenu de la page de contact */}
      <div className="contact-page">
        <div className="contact-header">
          <h2>Nous Contacter</h2>
          <p>
            Nous sommes toujours ravis d'entendre parler de votre projet et de discuter de la manière dont nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <p>
            Que vous soyez prêt à lancer un nouveau projet, à discuter d'une collaboration ou simplement à poser une question, n'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="contact-section">
          {/* Formulaire de contact à gauche */}
         

          {/* Texte de contact à droite */}
          <div className="contact-text-container">
            <div className="contact-options">
              <div className="contact-option">
                <h3>Contactez-nous pour discuter de votre projet</h3>
                <a href="/formulaire-projet" className="cta-button">nous en dire plus</a>
              </div>

              <div className="contact-option">
                <h3>Planifier une discussion par appel</h3>
                <a href="https://calendly.com/sme-strategitech/30min" className="cta-button">Planifier un appel</a>
              </div>

              <div className="contact-option">
                <h3>Nous contacter par email ou téléphone</h3>
                <p>
                  Vous pouvez nous joindre par e-mail en <a href="mailto:contact@sme-strategitech.com">cliquant ici</a>, ou bien par téléphone en <a href="tel:+33123456789">cliquant ici</a>.
                </p>
              </div>
            </div>
            <div className="formule"></div>
           <br></br>

            <div className="contact-address">
              <h3>Envoyer un courrier</h3>
              <p>
                SME StrategiTech<br />
                144, Avenue Charles de Gaulle<br />
                92200 Neuilly Sur Seine<br />
                France
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
