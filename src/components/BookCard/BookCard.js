import styles from './BookCard.module.css';
//
import { useState } from 'react';
import { db, auth } from '../../firebase/config';
import { addDoc, collection, getDocs } from 'firebase/firestore';

export default function BookCard({ books }) {
  const librariesCollectionRef = collection(db, 'Libraries');
  const addBook = async (title, thumbnail, volumeInfo) => {
    await addDoc(librariesCollectionRef, {
      title,
      thumbnail,
      uid: auth.currentUser.uid,
      uName: auth.currentUser.displayName,
      volumeInfo,
    });
  };
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.search__books}>
        {books.map(book => {
          let title = book.volumeInfo.title;
          let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
          if (thumbnail != undefined) {
            return (
              <div key={book.id} className={styles.search__card}>
                <h3 className="title">{title}</h3>
                <img src={thumbnail} alt="" />
                <button
                  onClick={() => {
                    addBook(title, thumbnail, book.volumeInfo);
                  }}
                >
                  Add
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
