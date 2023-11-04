// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc6jotjCC6JrRS5sxOSXTq2-FgleI4BZA",
  authDomain: "pizzan-restaurant.firebaseapp.com",
  projectId: "pizzan-restaurant",
  storageBucket: "pizzan-restaurant.appspot.com",
  messagingSenderId: "898125759683",
  appId: "1:898125759683:web:fa76d329b89ffb29ed8e76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;