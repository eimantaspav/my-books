import styles from './Home.module.css';
// hooks
import { useEffect, useState } from 'react';
//services
import { auth, db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Home({ user }) {
  const librariesCollectionRef = collection(db, 'Libraries');
  const [readingList, setReadingList] = useState([]);

  let navigate = useNavigate();

  //

  useEffect(() => {
    if (user.uid != null) {
      const q = query(librariesCollectionRef, where('uid', '==', user.uid));

      const getReadingList = async () => {
        const data = await getDocs(q);
        setReadingList(data.docs.map(doc => ({ ...doc.data() })));
      };
      getReadingList();
      console.log('get data execute');
    }
  }, [auth.currentUser]);
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
