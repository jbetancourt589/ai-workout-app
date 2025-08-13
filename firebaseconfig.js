// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBubIjdSvqPIO4sDFFajQZBgBdWrolFvTs",
  authDomain: "ai-workout-app-e42f9.firebaseapp.com",
  projectId: "ai-workout-app-e42f9",
  storageBucket: "ai-workout-app-e42f9.firebasestorage.app",
  messagingSenderId: "635379329203",
  appId: "1:635379329203:web:69703975982d8ad21d68c6",
  measurementId: "G-KR1EL6PCRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);