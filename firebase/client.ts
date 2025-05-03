
import {initializeApp, getApp, getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhqr9ntW0kkNS6Rxa3W66rfL6Dggs5r3Y",
    authDomain: "preptalk-ai-94670.firebaseapp.com",
    projectId: "preptalk-ai-94670",
    storageBucket: "preptalk-ai-94670.firebasestorage.app",
    messagingSenderId: "1029171910783",
    appId: "1:1029171910783:web:8427127cd6438b06c3c74a",
    measurementId: "G-RG8L6XFMSY"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
    export const auth = getAuth(app);
    export const db = getFirestore(app);

