import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2pRPyvC6TG_ZVUmallwJeObENTRgYIz4",
  authDomain: "shoppingcart-f1921.firebaseapp.com",
  projectId: "shoppingcart-f1921",
  storageBucket: "shoppingcart-f1921.appspot.com",
  messagingSenderId: "800398845032",
  appId: "1:800398845032:web:28f884a4f6106335f607dd",
  measurementId: "G-59MLC35Q0B",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
const fs = firebase;

export { auth, storage, db, fs };
