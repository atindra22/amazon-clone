// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCK_7cHKKT17i6zf8cgE4xfdy0_NoU6QKY",
    authDomain: "clone-355af.firebaseapp.com",
    projectId: "clone-355af",
    storageBucket: "clone-355af.appspot.com",
    messagingSenderId: "477034711513",
    appId: "1:477034711513:web:b51a5d6b076cbcc520f1c8",
    measurementId: "G-4D7LYQDWKR"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };