import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css'; // ou un css dédié au header

function Header() {
  return (
    <header className="header">
      <img src="/static/img/Logo_Djezzy_2015-1.png" alt="Djezzy Logo" className="logo" />
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/offres-emploi">Offres d'emploi</Link></li>
          <li><Link to="/a-propos">A propos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="header-actions">
        <Link to="/connexion" className="btn-candidat">Espace candidat</Link>
        <Link to="/connexion-admin" className="btn-admin">Espace admin</Link>
      </div>
    </header>
  );
}

export default Header;