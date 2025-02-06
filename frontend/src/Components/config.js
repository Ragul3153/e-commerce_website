// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "login-auth-b29ce.firebaseapp.com",
  projectId: "login-auth-b29ce",
  storageBucket: "login-auth-b29ce.firebasestorage.app",
  messagingSenderId: "1050896762060",
  appId: process.env.REACT_APP_API_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;