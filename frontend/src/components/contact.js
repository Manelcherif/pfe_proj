import React from 'react';
import './css/contact.css';


function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="contact-header">
            <h1>Contactez-nous</h1>
            <p>Vous avez des questions ou besoin d'assistance ? Notre équipe est là pour vous aider et répondre à toutes vos préoccupations.</p>
          </div>

          <div className="contact-content">
            <div className="contact-form">
              <form id="contactForm">
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Numéro de téléphone</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select id="subject" name="subject" required>
                    <option value="">Sélectionnez un sujet</option>
                    <option value="assistance">Assistance technique</option>
                    <option value="facturation">Facturation</option>
                    <option value="offres">Informations sur les offres</option>
                    <option value="suggestion">Suggestions</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Envoyer le message</button>
              </form>
              <div className="response-message" id="responseMessage"></div>
            </div>

            <div className="contact-info">
              <div className="info-card">
                <h3>Nos coordonnées</h3>
                <div className="info-item">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <p>Siège social Djezzy, Route de Wilaya, Bir Mourad Raïs, Alger, Algérie</p>
                </div>
                <div className="info-item">
                  <div className="icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <p>Service client: 888 (depuis un mobile Djezzy)<br />+213 770 888 888 (depuis un autre réseau)</p>
                </div>
                <div className="info-item">
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <p>info@djezzy.dz</p>
                </div>
                <div className="info-item">
                  <div className="icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <p>Du dimanche au jeudi: 8h00 - 17h00<br />Vendredi et samedi: 9h00 - 16h00</p>
                </div>
                <div className="contact-social-links">
                  <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>

              <div className="info-card">
                <h3>Assistance rapide</h3>
                <div className="info-item">
                  <div className="icon">
                    <i className="fas fa-comment-dots"></i>
                  </div>
                  <p>Chat en direct disponible sur notre application mobile Djezzy</p>
                </div>
                <div className="info-item">
                  <div className="icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <p>Téléchargez notre application pour une assistance instantanée</p>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12794.880103079482!2d3.0511233697753906!3d36.738223899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb26d3c0a172d%3A0x5d387c9d1f1b83e3!2sDjezzy!5e0!3m2!1sfr!2sdz!4v1654513352161!5m2!1sfr!2sdz"
                  allowFullScreen=""
                  loading="lazy"
                  title="Djezzy Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
