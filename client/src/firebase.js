// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bloginsights-e7e82.firebaseapp.com",
  projectId: "bloginsights-e7e82",
  storageBucket: "bloginsights-e7e82.appspot.com",
  messagingSenderId: "496299796995",
  appId: "1:496299796995:web:f5115a434c226076befc36"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);