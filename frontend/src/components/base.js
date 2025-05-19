import React from 'react';
import './css/style.css';

function Base({ children }) {
  return (
    <>
      <header>
        <div className="logo">
           <img src="/Logo_Djezzy_2015-1.png" alt="Logo Djezzy" />
        </div>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/offres-emploi">Offres d'emploi</a></li>
            <li><a href="/a-propos">A propos</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/connexion" className="signup-btn">Espace candidat</a></li>
            <li><a href="/connexion-admin" className="signup-btn">Espace admin</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3>À propos</h3>
            <p>Djezzy Recrutement vous aide à trouver l'emploi de vos rêves grâce à nos offres adaptées à votre profil.</p>
          </div>
          <div className="footer-section">
            <h3>Liens utiles</h3>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/offres-emploi">Offres d'emploi</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Suivez-nous</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 Djezzy Recrutement. Tous droits réservés.
        </div>
      </footer>
      {/* <script src="/static/js/main.js"></script> */}
    </>
  );
}

export default Base;