// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsn5tNFWoPNYM0P_E__tMJV6WgyXkNIrY",
  authDomain: "tomadoro-ab0f7.firebaseapp.com",
  projectId: "tomadoro-ab0f7",
  storageBucket: "tomadoro-ab0f7.appspot.com",
  messagingSenderId: "133118442137",
  appId: "1:133118442137:web:79c67b14fd55e215bd5608",
  measurementId: "G-31BK4ZCDNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);