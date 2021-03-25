import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBek40qsfn9nQECt5ejU09uSh4Hji7b5bc",
  authDomain: "doctorauction-2cbe8.firebaseapp.com",
  databaseURL: "https://doctorauction-2cbe8-default-rtdb.firebaseio.com",
  projectId: "doctorauction-2cbe8",
  storageBucket: "doctorauction-2cbe8.appspot.com",
  messagingSenderId: "776220455949",
  appId: "1:776220455949:web:40d8b98949646efc915144",
  measurementId: "G-PLZDHE54ET",
});

export const auth = app.auth();
export const db = app.database();
export default app;
