import React, { useState, useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { v4 as uuidv4 } from 'uuid';

function BookForm() {
  const { dispatch } = useContext(BookContext);
  const [form, setForm] = useState({
    title: '',
    author: '',
    status: 'milik',
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim()) {
      setError('Judul dan Penulis wajib diisi.');
      return;
    }
    dispatch({ type: 'ADD_BOOK', payload: { ...form, id: uuidv4() } });
    setForm({ title: '', author: '', status: 'milik' });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Judul Buku"
      />
      <input
        type="text"
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="Penulis"
      />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="milik">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <button type="submit">Tambah Buku</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default BookForm;