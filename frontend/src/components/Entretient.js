import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import './css/Entretient.css';

const Entretient = () => {
  const [entretiens, setEntretiens] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    interview_type: '',
    status: '',
    time_filter: '',
    page: 1,
  });
  const [pagination, setPagination] = useState({
    has_next: false,
    has_previous: false,
    current_page: 1,
    total_pages: 1,
    page_range: [],
  });
  const [modalContent, setModalContent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [admin, setAdmin] = useState({ nom_admin: '', prenom: '' });

  useEffect(() => {
    // Fetch admin info - adjust API endpoint as needed
    axios.get('/admin/info/')
      .then(res => {
        setAdmin(res.data);
      })
      .catch(err => {
        console.error('Failed to fetch admin info', err);
      });
  }, []);

  useEffect(() => {
    fetchEntretiens();
  }, [filters]);

  const fetchEntretiens = () => {
    const params = {
      search: filters.search,
      interview_type: filters.interview_type,
      status: filters.status,
      time_filter: filters.time_filter,
      page: filters.page,
    };
    axios.get('/interviews/', { params })
      .then(res => {
        setEntretiens(res.data.results);
        setPagination({
          has_next: res.data.has_next,
          has_previous: res.data.has_previous,
          current_page: res.data.current_page,
          total_pages: res.data.total_pages,
          page_range: res.data.page_range,
        });
      })
      .catch(err => {
        console.error('Failed to fetch entretiens', err);
      });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
      page: 1, // reset to first page on filter change
    }));
  };

  const handlePageChange = (page) => {
    setFilters(prev => ({
      ...prev,
      page,
    }));
  };

  const startInterview = (id) => {
    window.location.href = `/interviews/${id}/start/`;
  };

  const viewEvaluation = (id) => {
    window.location.href = `/interviews/${id}/evaluation/`;
  };

  const openModal = (url) => {
    axios.get(url)
      .then(res => {
        setModalContent(res.data);
        setModalVisible(true);
      })
      .catch(err => {
        console.error('Failed to load modal content', err);
      });
  };

  const rescheduleInterview = (id) => {
    openModal(`/interviews/${id}/reschedule/`);
  };

  const editInterview = (id) => {
    openModal(`/interviews/${id}/edit/`);
  };

  const closeModal = (e) => {
    if (e.target.className === 'modal') {
      setModalVisible(false);
      setModalContent(null);
    }
  };

  const getStatusClass = (etat) => {
    switch (etat) {
      case 'programme':
        return 'status-scheduled';
      case 'complete':
        return 'status-completed';
      case 'annule':
        return 'status-cancelled';
      default:
        return '';
    }
  };

  return (
    <div className="entretient-container">
      <h1>Entretiens</h1>
      <div className="filters">
        <input
          type="text"
          name="search"
          placeholder="Recherche..."
          value={filters.search}
          onChange={handleFilterChange}
        />
        <select name="interview_type" value={filters.interview_type} onChange={handleFilterChange}>
          <option value="">Type d'entretien</option>
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
        </select>
        <select name="status" value={filters.status} onChange={handleFilterChange}>
          <option value="">Statut</option>
          <option value="programme">Programmé</option>
          <option value="complete">Complété</option>
          <option value="annule">Annulé</option>
        </select>
        <select name="time_filter" value={filters.time_filter} onChange={handleFilterChange}>
          <option value="">Filtre temporel</option>
          <option value="past">Passé</option>
          <option value="future">Futur</option>
        </select>
      </div>

      <div className="entretiens-list">
        {entretiens.map(entretient => (
          <div key={entretient.id} className={`entretient-item ${getStatusClass(entretient.etat)}`}>
            <h3>{entretient.titre}</h3>
            <p>{entretient.description}</p>
            <button onClick={() => startInterview(entretient.id)}>Démarrer</button>
            <button onClick={() => viewEvaluation(entretient.id)}>Voir évaluation</button>
            <button onClick={() => rescheduleInterview(entretient.id)}>Reprogrammer</button>
            <button onClick={() => editInterview(entretient.id)}>Modifier</button>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" dangerouslySetInnerHTML={{ __html: modalContent }} />
        </div>
      )}

      <div className="admin-info">
        <p>Admin: {admin.nom_admin} {admin.prenom}</p>
      </div>

      <div className="pagination">
        {pagination.page_range.map(page => (
          <button
            key={page}
            disabled={page === pagination.current_page}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Entretient;
