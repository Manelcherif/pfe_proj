import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css'; // or a dedicated css for header
import './css/style.css'; // or a dedicated css for header
function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/offres-emploi">Offres d'emploi</Link></li>
          <li><Link to="/a-propos">A propos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="header-actions">
        <Link to="/connexion" className="btn btn-candidat">Espace candidat</Link>
        <Link to="/connexion-admin" className="btn btn-admin">Espace admin</Link>
      </div>
    </header>
  );
}

export default Header;
