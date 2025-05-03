import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookForm from '../components/BookForm';
import api from '../services/api';

export default function EditBook() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await api.getBookById(id);
                setBook(response.data);
            } catch (error) {
                console.error('Error fetching book:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    const handleSubmit = async (formData) => {
        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (value) formDataToSend.append(key, value);
            });

            await api.updateBook(id, formDataToSend);
            navigate('/');
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    if (loading) {
        return <div className="text-center py-8">Chargement...</div>;
    }

    if (!book) {
        return <div className="text-center py-8">Livre non trouvé</div>;
    }

    return <BookForm book={book} onSubmit={handleSubmit} isEditing={true} />;
}

