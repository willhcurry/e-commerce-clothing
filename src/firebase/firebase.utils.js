import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "PRIVATE",
    authDomain: "ecommerce-db-bdf16.firebaseapp.com",
    databaseURL: "https://ecommerce-db-bdf16.firebaseio.com",
    projectId: "ecommerce-db-bdf16",
    storageBucket: "ecommerce-db-bdf16.appspot.com",
    messagingSenderId: "150546467178",
    appId: "1:150546467178:web:e957b0505df3300460bd13"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc('users/123dsfrwre');

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;