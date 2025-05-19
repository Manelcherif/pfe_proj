import React, { useState } from 'react';
import './css/connexion.css';
import api from '../api/axios';

function ConnexionAdmin() {
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
          window.location.href = "/AdminProfile";
        } else {
          alert("Email ou mot de passe incorrect");
        }
      })
      .catch((error) => {
        console.error("Erreur réseau :", error);
        alert("Erreur réseau ou serveur");
      });
  };

  return (
    <section className="auth-section">
      <div className="auth-card login-card" id="login-card">
        <div className="auth-header">
          <h2>Connexion</h2>
          <p>Accédez à votre compte Admin.</p>
        </div>
        <form>
          <div className="input-group">
            <label>Email</label>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Entrez votre email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="input-group">
            <label>Mot de passe</label>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Entrez votre mot de passe" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
          </div>

          <button type="button" className="auth-btn" onClick={handleLogin}>Se connecter</button>
        </form>
        <div className="forgot-password">
          <p>Mot de passe oublié ? Contacter l'entreprise</p>
        </div>
      </div>
    </section>
  );
}

export default ConnexionAdmin;
