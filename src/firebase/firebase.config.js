// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAQDjT4C5KEkzWp-I2QkL053l4KvxA05U",
    authDomain: "bhalokaj-a037f.firebaseapp.com",
    projectId: "bhalokaj-a037f",
    storageBucket: "bhalokaj-a037f.firebasestorage.app",
    messagingSenderId: "748484609098",
    appId: "1:748484609098:web:105632ce41dac8579452b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;