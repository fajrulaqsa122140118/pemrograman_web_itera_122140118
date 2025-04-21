// pages/Stats/Stats.jsx
import React, { useMemo, useContext } from 'react';

import { BookContext } from '../../context/BookContext';
import styles from './Stats.module.css';

const Stats = () => {
  const { books } = useContext(BookContext);

  const statistics = useMemo(() => {
    const totalBooks = books.length;

    const booksByStatus = books.reduce((acc, book) => {
      acc[book.status] = (acc[book.status] || 0) + 1;
      return acc;
    }, {});

    const percentageByStatus = {};
    Object.keys(booksByStatus).forEach(status => {
      percentageByStatus[status] = Math.round((booksByStatus[status] / totalBooks) * 100);
    });

    const uniqueAuthors = new Set(books.map(book => book.author)).size;

    const authorCounts = books.reduce((acc, book) => {
      acc[book.author] = (acc[book.author] || 0) + 1;
      return acc;
    }, {});

    let topAuthor = { name: 'Tidak ada', count: 0 };
    Object.entries(authorCounts).forEach(([author, count]) => {
      if (count > topAuthor.count) {
        topAuthor = { name: author, count };
      }
    });

    return {
      totalBooks,
      booksByStatus,
      percentageByStatus,
      uniqueAuthors,
      topAuthor
    };
  }, [books]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Dimiliki':
        return '#22543d';
      case 'Sedang Dibaca':
        return '#2c5282';
      case 'Selesai Dibaca':
        return '#553c9a';
      default:
        return '#4a5568';
    }
  };

  return (
    <div className={styles.statsContainer}>
      <h2>Statistik Koleksi Buku</h2>

      <div className={styles.statsOverview}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{statistics.totalBooks}</div>
          <div className={styles.statLabel}>Total Buku</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{statistics.uniqueAuthors}</div>
          <div className={styles.statLabel}>Penulis Unik</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{statistics.topAuthor.name}</div>
          <div className={styles.statLabel}>Penulis Terbanyak ({statistics.topAuthor.count} buku)</div>
        </div>
      </div>

      <div className={styles.statsDetails}>
        <div className={styles.statusDistribution}>
          <h3>Distribusi Status Buku</h3>
          <div className={styles.chartContainer}>
            {Object.keys(statistics.booksByStatus).length > 0 ? (
              <div className={styles.barChart}>
                {Object.entries(statistics.booksByStatus).map(([status, count]) => (
                  <div className={styles.chartItem} key={status}>
                    <div className={styles.statusLabel}>{status}</div>
                    <div className={styles.barContainer}>
                      <div
                        className={styles.bar}
                        style={{
                          width: `${statistics.percentageByStatus[status]}%`,
                          backgroundColor: getStatusColor(status)
                        }}
                      ></div>
                      <span className={styles.barValue}>
                        {count} ({statistics.percentageByStatus[status]}%)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.noData}>Belum ada data buku</p>
            )}
          </div>
        </div>

        <div className={styles.recentBooks}>
          <h3>Buku Terbaru</h3>
          {books.length > 0 ? (
            <ul className={styles.recentBooksList}>
              {books.slice(-5).reverse().map(book => (
                <li key={book.id}>
                  <span className={styles.bookTitle}>{book.title}</span>
                  <span className={styles.bookDetails}>
                    <span className={styles.bookAuthor}>{book.author}</span>
                    <span
                      className={styles.statusDot}
                      style={{ backgroundColor: getStatusColor(book.status) }}
                      title={book.status}
                    ></span>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.noData}>Belum ada data buku</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
