// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQycDpDfkVWcDiYkCK7RjF3BX8KrC__E8",
  authDomain: "iplplayerdatabase.firebaseapp.com",
  projectId: "iplplayerdatabase",
  storageBucket: "iplplayerdatabase.appspot.com",
  messagingSenderId: "38875972769",
  appId: "1:38875972769:web:8c045d59d3c3401c5b9ce0",
  measurementId: "G-J4RKEK9PQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
