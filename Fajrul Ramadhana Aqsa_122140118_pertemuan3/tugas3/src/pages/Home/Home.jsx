// Home.jsx
import React, { useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import BookFilter from '../../components/BookFilter/BookFilter';
import Stats from '../Stats/Stats'; 

function Home() {
  const [filter, setFilter] = useState('semua');

  return (
    <div className="home-container">
      <h1>Manajemen Buku Pribadi</h1>
      <BookForm />
      <BookFilter setFilter={setFilter} />
      <BookList filter={filter} />
      <Stats /> {/* Tampilkan stats di bagian bawah */}
    </div>
  );
}

export default Home;
