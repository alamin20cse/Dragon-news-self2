// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpfPEyuzC2PZ6Ky-UdjCgnNejvRYrrIAA",
  authDomain: "dragon-news-self.firebaseapp.com",
  projectId: "dragon-news-self",
  storageBucket: "dragon-news-self.firebasestorage.app",
  messagingSenderId: "748464163297",
  appId: "1:748464163297:web:ca3d62bcfa95d3e6166aa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);