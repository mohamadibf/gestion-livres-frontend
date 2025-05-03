import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const genres = [
    'Roman', 'Science-Fiction', 'Fantasy',
    'Policier', 'Biographie', 'Histoire', 'Jeunesse'
];

const languages = ['Français', 'Anglais', 'Espagnol', 'Allemand', 'Italien'];

export default function BookForm({ book, onSubmit, isEditing }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: book?.title || '',
        author: book?.author || '',
        isbn: book?.isbn || '',
        published_year: book?.published_year || new Date().getFullYear(),
        genre: book?.genre || '',
        description: book?.description || '',
        image_path: book?.image_path || '',
        page_count: book?.page_count || '',
        language: book?.language || 'Français',
        publisher: book?.publisher || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && !file.type.match('image.*')) {
            alert('Veuillez sélectionner une image valide');
            return;
        }
        if (file && file.size > 2 * 1024 * 1024) { // 2MB max
            alert('L\'image ne doit pas dépasser 2MB');
            return;
        }
        setFormData(prev => ({ ...prev, image: file }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
            >
                <ArrowLeftIcon className="h-5 w-5 mr-1" />
                Retour
            </button>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {isEditing ? 'Modifier le livre' : 'Ajouter un nouveau livre'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Titre *</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Auteur *</label>
                            <input
                                type="text"
                                name="author"
                                value={formData.author}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">ISBN *</label>
                            <input
                                type="text"
                                name="isbn"
                                value={formData.isbn}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Année *</label>
                            <input
                                type="number"
                                name="published_year"
                                value={formData.published_year}
                                onChange={handleChange}

                                max={new Date().getFullYear()}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Genre *</label>
                            <select
                                name="genre"
                                value={formData.genre}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                required
                            >
                                <option value="">Sélectionnez un genre</option>
                                {genres.map(genre => (
                                    <option key={genre} value={genre}>{genre}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Langue</label>
                            <select
                                name="language"
                                value={formData.language}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            >
                                {languages.map(lang => (
                                    <option key={lang} value={lang}>{lang}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Éditeur</label>
                            <input
                                type="text"
                                name="publisher"
                                value={formData.publisher}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Nombre de pages</label>
                            <input
                                type="number"
                                name="page_count"
                                value={formData.page_count}
                                onChange={handleChange}
                                min="1"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">
                                {isEditing ? 'Changer l\'image' : 'Image de couverture'}
                            </label>
                            <input
                                type="file"
                                name="image"
                                onChange={handleFileChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                                accept="image/*"
                            />
                            {formData.image_path && (
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">Image actuelle :</p>

                                    <img src={`${import.meta.env.VITE_API_URL}/storage/${book.image_path}`}
                                         alt="Couverture actuelle"
                                        className="h-24 object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 text-white"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            {isEditing ? 'Mettre à jour' : 'Enregistrer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

