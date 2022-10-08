import { useState } from 'react';
import { db, auth } from '../../firebase/config';
import { addDoc, collection, getDocs } from 'firebase/firestore';

export default function BookCard({ books }) {
  const librariesCollectionRef = collection(db, 'Libraries');
  const addBook = async (id, title, thumbnail, volumeInfo) => {
    await addDoc(librariesCollectionRef, {
      id,
      title,
      thumbnail,
      uid: auth.currentUser.uid,
      uName: auth.currentUser.displayName,
      volumeInfo,
    });
  };
  return (
    <>
      {books.map(book => {
        let title = book.volumeInfo.title;
        let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
        if (thumbnail != undefined) {
          return (
            <div key={book.id} className="card">
              <img src={thumbnail} alt="" />
              <div className="bottom">
                <h3 className="title">{title}</h3>
                <button
                  onClick={() => {
                    addBook(book.id, title, thumbnail, book.volumeInfo);
                  }}
                >
                  Add to reading list
                </button>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
