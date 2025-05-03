import {useNavigate} from 'react-router-dom';
import BookForm from '../components/BookForm';
import api from '../services/api';

export default function AddBook() {
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (value) formDataToSend.append(key, value);
            });

            await api.createBook(formDataToSend);
            navigate('/');
        } catch (error) {
            console.error('Error d\'ajout de livre:', error);
        }
    };

    return <BookForm onSubmit={handleSubmit} isEditing={false}/>;
}

