import React, { useState } from 'react';
import './css/mesCandidat.css';

function MesCandidats({ candidatures }) {
  const [filterStatus, setFilterStatus] = useState('all');

  const handleFilterClick = (status) => {
    setFilterStatus(status);
  };

  const filteredCandidatures = candidatures.filter((candidature) => {
    if (filterStatus === 'all') return true;
    return candidature.statut === filterStatus;
  });

  return (
    <div className="main-container">
      <div className="page-header">
        <h1 className="page-title">Mes Candidatures</h1>
        <div className="filter-controls">
          <div className="filter-dropdown">
            <button className="filter-btn">
              <span>{filterStatus === 'all' ? 'Tous les statuts' : filterStatus}</span>
              <i className="fas fa-chevron-down"></i>
            </button>
            <div className="filter-dropdown-content">
              <div
                className={`filter-option ${filterStatus === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterClick('all')}
              >
                Tous les statuts
              </div>
              <div
                className={`filter-option ${filterStatus === 'en_attente' ? 'active' : ''}`}
                onClick={() => handleFilterClick('en_attente')}
              >
                En attente
              </div>
              <div
                className={`filter-option ${filterStatus === 'accepte' ? 'active' : ''}`}
                onClick={() => handleFilterClick('accepte')}
              >
                Accepté
              </div>
              <div
                className={`filter-option ${filterStatus === 'refuse' ? 'active' : ''}`}
                onClick={() => handleFilterClick('refuse')}
              >
                Rejeté
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="applications-container">
        {filteredCandidatures.length > 0 ? (
          filteredCandidatures.map((candidature) => (
            <div key={candidature.id} className="application-card" data-status={candidature.statut}>
              <div className="card-header">
                <div className="company-logo">
                  <img src="/static/img/Logo_Djezzy_2015-1.png" alt="Djezzy" />
                </div>
                <div className="job-info">
                  <h3 className="job-title">{candidature.offre.titre}</h3>
                  <div className="job-meta">
                    <span className="job-meta-item">
                      <i className="fas fa-graduation-cap"></i> {candidature.offre.niveau_etude || 'Bac+5'}
                    </span>
                    <span className="job-meta-item">
                      <i className="fas fa-map-marker-alt"></i> {candidature.offre.region.nom}
                    </span>
                    <span className="job-meta-item">
                      <i className="fas fa-briefcase"></i> {candidature.offre.type_contrat}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <span className={`status-badge status-${candidature.statut}`}>
                  <i
                    className={`fas fa-${
                      candidature.statut === 'accepte'
                        ? 'check-circle'
                        : candidature.statut === 'refuse'
                        ? 'times-circle'
                        : 'clock'
                    }`}
                  ></i>
                  {candidature.statut_display}
                </span>
                <div className="application-details">
                  <div className="detail-item">
                    <span className="detail-label">Date de postulation:</span>
                    <span>{new Date(candidature.date_postulation).toLocaleDateString()}</span>
                  </div>

                  {candidature.statut === 'accepte' ? (
                    <>
                      <div className="detail-item">
                        <span className="detail-label">Date d'acceptation:</span>
                        <span>{new Date(candidature.date_mise_a_jour).toLocaleDateString()}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Prochaine étape:</span>
                        <span>
                          {candidature.entretien
                            ? `Entretien le ${new Date(candidature.entretien.date_entretien).toLocaleDateString()} à ${candidature.entretien.heure_entretien}`
                            : 'En attente de programmation'}
                        </span>
                      </div>
                    </>
                  ) : candidature.statut === 'refuse' ? (
                    <div className="detail-item">
                      <span className="detail-label">Date de décision:</span>
                      <span>{new Date(candidature.date_mise_a_jour).toLocaleDateString()}</span>
                    </div>
                  ) : (
                    <>
                      <div className="detail-item">
                        <span className="detail-label">Statut actuel:</span>
                        <span>En revue par le recruteur</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Temps estimé:</span>
                        <span>5-7 jours ouvrables</span>
                      </div>
                    </>
                  )}
                </div>

                {candidature.statut === 'accepte' && candidature.entretien && (
                  <div className="interview-actions">
                    <a href={`/interview/${candidature.entretien.id}`} className="btn-interview">
                      <i className="fas fa-calendar-check"></i> Voir les détails de l'entretien
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <i className="fas fa-file-alt"></i>
            <p>Vous n'avez aucune candidature pour le moment</p>
            <a href="/job_listings" className="btn-primary">
              <i className="fas fa-search"></i> Parcourir les offres
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default MesCandidats;
