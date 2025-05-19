  import React, { useState } from 'react';
  import './css/connexion.css';

  function ConnexionCandidat() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const formData = new FormData();
    formData.append('email_admin', email);
    formData.append('password', password);

    api.post('http://localhost:8000/api/login/', formData)
      .then((response) => {
        console.log(response.data);

        if (response.data.message === "Connexion réussie") {
          window.location.href = "/CandidatProfile";
        } else {
          alert("Email ou mot de passe incorrect");
        }
      })
      .catch((error) => {
        console.error("Erreur réseau :", error);
        alert("Erreur réseau ou serveur");
      });
  };
function Connexion() {
  const [activeCard, setActiveCard] = useState('login');
  const [formations, setFormations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [competences, setCompetences] = useState([]);
  const [langues, setLangues] = useState([]);

  const toggleAuth = (card) => {
    setActiveCard(card);
  };

  const ajouterFormation = () => {
    setFormations([...formations, { etablissement: '', niveau: '', domaine: '', specialite: '', debut: '', fin: '', enCours: false }]);
  };

  const ajouterExperience = () => {
    setExperiences([...experiences, { poste: '', entreprise: '', domaine: '', debut: '', fin: '' }]);
  };

  const ajouterLangue = () => {
    setLangues([...langues, '']);
  };

  const ajouterCompetence = () => {
    setCompetences([...competences, '']);
  };

  return (
    <>
      <link rel="stylesheet" href="/static/css/connexion.css" />

      <section className="auth-section">
        {/* Login Card */}
        {activeCard === 'login' && (
          <div className="auth-card login-card" id="login-card">
            <div className="auth-header">
              <h2>Connexion</h2>
              <p>Accédez à votre compte.</p>
            </div>
            <form method="post" action="/login-candidat">
              {/* CSRF token should be handled in API calls or higher-level component */}
              <div className="input-group">
                <label>Email</label>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" name="email" placeholder="Entrez votre email" required />
                </div>
              </div>
              <div className="input-group">
                <label>Mot de passe</label>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" name="password" placeholder="Entrez votre mot de passe" required />
                </div>
              </div>
              <div className="forgot-password">
                <button type="button" className="link-button" onClick={() => alert('Fonctionnalité à implémenter')}>Mot de passe oublié ?</button>
              </div>
              <button type="submit" className="auth-btn" onClick={handleLogin}>Se connecter</button>
            </form>
            <p className="switch-form">
              Pas encore inscrit ? <button type="button" className="link-button" onClick={() => toggleAuth('register')}>Créer un compte</button>
            </p>
          </div>
        )}

        {/* Register Card */}
        {activeCard === 'register' && (
          <div className="auth-card register-card" id="register-card">
            <div className="auth-header">
              <h2>Inscription</h2>
              <p>Créez un compte pour postuler.</p>
            </div>
            <form>
              <div className="form-row">
                <div className="input-group">
                  <label>Nom</label>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Entrez votre nom" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Prénom</label>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Entrez votre prénom" />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Email</label>
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Entrez votre email" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Téléphone</label>
                  <div className="input-field">
                    <i className="fas fa-phone"></i>
                    <input type="tel" placeholder="Entrez votre numéro de téléphone" />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Date de naissance</label>
                  <div className="input-field">
                    <i className="fas fa-calendar"></i>
                    <input type="date" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Sexe</label>
                  <div className="radio-group">
                    <div className="radio-item">
                      <input type="radio" id="homme" name="sexe" value="homme" />
                      <label htmlFor="homme">Homme</label>
                    </div>
                    <div className="radio-item">
                      <input type="radio" id="femme" name="sexe" value="femme" />
                      <label htmlFor="femme">Femme</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Region</label>
                  <div className="input-field">
                    <i className="fas fa-map-marker-alt"></i>
                    <select>
                      <option value="Este">Est</option>
                      <option value="Ouest">Ouest</option>
                      <option value="Nord">Nord</option>
                    </select>
                  </div>
                </div>
                <div className="input-group">
                  <label>Profession</label>
                  <div className="input-field">
                    <i className="fas fa-briefcase"></i>
                    <input type="text" placeholder="Entrez votre profession" />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Mot de passe</label>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Créez un mot de passe" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Confirmer le mot de passe</label>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Confirmez votre mot de passe" />
                  </div>
                </div>
              </div>

              <div className="checkbox-group">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">J'accepte les termes et conditions</label>
              </div>

              <button type="button" className="auth-btn" onClick={() => toggleAuth('formation')}>Suivant</button>
            </form>
            <p className="switch-form">
              Déjà un compte ? <a href="#" onClick={(e) => { e.preventDefault(); toggleAuth('login'); }}>Se connecter</a>
            </p>
          </div>
        )}

        {/* Formation Card */}
        {activeCard === 'formation' && (
          <div className="auth-card formation-card" id="formation-card">
            <div className="auth-header">
              <h2>Formation</h2>
            </div>
            <form>
              <div className="form-row">
                <div className="input-group">
                  <label>Établissement</label>
                  <div className="input-field">
                    <i className="fas fa-building"></i>
                    <input type="text" placeholder="Établissement" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Niveau d'étude</label>
                  <div className="input-field">
                    <i className="fas fa-university"></i>
                    <input type="text" placeholder="Niveau d'étude" />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>Domaine</label>
                  <div className="input-field">
                    <i className="fas fa-briefcase"></i>
                    <input type="text" placeholder="Domaine" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Spécialité</label>
                  <div className="input-field">
                    <i className="fas fa-briefcase"></i>
                    <input type="text" placeholder="Spécialité" required />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>Début</label>
                  <div className="input-field">
                    <i className="fas fa-calendar"></i>
                    <input type="date" id="startDate" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Fin</label>
                  <div className="input-field">
                    <i className="fas fa-calendar"></i>
                    <input type="date" id="endDate" />
                  </div>
                </div>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="enCours" />
                <label htmlFor="enCours">En cours</label>
              </div>
              <button type="button" className="c1">Ajouter une formation</button>
              <div id="formations-container"></div>
              <div className="button-group">
                <button type="button" className="btn" onClick={() => toggleAuth('register')}>Précédent</button>
                <button type="button" className="auth-btn" onClick={() => toggleAuth('experience')}>Suivant</button>
              </div>
            </form>
          </div>
        )}

        {/* Experience Card */}
        {activeCard === 'experience' && (
          <div className="auth-card exper-card" id="exper-card">
            <div className="auth-header">
              <h2>Expérience</h2>
            </div>
            <form>
              <div className="form-row">
                <div className="input-group">
                  <label>Poste</label>
                  <div className="input-field">
                    <i className="fas fa-building"></i>
                    <input type="text" placeholder="Poste occupé" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Nom de l'entreprise</label>
                  <div className="input-field">
                    <i className="fas fa-building"></i>
                    <input type="text" placeholder="Nom de l'entreprise" />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>Domaine</label>
                  <div className="input-field">
                    <i className="fas fa-briefcase"></i>
                    <input type="text" placeholder="Domaine d'activité" />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>Début</label>
                  <div className="input-field">
                    <i className="fas fa-calendar"></i>
                    <input type="date" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Fin</label>
                  <div className="input-field">
                    <i className="fas fa-calendar"></i>
                    <input type="date" />
                  </div>
                </div>
              </div>
              <button type="button" className="c1">Ajouter une expérience</button>
              <div id="experiences-container"></div>
              <div className="button-group">
                <button type="button" className="btn" onClick={() => toggleAuth('formation')}>Précédent</button>
                <button type="button" className="auth-btn" onClick={() => toggleAuth('competences')}>Suivant</button>
              </div>
            </form>
          </div>
        )}

        {/* Competences Card */}
        {activeCard === 'competences' && (
          <div className="auth-card compet-card" id="competence-card">
            <div className="auth-header">
              <h2>Compétences</h2>
            </div>
            <form>
              <h3>Langue</h3>
              <div id="langues-container">
                <div className="form-row langue-block">
                  <input type="text" placeholder="Langue" />
                  <div className="button-container">
                    <button type="button" className="c1">A1</button>
                    <button type="button" className="c1">A2</button>
                    <button type="button" className="c1">B1</button>
                    <button type="button" className="c1">B2</button>
                    <button type="button" className="c1">C1</button>
                    <button type="button" className="c1">C2</button>
                  </div>
                </div>
              </div>
              <button type="button" className="c1">Ajouter une langue</button>

              <h3>Compétences</h3>
              <div className="input-group">
                <input type="text" placeholder="Compétences" />
                <button type="button" className="c1">Ajouter</button>
              </div>
              <div id="competences-list" className="competences-list">
                {/* Les compétences ajoutées apparaîtront ici */}
              </div>

              <div className="button-group">
                <button type="button" className="btn" onClick={() => toggleAuth('experience')}>Précédent</button>
                <button type="button" className="auth-btn">Envoyer</button>
              </div>
            </form>
          </div>
        )}
      </section>
    </>
  );
}
  }
export default Connexion;
