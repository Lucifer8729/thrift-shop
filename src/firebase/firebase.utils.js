import firebase from "firebase/compact/app";
import "firebase/compact/firestore";
import "firebase/compact/auth";
import "firebase/compact/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBRCU-OkM6mz9atYccxWxWD04S7-ZV0syE",
    authDomain: "thriftshop-96c39.firebaseapp.com",
    projectId: "thriftshop-96c39",
    storageBucket: "thriftshop-96c39.appspot.com",
    messagingSenderId: "516881445943",
    appId: "1:516881445943:web:357d41a6b2aadc7da8fbb2",
    measurementId: "G-ND5TQTSB9V"
  };
  
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;