// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy12rInr6ozCwte4LMiTw8pyvIAouPpRs",
  authDomain: "learn-lingo-4060d.firebaseapp.com",
  projectId: "learn-lingo-4060d",
  storageBucket: "learn-lingo-4060d.appspot.com",
  messagingSenderId: "681665427932",
  appId: "1:681665427932:web:23344a00a95aa3c8303719",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);