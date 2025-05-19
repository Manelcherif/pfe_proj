import React from 'react';

function DataList({ data }) {
  return (
    <div className="data-list">
      <h2>Liste des données</h2>
      {data.length === 0 ? (
        <p>Aucune donnée disponible.</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={item.id || index}>
              {/* Adaptez selon la structure de vos données */}
              {item.name || item.title || JSON.stringify(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataList;