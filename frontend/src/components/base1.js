import React from 'react';
import './css/styleC.css';
function Base1() {
  return (
    <>
      <header className="header">
        <img src="/static/img/Logo_Djezzy_2015-1.png" alt="Djezzy Logo" className="logo" />
        <div className="header-menu">
          <a href="/offres_candidat">OFFRE D'EMPLOI</a>
          <a href="/mes_candidats">MES CANDIDATURES</a>
          <div className="user-icon">
            <a href="/candidat_profile"><i className="fas fa-user"></i></a>
          </div>
        </div>
      </header>
      <main>
        {/* Content will be injected here */}
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
              <li><a href="/offres_emploi">Offres d'emploi</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Suivez-nous</h3>
            <div className="footer-social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 Djezzy Recrutement. Tous droits réservés.
        </div>
      </footer>
      <script src="/static/js/mainC.js"></script>
    </>
  );
}

export default Base1;
