import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Base from './components/base';
import Home from './components/home';
import APropos from './components/APropos';
import Contact from './components/contact';
import Connexion from './components/connexion';
import ConnexionAdmin from './components/connexionAdmin';
import OffresDEmploi from './components/OffresDEmploi';
import AdminProfile from './components/adminProfile';
import CandidatProfil from './components/candidatProfil';

function App() {
  return (
    <Router>
      <Base>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offres-emploi" element={<OffresDEmploi />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/connexion-admin" element={<ConnexionAdmin />} />
          <Route path="/profile-admin" element={<AdminProfile />} />
          <Route path="/profile-candidat" element={<CandidatProfil />} /> 
        </Routes>
      </Base>
    </Router>
  );
}

export default App;