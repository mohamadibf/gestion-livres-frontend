import { Link } from 'react-router-dom';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function BookCard({ book, onDelete }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {book.image_path && (
                <img
                    src={`http://localhost:8000/storage/${book.image_path}`}
                    alt={book.title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
                <p className="text-indigo-600 mt-1">{book.author}</p>
                <div className="mt-4 space-y-1">
                    <p className="text-sm text-gray-600"><span className="font-medium">ISBN:</span> {book.isbn}</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Genre:</span> {book.genre}</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Année:</span> {book.published_year}</p>
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        {book.page_count ? `${book.page_count} pages` : ''}
                    </span>
                    <div className="flex space-x-2">
                        <Link to={`/edit/${book.id}`} className="text-blue-500 hover:text-blue-700">
                            <PencilIcon className="h-5 w-5" />
                        </Link>
                        <button onClick={() => onDelete(book.id)} className="text-red-500 hover:text-red-700">
                            <TrashIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
