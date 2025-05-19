import React, { useState } from 'react';

function CandidatProfil({ candidat, competences, formations, experiences }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <link rel="stylesheet" href="/static/css/candidatP.css" />

      <div className="container">
        <div className="profile-container">
          {/* Sidebar */}
          <div className="profile-sidebar">
            <div className="profile-photo">
              <img id="currentProfilePhoto" src={candidat.photo_profil_url} alt="Photo de profil" />
            </div>
            <button className="modify-profile-btn" onClick={openModal}>Modifier le profil</button>

            <div className="contact">
              <h3>Contacts</h3>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>{candidat.telephone}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>{candidat.email}</span>
              </div>
            </div>

            <div className="languages">
              <h3>Langues</h3>
              {candidat.candidatlangue_set && candidat.candidatlangue_set.map((candidatLangue, index) => (
                <div className="language-item" key={index}>
                  <span>{candidatLangue.langue.nom}:</span>
                  <span>{candidatLangue.get_niveau_display}</span>
                </div>
              ))}
            </div>

            <div className="skills">
              <h3>Compétences</h3>
              <div className="skills-container">
                {competences && competences.map((competence, index) => (
                  <span className="skill-tag" key={index}>{competence.nom}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Profile Content */}
          <div className="profile-main">
            <div className="profile-header">
              <h2>{candidat.nom} {candidat.prenom}</h2>
              <div className="profile-job">{candidat.profession}</div>
              <p className="profile-description">{candidat.description}</p>
            </div>

            <h3 className="section-title">Informations Personnelles</h3>
            <div className="profile-info">
              <div className="profile-info-item"><label>Nom:</label><span>{candidat.nom}</span></div>
              <div className="profile-info-item"><label>Prénom:</label><span>{candidat.prenom}</span></div>
              <div className="profile-info-item"><label>Région:</label><span>{candidat.region}</span></div>
              <div className="profile-info-item"><label>Date de naissance:</label><span>{candidat.date_naissance}</span></div>
            </div>

            <h3 className="section-title">Formation Académique</h3>
            {formations && formations.map((formation, index) => (
              <div className="formation-item" key={index}>
                <div className="formation-icon"><i className="fas fa-graduation-cap"></i></div>
                <div className="formation-details">
                  <h4>{formation.titre}</h4>
                  <p>{formation.etablissement}</p>
                  <p>{formation.date_debut} - {formation.date_fin}</p>
                </div>
              </div>
            ))}

            <h3 className="section-title">Expérience Professionnelle</h3>
            {experiences && experiences.map((exp, index) => (
              <div className="experience-item" key={index}>
                <h3 className="experience-title">{exp.poste}</h3>
                <div className="experience-company">
                  <i className="fas fa-building"></i> <span>{exp.entreprise}</span>
                </div>
                <div className="experience-date">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{exp.date_debut} - {exp.date_fin}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de modification de profil */}
      {isModalOpen && (
        <div id="profileModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Modifier le Profil</h3>
              <span className="close-btn" onClick={closeModal}>&times;</span>
            </div>

            <form id="profileForm" method="POST" encType="multipart/form-data">
              {/* CSRF token should be handled in API calls or higher-level component */}
              <div className="photo-upload">
                <div className="photo-preview">
                  <img id="photoPreview" src={candidat.photo_profil_url} alt="Photo de profil" />
                </div>
                <div>
                  <input type="file" id="photoUpload" name="photo_profil" accept="image/*" style={{ display: 'none' }} />
                  <label htmlFor="photoUpload" className="upload-btn">Changer la photo</label>
                  <p style={{ fontSize: '0.8rem', color: '#666' }}>Formats acceptés: JPG, PNG (max. 2MB)</p>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Nom</label>
                  <input type="text" name="nom" id="lastName" defaultValue={candidat.nom} />
                </div>
                <div className="form-group">
                  <label>Prénom</label>
                  <input type="text" name="prenom" id="firstName" defaultValue={candidat.prenom} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date de naissance</label>
                  <input type="date" name="date_naissance" id="birthDate" defaultValue={candidat.date_naissance} />
                </div>
                <div className="form-group">
                  <label>Téléphone</label>
                  <input type="tel" name="telephone" id="phone" defaultValue={candidat.telephone} />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" id="email" defaultValue={candidat.email} />
              </div>

              <div className="form-group">
                <label>Poste actuel</label>
                <input type="text" name="profession" id="jobTitle" defaultValue={candidat.profession} />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea name="description" id="description" rows="4" defaultValue={candidat.description}></textarea>
              </div>

              <h4 className="modal-section-title">Langues</h4>
              <div className="form-row">
                {candidat.candidatlangue_set && candidat.candidatlangue_set.map((candidatLangue, index) => (
                  <div className="form-group" key={index}>
                    <label>{candidatLangue.langue.nom}</label>
                    <select name={`langue_${candidatLangue.langue.id}`} defaultValue={candidatLangue.niveau}>
                      {/* Options should be populated dynamically */}
                      <option value="beginner">Débutant</option>
                      <option value="intermediate">Intermédiaire</option>
                      <option value="advanced">Avancé</option>
                    </select>
                  </div>
                ))}
              </div>

              <h4 className="modal-section-title">Compétences</h4>
              <div className="form-group">
                <label>Compétences (séparées par des virgules)</label>
                <textarea name="competences" id="skills" rows="3" defaultValue={competences.map(c => c.nom).join(', ')}></textarea>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-cancel" onClick={closeModal}>Annuler</button>
                <button type="submit" className="btn btn-save">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default CandidatProfil;
