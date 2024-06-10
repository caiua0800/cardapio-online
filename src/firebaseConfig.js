
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBnU1Mzrr6oPC225TBbvD2vYMyh1jEiLmE",
  authDomain: "cardapio-delivery-81d6f.firebaseapp.com",
  projectId: "cardapio-delivery-81d6f",
  storageBucket: "cardapio-delivery-81d6f.appspot.com",
  messagingSenderId: "146533726071",
  appId: "1:146533726071:web:fcc9826a211ecb2508d372"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
