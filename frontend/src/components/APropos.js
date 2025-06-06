import React from 'react';
import './css/APropos.css'; 

function APropos() {
  return (
    <>
      <section className="page-title">
        <h1>À propos de Djezzy</h1>
        <p>Découvrez notre histoire, notre mission et les valeurs qui nous guident chaque jour pour offrir des solutions de télécommunication innovantes en Algérie.</p>
      </section>
      <section className="about-section">
        <div className="about-container">
          <div className="about-card">
            <h2>Notre histoire</h2>
            <p>Djezzy, officiellement Optimum Telecom Algérie, est l'un des principaux opérateurs de téléphonie mobile en Algérie. Fondée en 2001, l'entreprise a révolutionné le marché des télécommunications algérien en introduisant des services innovants et en développant une infrastructure de pointe à travers le pays.</p>
            <p>Avec plus de 16 millions d'abonnés, Djezzy s'est imposée comme un acteur majeur du secteur des télécommunications en Algérie, contribuant significativement au développement de l'économie numérique du pays et à la création d'emplois qualifiés.</p>
          </div>

          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>2001</h3>
                <p>Création de Djezzy (OTA) suite à l'obtention de la première licence GSM en Algérie.</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content">
                <h3>2004</h3>
                <p>Djezzy atteint le cap du million d'abonnés, marquant une croissance exceptionnelle.</p>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>2008</h3>
                <p>Lancement des services 3G, ouvrant de nouvelles possibilités pour les utilisateurs mobiles algériens.</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content">
                <h3>2014</h3>
                <p>VEON (anciennement VimpelCom) acquiert une participation majoritaire dans Djezzy.</p>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>2016</h3>
                <p>Déploiement du réseau 4G, améliorant considérablement l'expérience internet mobile.</p>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content">
                <h3>2020</h3>
                <p>Accélération de la transformation digitale et lancement de nouveaux services numériques innovants.</p>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>2025</h3>
                <p>Djezzy poursuit son expansion et prépare le déploiement des technologies futures pour répondre aux besoins croissants en connectivité.</p>
              </div>
            </div>
          </div>

          <div className="about-card">
            <h2>Notre mission</h2>
            <p>Chez Djezzy, notre mission est de connecter les Algériens à travers des solutions de télécommunication fiables et accessibles, tout en favorisant l'innovation technologique et l'inclusion digitale. Nous nous engageons à offrir des services de qualité supérieure qui améliorent la vie quotidienne de nos clients et contribuent au développement de l'économie numérique algérienne.</p>
            <p>Notre ambition est de devenir le partenaire numérique privilégié des Algériens, en combinant expertise technologique, connaissance du marché local et engagement constant envers l'excellence opérationnelle.</p>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="values-section">
        <div className="about-container">
          <div className="about-card" style={{backgroundColor: 'transparent', boxShadow: 'none', textAlign: 'center'}}>
            <h2 style={{display: 'inline-block', paddingBottom: '15px', marginBottom: '40px'}}>Nos valeurs fondamentales</h2>
            <p style={{maxWidth: '800px', margin: '0 auto 40px'}}>Ces principes guident nos actions et décisions quotidiennes, et façonnent notre culture d'entreprise.</p>
          </div>

          <div className="values-container">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Intégrité</h3>
              <p>Nous agissons avec honnêteté, transparence et éthique dans toutes nos relations professionnelles, respectant nos engagements envers nos clients, employés et partenaires.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>Nous encourageons la créativité et l'esprit d'innovation pour développer des solutions technologiques qui répondent aux besoins évolutifs de nos clients.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaboration</h3>
              <p>Nous favorisons un environnement de travail basé sur la coopération, le respect mutuel et le partage des connaissances pour atteindre l'excellence ensemble.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Responsabilité sociale</h3>
              <p>Nous nous engageons à avoir un impact positif sur la société algérienne à travers des initiatives qui favorisent l'éducation, l'inclusion digitale et le développement durable.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-cta">
        <h2>Rejoignez l'équipe Djezzy</h2>
        <p>Nous sommes toujours à la recherche de talents passionnés pour nous aider à construire le futur des télécommunications en Algérie. Découvrez nos opportunités de carrière et faites partie de notre aventure.</p>
        {/* <a href="offres_d'emploi.html" className="contact-btn">Voir nos offres d'emploi</a> */}

        <a href="/offres-emploi" className="contact-btn">Voir nos offres d'emploi</a>
      </section>
    </>
  );
}

export default APropos;
