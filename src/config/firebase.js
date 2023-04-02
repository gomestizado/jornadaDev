
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB2rokI9FaTBoLswZ49fNxs3KrZVWckKAM",
  authDomain: "tiktok-clone-5570c.firebaseapp.com",
  projectId: "tiktok-clone-5570c",
  storageBucket: "tiktok-clone-5570c.appspot.com",
  messagingSenderId: "24174671812",
  appId: "1:24174671812:web:a495dbce746dfa52de1691"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;