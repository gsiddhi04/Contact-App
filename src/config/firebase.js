// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4DjWUYXzusBeCTP59DQPJPK4FkBl3gio",
  authDomain: "vite-contact-e7a71.firebaseapp.com",
  projectId: "vite-contact-e7a71",
  storageBucket: "vite-contact-e7a71.appspot.com",
  messagingSenderId: "35612935238",
  appId: "1:35612935238:web:17c2b121f7e10ce5a23647"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);