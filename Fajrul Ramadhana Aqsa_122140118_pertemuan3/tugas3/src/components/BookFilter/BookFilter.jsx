import React from 'react';

function BookFilter({ setFilter }) {
  return (
    <div className="book-filter">
      <label>Filter: </label>
      <select onChange={e => setFilter(e.target.value)}>
        <option value="semua">Semua</option>
        <option value="milik">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
    </div>
  );
}

export default BookFilter;
