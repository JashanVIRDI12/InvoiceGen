// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// Add this import for authentication

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxpTNzM-ZVPUP8NxgRrfxldhs1QCHuf54",
    authDomain: "invoice-gen-bc32d.firebaseapp.com",
    projectId: "invoice-gen-bc32d",
    storageBucket: "invoice-gen-bc32d.appspot.com",
    messagingSenderId: "937385283765",
    appId: "1:937385283765:web:f4bff023e72ef869c9eefc",
    measurementId: "G-MBXC9NE1C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); // Initialize auth with the Firebase app instance
export const db = getFirestore(app);
export default app;