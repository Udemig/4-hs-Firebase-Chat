// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBb-A8Ei0OCo3VCtqiKQ1a0M3BsI_aC9Lo',
  authDomain: 'chatrooms-80665.firebaseapp.com',
  projectId: 'chatrooms-80665',
  storageBucket: 'chatrooms-80665.appspot.com',
  messagingSenderId: '700316292615',
  appId: '1:700316292615:web:35411b5ab81d64abd3bca2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
