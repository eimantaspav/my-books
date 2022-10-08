import styles from './Search.module.css';
import { key } from '../../firebase/key';
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
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=&${key}`)
      .then(res => res.json())
      .then(data => setBookData(data.items))
      .catch(err => {
        console.log(err.message);
      });
  };
  return (
    <>
      <form onSubmit={searchBook}>
        <input
          onChange={e => setSearch(e.target.value)}
          value={search}
          placeholder="Enter Your Book Name"
          type="text"
        />
        <button type="submit">Search</button>
      </form>

      <BookCard books={bookData} isAuth={isAuth} />
    </>
  );
}
