import React, { useState } from 'react';
import './css/offres.css';

function OffresCandidats({ offres }) {
  const [viewMode, setViewMode] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewAllJobs = () => {
    setViewMode('all');
  };

  const handleViewBestOffers = () => {
    setViewMode('best');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOffres = offres.filter((offre) =>
    offre.titre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // For now, viewMode 'best' is not implemented differently; can be extended later

  return (
    <div>
      <div className="job-buttons">
        <button onClick={handleViewAllJobs} className={viewMode === 'all' ? 'active' : ''}>
          Offres d'emplois
        </button>
        <button onClick={handleViewBestOffers} className={viewMode === 'best' ? 'active' : ''}>
          Les meilleurs offres pour vous
        </button>
      </div>

      <div className="search-jobs">
        <input
          type="text"
          id="searchInput"
          placeholder="Rechercher une offre..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={() => { /* search handled by filtering */ }}>
          Rechercher
        </button>
      </div>

      <section className="offres">
        <div className="container">
          <h1>Toutes les offres d'emploi</h1>
          <div className="offres-grid" id="offresGrid">
            {filteredOffres.length > 0 ? (
              filteredOffres.map((offre) => (
                <div key={offre.id_offre} className="offre-card" data-title={offre.titre}>
                  <h2>{offre.titre}</h2>
                  <p>{offre.description.length > 100 ? offre.description.substring(0, 100) + '...' : offre.description}</p>
                  <a href={`/offre_detail/${offre.id_offre}`} className="details-btn">Voir détails</a>
                  <a href={`/postuler_offre/${offre.id_offre}`} className="apply-btn">Postuler</a>
                </div>
              ))
            ) : (
              <p>Aucune offre disponible.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OffresCandidats;
