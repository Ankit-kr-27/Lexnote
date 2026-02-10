import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "lexnote-cd6d1.firebaseapp.com",
  projectId: "lexnote-cd6d1",
  storageBucket: "lexnote-cd6d1.firebasestorage.app",
  messagingSenderId: "823122435678",
  appId: "1:823122435678:web:75b6fa1559ec8818145ecf",
  measurementId: "G-7FGJDWW59C"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}