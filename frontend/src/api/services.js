import api from './axios';

// Adaptez ces endpoints selon votre API Django
export const dataService = {
  // Exemple pour une entité "données"
  getData: () => api.get('/donnees/'),
  getDataById: (id) => api.get(`/donnees/${id}/`),
  createData: (data) => api.post('/donnees/', data),
  updateData: (id, data) => api.put(`/donnees/${id}/`, data),
  deleteData: (id) => api.delete(`/donnees/${id}/`),
};

// Ajoutez d'autres services au besoin selon vos modèles Django