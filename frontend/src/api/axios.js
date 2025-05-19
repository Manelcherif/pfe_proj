import axios from 'axios';

// Créez une instance Axios avec la configuration de base
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // <-- Correct si Django sert l'API sur /api/
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;