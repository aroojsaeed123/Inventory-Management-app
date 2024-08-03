// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd-GR8ZY4TwW7MiBpQ8_bb_jBRcwAXrpQ",
  authDomain: "inventory-c5b8c.firebaseapp.com",
  projectId: "inventory-c5b8c",
  storageBucket: "inventory-c5b8c.appspot.com",
  messagingSenderId: "358182661843",
  appId: "1:358182661843:web:6b8caf1268746bd6f86e26",
  measurementId: "G-1LY0T0T0FN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);