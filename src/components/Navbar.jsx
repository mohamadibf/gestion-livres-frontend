import { Link, useLocation } from 'react-router-dom';
import { BookOpenIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="flex items-center text-xl font-bold text-indigo-600">
                        <BookOpenIcon className="h-6 w-6 mr-2" />
                        Gestion de Livres
                    </Link>

                    <Link
                        to="/add"
                        className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                            location.pathname === '/add'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                        }`}
                    >
                        <PlusIcon className="h-4 w-4 font-bold mr-2 text-white" />
                        <span className="text-sm font-bold text-white">Ajouter</span>

                    </Link>
                </div>
            </div>
        </nav>
    );
}

