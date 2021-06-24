import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCqYPSR5N8Sw_kVUJc5b7Hk7jE8OwOfOIQ",
    authDomain: "first-todo-app-2eaa3.firebaseapp.com",
    databaseURL: "https://first-todo-app-2eaa3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "first-todo-app-2eaa3",
    storageBucket: "first-todo-app-2eaa3.appspot.com",
    messagingSenderId: "938941825211",
    appId: "1:938941825211:web:8207a970f941265501299e",
    measurementId: "G-DLH5958F2R"
  });
  const db=firebase.database().ref();
  const at=firebase.auth();
  export {db,at};