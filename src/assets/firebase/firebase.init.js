// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0o1ZlQqXFb3bNvQGJ9Dk_N0FRUQ7slm4",
  authDomain: "assignment-10-a35b0.firebaseapp.com",
  projectId: "assignment-10-a35b0",
  storageBucket: "assignment-10-a35b0.firebasestorage.app",
  messagingSenderId: "436613724173",
  appId: "1:436613724173:web:1c3993dbc13d4cc3ef3d44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);