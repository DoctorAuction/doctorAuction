import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2c4GatfxKIkJMvk4QS8onTFwo410-8b0",
  authDomain: "doctorauction-aa0fc.firebaseapp.com",
  databaseURL: "https://doctorauction-aa0fc-default-rtdb.firebaseio.com",
  projectId: "doctorauction-aa0fc",
  storageBucket: "doctorauction-aa0fc.appspot.com",
  messagingSenderId: "519972242480",
  appId: "1:519972242480:web:1648723d757ceeebe959f5",
  measurementId: "G-P4R7P1LCDR",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
export default db;
