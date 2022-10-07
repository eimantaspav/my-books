import { firebaseConfig } from './key';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// establish a connection
const connection = initializeApp(firebaseConfig);
// services
export const db = getFirestore(connection);
export const auth = getAuth(connection);
export const googleProvider = new GoogleAuthProvider();
