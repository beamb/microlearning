import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5szbyWcdHYNfIUObkFeQMD8GukWctsvI",
  authDomain: "microlearning-app-08122020.firebaseapp.com",
  databaseURL: "https://microlearning-app-08122020.firebaseio.com",
  projectId: "microlearning-app-08122020",
  storageBucket: "microlearning-app-08122020.appspot.com",
  messagingSenderId: "444024438264",
  appId: "1:444024438264:web:af715ed09c455e147faa0d"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAppAuth = firebaseApp.auth();
export const database = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
