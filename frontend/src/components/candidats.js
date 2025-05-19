import React, { useState } from 'react';

function Candidats({ admin, applications, departments, jobs, statusChoices, admins, requestSearch, requestDepartment, requestJob, requestStatus }) {
  const [interviewModalOpen, setInterviewModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);
  const [selectedCandidateName, setSelectedCandidateName] = useState('');

  const openInterviewModal = (applicationId, candidateName) => {
    setSelectedApplicationId(applicationId);
    setSelectedCandidateName(candidateName);
    setInterviewModalOpen(true);
  };

  const closeInterviewModal = () => {
    setInterviewModalOpen(false);
    setSelectedApplicationId(null);
    setSelectedCandidateName('');
  };

  const openDeleteModal = (applicationId) => {
    setSelectedApplicationId(applicationId);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedApplicationId(null);
  };

  const confirmDelete = (applicationId) => {
    openDeleteModal(applicationId);
  };

  return (
    <>
      <div className="main-content">
        <div className="header">
          <h1 className="page-title">Candidats</h1>
          <div className="user-info">
            <span>{admin.nom_admin} {admin.prenom}</span>
            <div className="user-avatar">{admin.nom_admin.charAt(0)}{admin.prenom.charAt(0)}</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="filters">
          <form method="GET" action="/candidates_list">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input type="text" name="search" placeholder="Rechercher un offre..." defaultValue={requestSearch} />
            </div>
            <button className="best-candidates-btn">
              <i className="fas fa-star"></i>
              Meilleurs candidats
            </button>
            <div className="filter-options">
              <select name="department" defaultValue={requestDepartment}>
                <option value="">Tous les départements</option>
                {departments && departments.map((department) => (
                  <option key={department.id} value={department.id}>{department.nom_departement}</option>
                ))}
              </select>
              <select name="job" defaultValue={requestJob}>
                <option value="">Tous les postes</option>
                {jobs && jobs.map((job) => (
                  <option key={job.id} value={job.id}>{job.titre}</option>
                ))}
              </select>
              <select name="status" defaultValue={requestStatus}>
                <option value="">Tous les statuts</option>
                {statusChoices && statusChoices.map((status) => (
                  <option key={status[0]} value={status[0]}>{status[1]}</option>
                ))}
              </select>
              <button type="submit" className="filter-button">
                <i className="fas fa-filter"></i> Filtrer
              </button>
            </div>
          </form>
        </div>

        {/* Candidates Table */}
        <div className="candidates-table">
          <table>
            <thead>
              <tr>
                <th>Candidat</th>
                <th>Poste</th>
                <th>Département</th>
                <th>Date de candidature</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications && applications.length > 0 ? (
                applications.map((application) => (
                  <tr key={application.id}>
                    <td className="candidate-info">
                      <div className="avatar">
                        {application.candidat.photo_profil_url ? (
                          <img src={application.candidat.photo_profil_url} alt={application.candidat.user_full_name} />
                        ) : (
                          <>{application.candidat.user_first_name.charAt(0)}{application.candidat.user_last_name.charAt(0)}</>
                        )}
                      </div>
                      <div className="info">
                        <div className="name">{application.candidat.user_full_name}</div>
                        <div className="email">{application.candidat.user_email}</div>
                      </div>
                    </td>
                    <td>{application.offre.titre}</td>
                    <td>{application.offre.departement.nom_departement}</td>
                    <td>{application.date_postulation}</td>
                    <td>
                      <span className={`status ${application.statut}`}>
                        {application.get_statut_display}
                      </span>
                    </td>
                    <td className="actions">
                      {application.statut === 'en_attente' && (
                        <>
                          <button className="action-btn accept" title="Accepter" onClick={() => openInterviewModal(application.id, application.candidat.user_full_name)}>
                            <i className="fas fa-check"></i>
                          </button>
                          <button className="action-btn reject" title="Refuser" onClick={() => confirmDelete(application.id)}>
                            <i className="fas fa-times"></i>
                          </button>
                        </>
                      )}
                      <button className="action-btn view" title="Voir profil" onClick={() => window.location.href = `/candidate_profile/${application.candidat.id}`}>
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="action-btn delete" title="Supprimer" onClick={() => confirmDelete(application.id)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-results">
                    <i className="fas fa-info-circle"></i>
                    Aucun candidat trouvé avec les critères sélectionnés
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          {/* Pagination logic to be implemented */}
        </div>
      </div>

      {/* Interview Modal */}
      {interviewModalOpen && (
        <div id="interview-modal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close-modal" onClick={closeInterviewModal}>&times;</span>
              <h2>Programmer un entretien</h2>
            </div>
            <div className="modal-body">
              <form id="interview-form" method="POST" action="/schedule_interview">
                {/* CSRF token should be handled in API calls or higher-level component */}
                <input type="hidden" id="application-id" name="application_id" value={selectedApplicationId} />
                <div className="form-group">
                  <p>Candidat: <strong id="candidate-name">{selectedCandidateName}</strong></p>
                </div>
                <div className="form-group">
                  <label htmlFor="interview-date">Date de l'entretien:</label>
                  <input type="date" id="interview-date" name="date" required min={new Date().toISOString().split('T')[0]} />
                </div>
                <div className="form-group">
                  <label htmlFor="interview-time">Heure de l'entretien:</label>
                  <input type="time" id="interview-time" name="time" required />
                </div>
                <div className="form-group">
                  <label htmlFor="interviewer">Recruteur:</label>
                  <select id="interviewer" name="interviewer" required>
                    <option value="">Sélectionner un recruteur</option>
                    {admins && admins.map((admin) => (
                      <option key={admin.id} value={admin.id}>{admin.nom_admin} {admin.prenom}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="interview-type">Type d'entretien:</label>
                  <select id="interview-type" name="interview_type" required>
                    <option value="">Sélectionner un type</option>
                    <option value="video">Entretien vidéo</option>
                    <option value="telephone">Entretien téléphonique</option>
                    <option value="presentiel">Entretien en présentiel</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="interview-notes">Notes:</label>
                  <textarea id="interview-notes" name="notes" rows="3"></textarea>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-submit">Confirmer l'entretien</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div id="delete-modal" className="modal">
          <div className="modal-content small-modal">
            <div className="modal-header">
              <span className="close-modal" onClick={closeDeleteModal}>&times;</span>
              <h2>Confirmer la suppression</h2>
            </div>
            <div className="modal-body">
              <p>Êtes-vous sûr de vouloir supprimer cette candidature?</p>
              <form id="delete-form" method="POST" action="/delete_application">
                {/* CSRF token should be handled in API calls or higher-level component */}
                <input type="hidden" id="delete-id" name="application_id" value={selectedApplicationId} />
                <div className="form-actions">
                  <button type="button" className="btn-cancel" onClick={closeDeleteModal}>Annuler</button>
                  <button type="submit" className="btn-delete">Supprimer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Candidats;
