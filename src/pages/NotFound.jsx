import { Link } from 'react-router-dom';
import { BookOpenIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="text-center">
                <BookOpenIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h1 className="mt-4 text-3xl font-bold text-gray-900">404 - Page non trouvée</h1>
                <p className="mt-2 text-gray-600">
                    La page que vous recherchez n'existe pas ou a été déplacée.
                </p>
                <div className="mt-6">
                    <Link
                        to="/"
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                        <BookOpenIcon className="h-5 w-5 mr-2" />
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        </div>
    );
}

