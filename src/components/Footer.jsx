export default function Footer() {
    return (
        <footer className="bg-white shadow-inner py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} GstionLivres - Tous droits réservés
            </div>
        </footer>
    );
}

