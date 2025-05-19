import React from 'react';
import './css/adminProfil.css';

function AdminProfile({ admin }) {
  return (
    <>
      <div className="detail-icon">
        <i className="fas fa-phone"></i>
        <div className="main-content">
          <div className="header">
            <h1 className="page-title">Mon Profil</h1>
            <div className="user-info">
              <span className="user-name">{admin.nom_admin} {admin.prenom}</span>
            </div>
          </div>

          {/* Profile Container */}
          <div className="profile-container">
            {/* Profile Sidebar */}
            <div className="profile-sidebar">
              <div className="profile-header">
                <div className="edit-cover">
                  <i className="fas fa-camera"></i>
                </div>
                <div className="profile-avatar">
                  <i className="fas fa-user"></i>
                  <div className="edit-avatar">
                    <i className="fas fa-camera"></i>
                  </div>
                </div>
                <div className="profile-name">{admin.nom_admin} {admin.prenom}</div>
                <div className="profile-title">Administrateur Système Senior</div>
              </div>

              <div className="profile-stats">
                <div className="profile-stat">
                  <div className="stat-value">158</div>
                  <div className="stat-label">Annonces créées</div>
                </div>
                <div className="profile-stat">
                  <div className="stat-value">243</div>
                  <div className="stat-label">Candidats gérés</div>
                </div>
                <div className="profile-stat">
                  <div className="stat-value">37</div>
                  <div className="stat-label">Utilisateurs</div>
                </div>
              </div>

              <div className="profile-details">
                <div className="profile-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="detail-content">
                    <div className="detail-label">Email</div>
                    <div className="detail-value">{admin.email_admin}</div>
                  </div>
                </div>
                <div className="profile-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="detail-content">
                    <div className="detail-label">Téléphone</div>
                    <div className="detail-value">{admin.telephone}</div>
                  </div>
                </div>
                <div className="profile-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <div className="detail-content">
                    <div className="detail-label">Region</div>
                    <div className="detail-value">{admin.region}</div>
                  </div>
                </div>
                <div className="profile-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="detail-content">
                    <div className="detail-label">Localisation</div>
                    <div className="detail-value">{admin.adresse}</div>
                  </div>
                </div>
                <div className="profile-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className="detail-content">
                    <div className="detail-label">Date naissance</div>
                    <div className="detail-value">{admin.date_naissance}</div>
                  </div>
                </div>
              </div>

              <div className="profile-actions">
                <button className="profile-btn profile-btn-primary">
                  <i className="fas fa-edit"></i> Modifier le profil
                </button>
                <button className="profile-btn">
                  <i className="fas fa-lock"></i> Changer le mot de passe
                </button>
              </div>
            </div>

            {/* Profile Content */}
            <div className="profile-content">
              {/* Information personnelle */}
              <div className="content-card">
                <div className="card-header">
                  <div className="card-title">
                    <i className="fas fa-user"></i> Informations personnelles
                  </div>
                  <div className="card-actions">
                    <div className="card-action">
                      <i className="fas fa-edit"></i>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-row">
                    <div className="form-col">
                      <div className="profile-form-group">
                        <label className="profile-form-label">Nom</label>
                        <input type="text" className="profile-form-input" value={admin.nom_admin} disabled />
                      </div>
                    </div>
                    <div className="form-col">
                      <div className="profile-form-group">
                        <label className="profile-form-label">Prénom</label>
                        <input type="text" className="profile-form-input" value={admin.prenom} disabled />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminProfile;
