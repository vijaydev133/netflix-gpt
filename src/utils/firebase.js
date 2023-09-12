// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkSYQOwFYeMtJR7vh80II8QmzjSM7sbnc",
  authDomain: "netflixgpt-67bb0.firebaseapp.com",
  projectId: "netflixgpt-67bb0",
  storageBucket: "netflixgpt-67bb0.appspot.com",
  messagingSenderId: "334148222611",
  appId: "1:334148222611:web:66a70a5dab11d3ce02d766",
  measurementId: "G-GBEGG9DEPP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
