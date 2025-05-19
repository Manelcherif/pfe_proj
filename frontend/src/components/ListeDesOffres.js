import React, { useState, useEffect } from 'react';
import './css/ListeOffres.css';

function ListeDesOffres({ admin, departments, statusChoices, offres, onFilterChange, onJobAction }) {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ search, department, status });
  };

  return (
    <div className="main-content">
      <div className="header">
        <h1 className="page-title">Gestion des Annonces</h1>
        <div className="user-info">
          <span className="user-name">{admin.nom_admin} {admin.prenom}</span>
          <div className="user-avatar">{admin.nom_admin.charAt(0)}{admin.prenom.charAt(0)}</div>
        </div>
      </div>

      <div className="actions-bar">
        <form onSubmit={handleFilterSubmit}>
          <div className="search-container">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Rechercher une offre..."
              value={search}
              onChange={handleSearchChange}
            />
          </div>

          <div className="filter-container">
            <select className="filter-dropdown" value={department} onChange={handleDepartmentChange}>
              <option value="">Tous les départements</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>{dept.nom_departement}</option>
              ))}
            </select>

            <select className="filter-dropdown" value={status} onChange={handleStatusChange}>
              <option value="">Tous les statuts</option>
              {statusChoices.map((statusChoice) => (
                <option key={statusChoice[0]} value={statusChoice[0]}>{statusChoice[1]}</option>
              ))}
            </select>

            <button type="submit" className="btn-filter">
              <i className="fas fa-filter"></i> Filtrer
            </button>
          </div>
        </form>

        <button className="btn btn-primary" onClick={() => onJobAction('create')}>
          <i className="fas fa-plus"></i> Nouvelle Annonce
        </button>
      </div>

      <div className="jobs-container">
        {offres.length > 0 ? (
          offres.map((offre) => (
            <div key={offre.id} className="job-card">
              <div className="job-header">
                <div>
                  <h3 className="job-title">{offre.titre}</h3>
                  <div className="job-department">{offre.departement.nom_departement}</div>
                </div>
                <span className={`status-badge status-${offre.statut}`}>
                  {offre.statut_display}
                </span>
              </div>

              <div className="job-info">
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{offre.region.nom}</span>
                </div>

                <div className="info-item">
                  <i className="fas fa-clock"></i>
                  <span>{offre.type_contrat}</span>
                </div>
              </div>

              <div className="tags-container">
                {offre.competences.slice(0, 5).map((competence) => (
                  <span key={competence.id} className="tag">{competence.nom}</span>
                ))}
                {offre.competences.length > 5 && (
                  <span className="tag">+{offre.competences.length - 5} plus</span>
                )}
              </div>

              <p className="job-description">
                {offre.description.length > 150 ? offre.description.substring(0, 150) + '...' : offre.description}
              </p>

              <div className="job-meta">
                <div className="job-stats">
                  <div className="stat-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Publié le {new Date(offre.date_creation).toLocaleDateString()}</span>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-user-tie"></i>
                    <span>{offre.candidature_count} candidats</span>
                  </div>
                  <div className="stat-item">
                    <i className="fas fa-eye"></i>
                    <span>{offre.vues} vues</span>
                  </div>
                </div>

                <div className="job-actions">
                  <button className="btn-action" title="Modifier" onClick={() => onJobAction('edit', offre.id)}>
                    <i className="fas fa-edit"></i>
                  </button>
                  {offre.statut === 'active' ? (
                    <button className="btn-action btn-close-job" title="Clôturer" onClick={() => onJobAction('close', offre.id)}>
                      <i className="fas fa-lock"></i>
                    </button>
                  ) : (
                    <button className="btn-action btn-open-job" title="Ouvrir" onClick={() => onJobAction('open', offre.id)}>
                      <i className="fas fa-unlock"></i>
                    </button>
                  )}
                  <button className="btn-action btn-change-status" title="Changer l'état" onClick={() => onJobAction('changeStatus', offre.id)}>
                    <i className="fas fa-exchange-alt"></i>
                  </button>
                  <button className="btn-action btn-delete-job" title="Supprimer" onClick={() => onJobAction('delete', offre.id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <i className="fas fa-briefcase"></i>
            <p>Aucune offre trouvée avec les critères sélectionnés</p>
            <button className="btn btn-primary" onClick={() => onJobAction('create')}>
              <i className="fas fa-plus"></i> Créer une nouvelle annonce
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListeDesOffres;
