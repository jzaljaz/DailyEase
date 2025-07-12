// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDcsWvG5xJj9tDa95uaCuJ5COR1LOWKlQQ",
  authDomain: "daily-ease-33f6c.firebaseapp.com",
  projectId: "daily-ease-33f6c",
  storageBucket: "daily-ease-33f6c.firebasestorage.app",
  messagingSenderId: "45763056894",
  appId: "1:45763056894:web:0145fb0abefbb23a0381af",
  measurementId: "G-K54M5PGWR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getFirestore(app);