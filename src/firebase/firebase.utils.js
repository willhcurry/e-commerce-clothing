import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDTUL-_7V72Y0_qZ4TTfXdncHkU3N5PU1Y",
    authDomain: "ecommerce-db-bdf16.firebaseapp.com",
    databaseURL: "https://ecommerce-db-bdf16.firebaseio.com",
    projectId: "ecommerce-db-bdf16",
    storageBucket: "ecommerce-db-bdf16.appspot.com",
    messagingSenderId: "150546467178",
    appId: "1:150546467178:web:e957b0505df3300460bd13"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;