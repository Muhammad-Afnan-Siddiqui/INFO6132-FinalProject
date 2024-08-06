// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnYOvdI9y9vGJQ4paxonWQ0DVv44rSjxE",
  authDomain: "wrapshop-446a5.firebaseapp.com",
  projectId: "wrapshop-446a5",
  storageBucket: "wrapshop-446a5.appspot.com",
  messagingSenderId: "142223142371",
  appId: "1:142223142371:web:c62f6d65befb8fa4b784d6",
  measurementId: "G-3WYGH9HQZF"
};

// Initialize Firebase
// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firestore instance
export const db = getFirestore(app);

// Get Authentication instance
export const auth = getAuth(app);
