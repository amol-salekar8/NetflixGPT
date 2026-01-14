    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEcRbO86sd1E-V2oFRBpWx2hSwTBMPAg8",
  authDomain: "netflixgpt-623b3.firebaseapp.com",
  projectId: "netflixgpt-623b3",
  storageBucket: "netflixgpt-623b3.firebasestorage.app",
  messagingSenderId: "512692171674",
  appId: "1:512692171674:web:4dafb59fe36604462ec023",
  measurementId: "G-EM5BTV59B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();