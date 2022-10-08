import styles from './Home.module.css';
//
import emptyBooks from '../../img/emptyBooks.svg';
// hooks
import { useEffect, useState } from 'react';
//services
import { db } from '../../firebase/config';
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Home({ user }) {
  const librariesCollectionRef = collection(db, 'Libraries');
  const [readingList, setReadingList] = useState([]);
  let navigate = useNavigate();

  // get books to display
  const getReadingList = async () => {
    if (user.uid != null) {
      const q = query(librariesCollectionRef, where('uid', '==', user.uid));
      const data = await getDocs(q);
      setReadingList(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    } else {
      navigate('/login');
    }
  };
  // delete book from home
  const deleteBook = async id => {
    const libDoc = doc(db, 'Libraries', id);
    await deleteDoc(libDoc);
    getReadingList();
  };
  // display books
  useEffect(() => {
    getReadingList();
  }, []);

  console.log(readingList);
  //
  return (
    <div className={styles.home}>
      <div className={`${styles.container} container`}>
        <h2>My Books</h2>
        {(readingList === undefined || readingList.length == 0) && (
          <div className={styles.home__empty}>
            <img src={emptyBooks} alt="" />

            <h1>
              Your book library is empty {':('} <br /> You can add books in the search section!
            </h1>
          </div>
        )}
        <div className={styles.home__books}>
          {readingList.map(book => {
            return (
              <div key={book.id} className={styles.home__card}>
                <h3>{book.title}</h3>
                <img src={book.thumbnail} alt="" />

                <button
                  onClick={() => {
                    deleteBook(book.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
