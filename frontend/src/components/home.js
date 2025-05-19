import React from 'react';
import './css/home.css';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Trouvez l'emploi idéal pour vos compétences</h1>
          <p>
            Notre plateforme spécialisée aide les candidats à trouver des emplois qui correspondent exactement à leurs préférences et compétences. En analysant votre profil professionnel, nous vous connectons aux opportunités qui valorisent vos talents spécifiques et respectent vos critères personnels. Que vous recherchiez un environnement de travail particulier, un secteur d'activité précis ou des missions alignées avec votre expertise, nous vous guidons vers les postes qui vous permettront de vous épanouir et d'exceller dans votre domaine.
          </p>
          <div className="stats">Plus de 5000 offres d'emploi disponibles</div>
        </div>
        <div className="hero-image">
          <div className="hero-circle"></div>
          <img src="/images_1.jpeg" alt="Professionnel en costume d'affaires" />
        </div>
      </section>

      <section className="recruitment-solutions">
        <h2>Solutions de recrutement innovantes</h2>
        <p>Nous proposons des approches personnalisées pour vous aider à trouver les meilleurs talents ou votre prochain emploi.</p>

        <div className="solutions-cards">
          <div className="solution-card">
            <div className="solution-icon">&#128188;</div>
            <h3>Valorisation des compétences</h3>
            <p>Notre algorithme intelligent analyse votre profil et met en avant vos compétences clés pour vous connecter aux emplois qui correspondent le mieux à votre expertise.</p>
          </div>
          <div className="solution-card">
            <div className="solution-icon">&#128196;</div>
            <h3>Offres personnalisées</h3>
            <p>Recevez des recommandations d'emploi adaptées à vos préférences professionnelles, votre parcours et vos aspirations de carrière.</p>
          </div>
          <div className="solution-card">
            <div className="solution-icon">&#129309;</div>
            <h3>Expérience candidat optimisée</h3>
            <p>Profitez d'un accompagnement sur mesure tout au long de votre recherche d'emploi, du dépôt de CV jusqu'à la préparation aux entretiens.</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Compétences les plus recherchées</h2>
        <div className="skills-container">
          <div className="skill-item">
            <div className="skill-icon">&#128187;</div>
            <h3>Développement web</h3>
            <p>JavaScript, React, Node.js</p>
          </div>
          <div className="skill-item">
            <div className="skill-icon">&#128202;</div>
            <h3>Data Science</h3>
            <p>Python, R, Machine Learning</p>
          </div>
          <div className="skill-item">
            <div className="skill-icon">&#128161;</div>
            <h3>Marketing Digital</h3>
            <p>SEO, Content Marketing, Analytics</p>
          </div>
          <div className="skill-item">
            <div className="skill-icon">&#128736;</div>
            <h3>DevOps</h3>
            <p>CI/CD, Docker, Kubernetes</p>
          </div>
          <div className="skill-item">
            <div className="skill-icon">&#128241;</div>
            <h3>Développement Mobile</h3>
            <p>Swift, Kotlin, Flutter</p>
          </div>
          <div className="skill-item">
            <div className="skill-icon">&#129504;</div>
            <h3>Intelligence Artificielle</h3>
            <p>Deep Learning, NLP, Computer Vision</p>
          </div>
          <div className="skill-item">
            <div className="skill-icon">&#128295;</div>
            <h3>Gestion de projet</h3>
            <p>Agile, Scrum, Kanban</p>
          </div>
          <div className="skill-item">
            <div className="skill-icon">&#128210;</div>
            <h3>Design UX/UI</h3>
            <p>Figma, Adobe XD, Prototypage</p>
          </div>
        </div>
      </section>

      <section className="custom-recruitment">
        <div className="custom-recruitment-content">
          <h2>Votre parcours professionnel personnalisé</h2>
          <p>Notre plateforme vous offre une expérience sur mesure qui s'adapte à votre profil unique et à vos ambitions professionnelles.</p>
          <p>Grâce à nos outils avancés de correspondance et notre réseau d'entreprises partenaires, nous identifions rapidement les opportunités qui valorisent véritablement vos compétences et respectent vos préférences.</p>
          <a href="/connexion" className="contact-btn">Créer mon profil</a>
        </div>
        <div className="custom-recruitment-image">
          <img src="/images_2.jpeg" alt="Candidat consultant son profil professionnel" />
        </div>
      </section>

      <div className="careers-container">
        <div className="careers-content">
          <div className="careers-image">
            <img src="/Lart_de_la_negociation___10_etapes_pour_reussir_votre_transition_professionnelle.jpg" alt="Carrières Djezzy" />
          </div>
          <div className="careers-text">
            <div className="careers-badge">Rejoignez notre équipe</div>
            <h2 className="careers-heading">Découvrez nos <span>opportunités de carrière</span> chez Djezzy</h2>
            <p className="careers-description">
              Chez Djezzy, nous croyons que nos collaborateurs sont notre plus grande richesse. 
              Nous proposons des opportunités passionnantes dans différents domaines, 
              avec un environnement de travail stimulant, des défis innovants et un parcours de carrière enrichissant.
            </p>
            <div className="key-points">
              <div className="point-item">
                <div className="point-icon">✓</div>
                <span>Postes dans toute l'Algérie</span>
              </div>
              <div className="point-item">
                <div className="point-icon">✓</div>
                <span>Formations professionnelles</span>
              </div>
              <div className="point-item">
                <div className="point-icon">✓</div>
                <span>Avantages sociaux attractifs</span>
              </div>
              <div className="point-item">
                <div className="point-icon">✓</div>
                <span>Environnement multiculturel</span>
              </div>
            </div>
            <a href="/offres-emploi" className="careers-cta">Voir toutes les offres</a>
            <div className="careers-stats">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Postes ouverts</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4000+</div>
                <div className="stat-label">Employés</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Villes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
