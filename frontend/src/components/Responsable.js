import React from 'react';
import './css/responsable.css';

function Responsable() {
  return (
    <div className="container">
      <main>
        <div className="offer-details">
          <h2>Responsable des Ressources Humaines</h2>
          <p className="location"><strong>Lieu :</strong> Alger, Algérie</p>
          <p className="date"><strong>Date de publication :</strong> 07 Mars 2025</p>

          <h3>Description du poste</h3>
          <p>
            En tant que Responsable des Ressources Humaines, vous serez chargé de gérer et développer les politiques RH de l'entreprise, en veillant à l'amélioration du bien-être des employés et à l'optimisation des performances organisationnelles.
          </p>

          <h3>Missions principales</h3>
          <ul>
            <li>Développer et mettre en œuvre les stratégies RH.</li>
            <li>Superviser le recrutement et la gestion des talents.</li>
            <li>Assurer la gestion administrative et sociale des employés.</li>
            <li>Élaborer des programmes de formation et de développement.</li>
            <li>Gérer les relations sociales et assurer la conformité légale.</li>
          </ul>

          <h3>Profil recherché</h3>
          <ul>
            <li>Bac+5 en Gestion des Ressources Humaines, Droit ou équivalent.</li>
            <li>Expérience de 5 ans minimum en RH.</li>
            <li>Bonne connaissance du droit du travail en Algérie.</li>
            <li>Excellentes compétences en communication et leadership.</li>
          </ul>

          <button className="apply-button">Postuler</button>
        </div>
      </main>
    </div>
  );
}

export default Responsable;
