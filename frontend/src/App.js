import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/home';
import APropos from './components/APropos';
import Contact from './components/contact';
import Connexion from './components/connexion';
import ConnexionAdmin from './components/connexionAdmin';
import OffresDEmploi from './components/OffresDEmploi';
import AdminProfile from './components/adminProfile';
import AdminProfile from './components/candidatProfilProfile';
// ...autres imports...

// Utilise uniquement les fichiers CSS existants dans components/css/
import './components/css/style.css';
import './components/css/offres.css';
import './components/css/ListeOffres.css';
import './components/css/tableauBord.css';
import './components/css/adminProfile.css';
// Ajoute ici d'autres CSS existants si besoin

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Offres-emploi" element={<OffresDEmploi />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/connexion-admin" element={<ConnexionAdmin />} />
         <Route path="/profile-admin" element={< AdminProfile/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;