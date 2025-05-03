import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Pagination({ pagination, onPageChange }) {
    const { current_page, last_page, per_page, total } = pagination;

    const generatePageNumbers = () => {
        const pages = [];
        const start = Math.max(1, current_page - 2);
        const end = Math.min(last_page, start + 4);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    if (total <= per_page) return null;

    return (
        <div className="flex items-center justify-between mt-8 border-t border-gray-200 px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <p className="text-sm text-gray-700">
                    Affichage de <span className="font-medium">{(current_page - 1) * per_page + 1}</span> à{' '}
                    <span className="font-medium">{Math.min(current_page * per_page, total)}</span> sur{' '}
                    <span className="font-medium">{total}</span> livres
                </p>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button
                        onClick={() => onPageChange(current_page - 1)}
                        disabled={current_page === 1}
                        className="px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-l-md"
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                    </button>
                    {generatePageNumbers().map((num) => (
                        <button
                            key={num}
                            onClick={() => onPageChange(num)}
                            className={`px-4 py-2 text-sm font-semibold ${
                                current_page === num
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-gray-400 ring-1 ring-inset ring-gray-00 hover:bg-gray-50'
                            }`}
                        >
                            {num}
                        </button>
                    ))}
                    <button
                        onClick={() => onPageChange(current_page + 1)}
                        disabled={current_page === last_page}
                        className="px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-r-md"
                    >
                        <ChevronRightIcon className="h-5 w-5" />
                    </button>
                </nav>
            </div>
        </div>
    );
}
