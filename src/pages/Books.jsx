import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';
import {PlusIcon} from "@heroicons/react/24/outline";

export default function Books() {
    const [books, setBooks] = useState([]);
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0,
    });
    const [loading, setLoading] = useState(false);

    const fetchBooks = async (page = 1) => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/api/books?page=${page}`);
            setBooks(response.data.data);
            setPagination({
                current_page: response.data.meta.current_page,
                last_page: response.data.meta.last_page,
                per_page: response.data.meta.per_page,
                total: response.data.meta.total,
            });

        } catch (error) {
            console.error("Erreur lors du chargement des livres :", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce livre ?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:8000/api/books/${id}`);
            fetchBooks(pagination.current_page); // Rafraîchir la liste
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > pagination.last_page) return;
        fetchBooks(newPage);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl md:text-base sm:text-sm font-bold text-gray-800">Liste des Livres</h1>
                <Link
                    to="/create"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg"
                >
                    <PlusIcon className="h-5 w-5 mr-2 font-bold text-white"/>
                </Link>
            </div>

            {loading ? (
                <Loader/>
            ) : (
                <>
                    <BookList books={books} onDelete={handleDelete}/>
                    <Pagination pagination={pagination} onPageChange={handlePageChange}/>
                </>
            )}
        </div>
    );
}
