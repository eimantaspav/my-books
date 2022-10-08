import styles from './Search.module.css';
import { key } from '../../firebase/key';
//
import searchBooks from '../../img/searchBooks.svg';
// components
import BookCard from '../../components/BookCard/BookCard';
// hooks
import { useState } from 'react';
//
export default function Search({ isAuth }) {
  const [search, setSearch] = useState('');
  const [bookData, setBookData] = useState([]);
  //
  const searchBook = e => {
    e.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&key=&${key}`)
      .then(res => res.json())
      .then(data => setBookData(data.items))
      .catch(err => {
        console.log(err.message);
      });
  };
  return (
    <div className={styles.search}>
      <form onSubmit={searchBook}>
        <div className={styles.search__input}>
          <input
            onChange={e => setSearch(e.target.value)}
            value={search}
            placeholder="Search for a book..."
            type="text"
          />
          <button type="submit" className={styles.search__button}>
            Search
          </button>
        </div>
      </form>
      {(bookData === undefined || bookData.length == 0) && (
        <div className={styles.search__empty}>
          <img src={searchBooks} alt="" />

          <h1>Search and add books to your home library</h1>
        </div>
      )}

      <BookCard books={bookData} isAuth={isAuth} />
    </div>
  );
}
