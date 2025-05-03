import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Intercepteur simplifié pour la gestion des erreurs
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            return Promise.reject({
                status: error.response.status,
                message: error.response.data.message || 'Erreur serveur',
                errors: error.response.data.errors || {}
            });
        } else if (error.request) {
            return Promise.reject({
                status: 0,
                message: 'Le serveur ne répond pas'
            });
        }
        return Promise.reject({
            status: -1,
            message: error.message
        });
    }
);

const bookService = {
    getAllBooks() {
        return api.get('/books');
    },

    getBookById(id) {
        return api.get(`/books/${id}`);
    },

    createBook(formData) {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        return api.post('/books', formData, config);
    },

    updateBook(id, formData) {
        // Ajoutez tous les champs nécessaires
        formData.append('_method', 'PUT');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        // console.log('Sending:', Object.fromEntries(formData)); // Debug

        return api.post(`/books/${id}`, formData, config);
    },

    deleteBook(id) {
        return api.delete(`/books/${id}`);
    }
};

export default bookService;