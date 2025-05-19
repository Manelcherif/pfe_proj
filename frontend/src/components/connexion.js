import React, { useState } from "react";
import "./css/connexion.css";

const Connexion = () => {
  const [step, setStep] = useState("login");
  const [formations, setFormations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [langues, setLangues] = useState([]);
  const [competences, setCompetences] = useState([]);
  const [langueInput, setLangueInput] = useState("");
  const [competenceInput, setCompetenceInput] = useState("");

  const ajouterFormation = () => {
    const inputs = document.querySelectorAll("#formation-card input, #formation-card select");
    const data = {};
    inputs.forEach(input => {
      if (input.type === "checkbox") {
        data[input.id] = input.checked;
      } else {
        data[input.placeholder || input.id] = input.value;
      }
    });
    setFormations([...formations, data]);
  };

  const ajouterExperience = () => {
    const inputs = document.querySelectorAll("#exper-card input");
    const data = {};
    inputs.forEach(input => {
      data[input.placeholder || input.id] = input.value;
    });
    setExperiences([...experiences, data]);
  };

  const ajouterLangue = () => {
    if (langueInput) {
      setLangues([...langues, { nom: langueInput }]);
      setLangueInput("");
    }
  };

  const ajouterCompetence = () => {
    if (competenceInput) {
      setCompetences([...competences, competenceInput]);
      setCompetenceInput("");
    }
  };

  const renderStep = () => {
    switch (step) {
      case "login":
        return (
          <div className="auth-card login-card">
            <div className="auth-header">
              <h2>Connexion</h2>
              <p>Accédez à votre compte.</p>
            </div>
            <form method="post" action="/login/">
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
                <a href="#">Mot de passe oublié ?</a>
              </div>
              <button type="submit" className="auth-btn">Se connecter</button>
            </form>
            <p className="switch-form">Pas encore inscrit ? <a href="#" onClick={() => setStep("register")}>Créer un compte</a></p>
          </div>
        );

      case "register":
        return (
          <div className="auth-card register-card">
            <div className="auth-header">
              <h2>Inscription</h2>
              <p>Créez un compte pour postuler.</p>
            </div>
            <form>
              <div className="form-row">
                <div className="input-group">
                  <label>Nom</label>
                  <div className="input-field"><i className="fas fa-user"></i><input type="text" placeholder="Entrez votre nom" /></div>
                </div>
                <div className="input-group">
                  <label>Prénom</label>
                  <div className="input-field"><i className="fas fa-user"></i><input type="text" placeholder="Entrez votre prénom" /></div>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>Email</label>
                  <div className="input-field"><i className="fas fa-envelope"></i><input type="email" placeholder="Entrez votre email" /></div>
                </div>
                <div className="input-group">
                  <label>Téléphone</label>
                  <div className="input-field"><i className="fas fa-phone"></i><input type="tel" placeholder="Entrez votre numéro de téléphone" /></div>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>Date de naissance</label>
                  <div className="input-field"><i className="fas fa-calendar"></i><input type="date" /></div>
                </div>
                <div className="input-group">
                  <label>Sexe</label>
                  <div className="radio-group">
                    <label><input type="radio" name="sexe" value="homme" /> Homme</label>
                    <label><input type="radio" name="sexe" value="femme" /> Femme</label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>Région</label>
                  <div className="input-field">
                    <i className="fas fa-map-marker-alt"></i>
                    <select>
                      <option value="">Sélectionnez votre Région</option>
                      <option value="Este">Este</option>
                      <option value="Ouest">Ouest</option>
                      <option value="Nord">Nord</option>
                      <option value="Sud">Sud</option>
                    </select>
                  </div>
                </div>
                <div className="input-group">
                  <label>Profession</label>
                  <div className="input-field"><i className="fas fa-briefcase"></i><input type="text" placeholder="Profession" /></div>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label>Mot de passe</label>
                  <div className="input-field"><i className="fas fa-lock"></i><input type="password" placeholder="Mot de passe" /></div>
                </div>
                <div className="input-group">
                  <label>Confirmer</label>
                  <div className="input-field"><i className="fas fa-lock"></i><input type="password" placeholder="Confirmer le mot de passe" /></div>
                </div>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="terms" /><label htmlFor="terms">J'accepte les termes et conditions</label>
              </div>
              <button type="button" className="auth-btn" onClick={() => setStep("formation")}>Suivant</button>
            </form>
            <p className="switch-form">Déjà un compte ? <a href="#" onClick={() => setStep("login")}>Se connecter</a></p>
          </div>
        );

      case "formation":
        return (
          <div className="auth-card formation-card" id="formation-card">
            <div className="auth-header"><h2>Formation</h2></div>
            <form>
              <div className="form-row">
                <div className="input-group"><label>Établissement</label><div className="input-field"><input type="text" placeholder="Établissement" /></div></div>
                <div className="input-group"><label>Niveau</label><div className="input-field"><input type="text" placeholder="Niveau d'étude" /></div></div>
              </div>
              <div className="form-row">
                <div className="input-group"><label>Domaine</label><div className="input-field"><input type="text" placeholder="Domaine" /></div></div>
                <div className="input-group"><label>Spécialité</label><div className="input-field"><input type="text" placeholder="Spécialité" /></div></div>
              </div>
              <div className="form-row">
                <div className="input-group"><label>Début</label><div className="input-field"><input type="date" /></div></div>
                <div className="input-group"><label>Fin</label><div className="input-field"><input type="date" /></div></div>
              </div>
              <div className="checkbox-group"><input type="checkbox" id="enCours" /><label htmlFor="enCours">En cours</label></div>
              <button type="button" className="c1" onClick={ajouterFormation}>Ajouter une formation</button>
              <div id="formations-container">{formations.map((f, i) => <div key={i}>{f["Établissement"]} - {f["Spécialité"]}</div>)}</div>
              <div className="button-group">
                <button type="button" onClick={() => setStep("register")} className="btn">Précédent</button>
                <button type="button" onClick={() => setStep("experience")} className="auth-btn">Suivant</button>
              </div>
            </form>
          </div>
        );

      case "experience":
        return (
          <div className="auth-card exper-card" id="exper-card">
            <div className="auth-header"><h2>Expérience</h2></div>
            <form>
              <div className="form-row">
                <div className="input-group"><label>Poste</label><div className="input-field"><input type="text" placeholder="Poste occupé" /></div></div>
                <div className="input-group"><label>Entreprise</label><div className="input-field"><input type="text" placeholder="Nom de l'entreprise" /></div></div>
              </div>
              <div className="form-row"><div className="input-group"><label>Domaine</label><div className="input-field"><input type="text" placeholder="Domaine" /></div></div></div>
              <div className="form-row">
                <div className="input-group"><label>Début</label><div className="input-field"><input type="date" /></div></div>
                <div className="input-group"><label>Fin</label><div className="input-field"><input type="date" /></div></div>
              </div>
              <button type="button" className="c1" onClick={ajouterExperience}>Ajouter une expérience</button>
              <div id="experiences-container">{experiences.map((e, i) => <div key={i}>{e["Poste occupé"]} - {e["Nom de l'entreprise"]}</div>)}</div>
              <div className="button-group">
                <button type="button" className="btn" onClick={() => setStep("formation")}>Précédent</button>
                <button type="button" className="auth-btn" onClick={() => setStep("competences")}>Suivant</button>
              </div>
            </form>
          </div>
        );

      case "competences":
        return (
          <div className="auth-card compet-card" id="competence-card">
            <div className="auth-header"><h2>Compétences</h2></div>
            <form>
              <h3>Langue</h3>
              <div className="form-row langue-block">
                <input type="text" value={langueInput} onChange={(e) => setLangueInput(e.target.value)} placeholder="Langue" />
                <button type="button" className="c1" onClick={ajouterLangue}>Ajouter une langue</button>
              </div>
              {langues.map((l, i) => <div key={i}>{l.nom}</div>)}

              <h3>Compétences</h3>
              <div className="input-group">
                <input type="text" value={competenceInput} onChange={(e) => setCompetenceInput(e.target.value)} placeholder="Compétence" />
                <button type="button" className="c1" onClick={ajouterCompetence}>Ajouter</button>
              </div>
              <div className="competences-list">{competences.map((c, i) => <div key={i}>{c}</div>)}</div>

              <div className="button-group">
                <button type="button" className="btn" onClick={() => setStep("experience")}>Précédent</button>
                <button type="submit" className="auth-btn">Envoyer</button>
              </div>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="auth-section">
      {renderStep()}
    </section>
  );
};

export default Connexion;
