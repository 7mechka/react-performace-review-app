import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
 
const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "react-performance-review-47370.firebaseapp.com",

  projectId: "react-performance-review-47370",

  storageBucket: "react-performance-review-47370.appspot.com",

  messagingSenderId: "1002900095159",

  appId: "1:1002900095159:web:1860d9970c1cb41ef9cd32"

});
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();