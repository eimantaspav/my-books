import styles from './Home.module.css';
// hooks
import { useEffect, useState } from 'react';
//services
import { auth, db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function Home() {
  const librariesCollectionRef = collection(db, 'Libraries');
  const [readingList, setReadingList] = useState([]);
  const q = query(librariesCollectionRef, where('uid', '==', auth.currentUser.uid));

  //
  useEffect(() => {
    const getReadingList = async () => {
      const data = await getDocs(q);
      setReadingList(data.docs.map(doc => ({ ...doc.data() })));
    };
    getReadingList();
    console.log(readingList);
  }, []);
  //
  return (
    <div>
      <h1>Reading List</h1>
      {readingList.map(book => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <img src={book.thumbnail} alt="" />
            <button>Add notes</button>
          </div>
        );
      })}
    </div>
  );
}
