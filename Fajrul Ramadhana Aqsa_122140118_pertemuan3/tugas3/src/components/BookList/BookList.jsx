import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

function BookList({ filter }) {
  const { books, dispatch } = useContext(BookContext);

  const filteredBooks = filter === 'semua'
    ? books
    : books.filter(book => book.status === filter);

  if (filteredBooks.length === 0) {
    return <p>Tidak ada buku.</p>;
  }

  return (
    <div className="book-list">
      <h2>Daftar Buku</h2>
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> oleh {book.author} ({book.status})
            <button onClick={() => dispatch({ type: 'DELETE_BOOK', payload: book.id })}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;