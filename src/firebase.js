// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyBy7HeWUOa729KJFVt--zz8rIIizt1x9VM",
  authDomain: "cyberadmin-e5ed7.firebaseapp.com",
  projectId: "cyberadmin-e5ed7",
  storageBucket: "cyberadmin-e5ed7.appspot.com",
  messagingSenderId: "541232109524",
  appId: "1:541232109524:web:545cd0b33fdf0e35f4a841",
  measurementId: "G-C1XZJ3KVRG"
};

const app = initializeApp(firebaseConfig);
export const db =getDatabase(app);