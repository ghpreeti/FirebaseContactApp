// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg3-h5XYjQrZFykk5zBzNwMIcqgbTx-1o",
  authDomain: "vite-contact-3083c.firebaseapp.com",
  projectId: "vite-contact-3083c",
  storageBucket: "vite-contact-3083c.appspot.com",
  messagingSenderId: "183698793083",
  appId: "1:183698793083:web:aa40b2c236167b107838de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);