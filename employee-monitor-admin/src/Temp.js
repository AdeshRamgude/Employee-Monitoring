import React, { Component } from 'react';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCqYPSR5N8Sw_kVUJc5b7Hk7jE8OwOfOIQ",
    authDomain: "first-todo-app-2eaa3.firebaseapp.com",
    databaseURL: "https://first-todo-app-2eaa3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "first-todo-app-2eaa3",
    storageBucket: "first-todo-app-2eaa3.appspot.com",
    messagingSenderId: "938941825211",
    appId: "1:938941825211:web:8207a970f941265501299e",
    measurementId: "G-DLH5958F2R"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  const dbRef = database.ref();
  var userId="BjM2jV19NcTeNpV9SjKR38CdX0s2";
  dbRef.child("users").child(userId).child("count").get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val().arrow);
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

dbRef.child("users").child(userId).child("activity_images").get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val().url);
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});



class Temp extends Component {
    render() {
        return (
            <div>
                Test
            </div>
        );
    }
}

export default Temp;