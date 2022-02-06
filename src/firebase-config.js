// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDER60bz4M8UBr5IJWMhNDjUjKO6GjmggU",
  authDomain: "login-ac54d.firebaseapp.com",
  databaseURL: "https://login-ac54d-default-rtdb.firebaseio.com",
  projectId: "login-ac54d",
  storageBucket: "login-ac54d.appspot.com",
  messagingSenderId: "20948397806",
  appId: "1:20948397806:web:79d22b32d6e3a605128dff",
  measurementId: "G-C0NXLMZFCN"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);