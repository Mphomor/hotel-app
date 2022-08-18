// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCeINYVXazNHZOKV4xtT6Y2fnwZ4okWdY",
  authDomain: "hotel-712eb.firebaseapp.com",
  projectId: "hotel-712eb",
  storageBucket: "hotel-712eb.appspot.com",
  messagingSenderId: "990796667997",
  appId: "1:990796667997:web:bff542d62bbfa75790c1b4",
  measurementId: "G-P9HZXTTDF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {auth, db};
