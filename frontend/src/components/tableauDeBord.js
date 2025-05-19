import React from 'react';
import './css/tableauBord.css';

function TableauDeBord() {
  return (
    <main className="main-content">
      <div className="header">
        <div className="welcome-section">
          <span className="welcome-message">Bienvenue de retour,</span>
          <h1 className="page-title">Tableau de bord</h1>
        </div>
        <div className="user-info">
          <span className="user-name">Brahim Mansouri</span>
          <div className="user-avatar">BM</div>
        </div>
      </div>

      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" className="search-input" placeholder="Rechercher des annonces, candidats, etc." />
      </div>

      <div className="cards">
        <div className="card">
          <div className="card-header">
            <div className="card-icon blue">
              <i className="fas fa-bullhorn"></i>
            </div>
            <div>
              <div className="card-value">24</div>
              <div className="card-label">Annonces actives</div>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-bar blue"></div>
          </div>
          <div className="trend up">
            <i className="fas fa-arrow-up"></i> 12% par rapport au mois dernier
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon green">
              <i className="fas fa-user-tie"></i>
            </div>
            <div>
              <div className="card-value">135</div>
              <div className="card-label">Candidatures reçues</div>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-bar green"></div>
          </div>
          <div className="trend up">
            <i className="fas fa-arrow-up"></i> 23% par rapport au mois dernier
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon orange">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div>
              <div className="card-value">18</div>
              <div className="card-label">Entretiens programmés</div>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-bar orange"></div>
          </div>
          <div className="trend up">
            <i className="fas fa-arrow-up"></i> 8% par rapport au mois dernier
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon red">
              <i className="fas fa-user-check"></i>
            </div>
            <div>
              <div className="card-value">7</div>
              <div className="card-label">Embauches ce mois</div>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-bar red"></div>
          </div>
          <div className="trend down">
            <i className="fas fa-arrow-down"></i> 5% par rapport au mois dernier
          </div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-title">Candidatures par département</div>
            <div className="chart-period">
              <div className="period-option">Semaine</div>
              <div className="period-option active">Mois</div>
              <div className="period-option">Année</div>
            </div>
          </div>
          <div className="chart-container">
            <canvas id="applicationsChart"></canvas>
          </div>
        </div>
      </div>

      <div className="panels">
        <div className="panel">
          <div className="section-title">
            <span>Annonces récentes</span>
            <a href="/ListeDesOffres" className="view-all">Voir tout <i className="fas fa-chevron-right"></i></a>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Département</th>
                <th>Candidats</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Responsable Commercial</td>
                <td>Ventes</td>
                <td>42</td>
                <td><span className="status active">Active</span></td>
              </tr>
              <tr>
                <td>Développeur Full Stack</td>
                <td>IT</td>
                <td>28</td>
                <td><span className="status active">Active</span></td>
              </tr>
              <tr>
                <td>Chef de Projet Digital</td>
                <td>Marketing</td>
                <td>36</td>
                <td><span className="status active">Active</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="panel">
          <div className="section-title">
            <span>Candidatures récentes</span>
            <a href="/candidats" className="view-all">Voir tout <i className="fas fa-chevron-right"></i></a>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Candidat</th>
                <th>Poste</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="candidate-name">
                  <div className="candidate-avatar">KL</div>
                  Karim Lahlou
                </td>
                <td>Développeur Full Stack</td>
                <td>23/03/2025</td>
              </tr>
              <tr>
                <td className="candidate-name">
                  <div className="candidate-avatar">SB</div>
                  Sara Benali
                </td>
                <td>Chef de Projet Digital</td>
                <td>22/03/2025</td>
              </tr>
              <tr>
                <td className="candidate-name">
                  <div className="candidate-avatar">YM</div>
                  Yacine Mehdi
                </td>
                <td>Ingénieur Réseau</td>
                <td>21/03/2025</td>
              </tr>
              <tr>
                <td className="candidate-name">
                  <div className="candidate-avatar">FZ</div>
                  Fatima Zahra
                </td>
                <td>Responsable Commercial</td>
                <td>20/03/2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <div className="section-title">
          <span>Meilleurs postes par taux de conversion</span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Poste</th>
              <th>Département</th>
              <th>Candidats</th>
              <th>Taux de conversion</th>
              <th>Temps moyen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Développeur Full Stack</td>
              <td>IT</td>
              <td>28</td>
              <td>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{width: '100px', height: '8px', backgroundColor: '#f0f0f0', borderRadius: '4px', marginRight: '10px'}}>
                    <div style={{width: '85%', height: '100%', backgroundColor: '#27ae60', borderRadius: '4px'}}></div>
                  </div>
                  <span>85%</span>
                </div>
              </td>
              <td>12 jours</td>
            </tr>
            <tr>
              <td>Chef de Projet Digital</td>
              <td>Marketing</td>
              <td>36</td>
              <td>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{width: '100px', height: '8px', backgroundColor: '#f0f0f0', borderRadius: '4px', marginRight: '10px'}}>
                    <div style={{width: '72%', height: '100%', backgroundColor: '#3498db', borderRadius: '4px'}}></div>
                  </div>
                  <span>72%</span>
                </div>
              </td>
              <td>15 jours</td>
            </tr>
            <tr>
              <td>Responsable Commercial</td>
              <td>Ventes</td>
              <td>42</td>
              <td>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{width: '100px', height: '8px', backgroundColor: '#f0f0f0', borderRadius: '4px', marginRight: '10px'}}>
                    <div style={{width: '64%', height: '100%', backgroundColor: '#f39c12', borderRadius: '4px'}}></div>
                  </div>
                  <span>64%</span>
                </div>
              </td>
              <td>18 jours</td>
            </tr>
            <tr>
              <td>Ingénieur Réseau</td>
              <td>IT</td>
              <td>29</td>
              <td>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{width: '100px', height: '8px', backgroundColor: '#f0f0f0', borderRadius: '4px', marginRight: '10px'}}>
                    <div style={{width: '58%', height: '100%', backgroundColor: 'var(--primary-color)', borderRadius: '4px'}}></div>
                  </div>
                  <span>58%</span>
                </div>
              </td>
              <td>21 jours</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default TableauDeBord;
