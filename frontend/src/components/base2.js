import React from 'react';
import './css/style.css';
function Base2() {
  return (
    <>
      <div className="container">
        <aside className="sidebar">
          <div className="brand">
            <img src="/static/img/Logo_Djezzy_2015-1.png" alt="Logo" />
            <div className="brand-text">Djezzy Recrutement</div>
          </div>

          <nav className="sidebar-menu">
            <div className="menu-title">Général</div>
            <a href="#" className="menu-item active">
              <i className="fas fa-chart-line"></i>
              <span>Tableau de bord</span>
            </a>
            <a href="/liste-des-offres" className="menu-item">
              <i className="fas fa-bullhorn"></i>
              <span>Annonces</span>
            </a>
            <a href="/candidats" className="menu-item">
              <i className="fas fa-user-tie"></i>
              <span>Candidats</span>
            </a>

            <a href="/entretien" className="menu-item">
              <i className="fas fa-calendar-check"></i>
              <span>Entretiens</span>
            </a>

            <div className="menu-title">Compte</div>
            <a href="/admin-profile" className="menu-item">
              <i className="fas fa-user-circle"></i>
              <span>Mon profil</span>
            </a>
            <a href="#" className="menu-item">
              <i className="fas fa-sign-out-alt"></i>
              <span>Déconnexion</span>
            </a>
          </nav>
        </aside>
        <main>
          {/* Content will be injected here */}
        </main>
        <div className="footer">
          <p>&copy; 2025 Djezzy Recrutement. Tous droits réservés.</p>
        </div>
      </div>
      <script src="/static/js/mainA.js"></script>
    </>
  );
}

export default Base2;
