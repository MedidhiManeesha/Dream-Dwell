// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnyEJResaliHZPpA4lWZutiaEaqA3z9Fg",
  authDomain: "dream-dwell-app-7733.firebaseapp.com",
  projectId: "dream-dwell-app-7733",
  storageBucket: "dream-dwell-app-7733.appspot.com",
  messagingSenderId: "766966958600",
  appId: "1:766966958600:web:f4638c9233a14309f89fbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();