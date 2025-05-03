import BookCard from './BookCard';

export default function BookList({ books, onDelete }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
                <BookCard key={book.id} book={book} onDelete={onDelete} />
            ))}
        </div>
    );
}
