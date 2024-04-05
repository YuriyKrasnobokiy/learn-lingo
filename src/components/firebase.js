// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
