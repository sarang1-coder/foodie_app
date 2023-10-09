// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFgQiDzbTb19xfEPhOwKK5PPN22Ibh8SQ",
  authDomain: "foodieapp-7786b.firebaseapp.com",
  projectId: "foodieapp-7786b",
  storageBucket: "foodieapp-7786b.appspot.com",
  messagingSenderId: "305016935883",
  appId: "1:305016935883:web:ca8bdc4699879cbc50124e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const provider = new GoogleAuthProvider()
