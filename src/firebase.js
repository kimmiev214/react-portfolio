// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVQTTuqdp3sTSs3AYLIjsx9GfqY-1QpGo",
  authDomain: "react-portfolio-b664d.firebaseapp.com",
  projectId: "react-portfolio-b664d",
  storageBucket: "react-portfolio-b664d.appspot.com",
  messagingSenderId: "229045402194",
  appId: "1:229045402194:web:83f3de4c288f98717cbd8b",
  measurementId: "G-ZRB3XMM9BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);