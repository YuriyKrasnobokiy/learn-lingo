import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCy12rInr6ozCwte4LMiTw8pyvIAouPpRs",
  authDomain: "learn-lingo-4060d.firebaseapp.com",
  projectId: "learn-lingo-4060d",
  storageBucket: "learn-lingo-4060d.appspot.com",
  messagingSenderId: "681665427932",
  appId: "1:681665427932:web:23344a00a95aa3c8303719",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

// const API_KEY = import.meta.env.VITE_API_KEY;
// const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
// const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
// const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
// const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
// const APP_ID = import.meta.env.VITE_APP_ID;

// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId: APP_ID,
// };