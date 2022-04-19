// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {

  apiKey: "AIzaSyCtPyiIrLF9HiZ-PIPFOzkyb_Zxr8vRe8E",

  authDomain: "facebook-clone-3b522.firebaseapp.com",

  projectId: "facebook-clone-3b522",

  storageBucket: "facebook-clone-3b522.appspot.com",

  messagingSenderId: "497477220208",

  appId: "1:497477220208:web:5ffcd7df94de9d3f8881b5",

  measurementId: "G-MKRWP9LVEH"

};

const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db


