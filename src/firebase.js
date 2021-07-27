import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7qZk2G4TCFaEArrkFtyMlMVg-iq0oaBE",
  authDomain: "clone-488c8.firebaseapp.com",
  projectId: "clone-488c8",
  storageBucket: "clone-488c8.appspot.com",
  messagingSenderId: "964955006478",
  appId: "1:964955006478:web:a6e74bf90a2f880bdabe5f",
  measurementId: "G-0LVDS9QB4R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
