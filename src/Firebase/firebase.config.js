// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmt6JVqag4eM7rt5I4X_aufe7GfGjeX0U",
  authDomain: "local-chef-bazaar-c2f58.firebaseapp.com",
  projectId: "local-chef-bazaar-c2f58",
  storageBucket: "local-chef-bazaar-c2f58.firebasestorage.app",
  messagingSenderId: "269418301918",
  appId: "1:269418301918:web:a0c10fe5a7a1dc3a13354f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);