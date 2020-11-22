import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWIa2a8zVVA2yKJnjA1HoQQaw7L66-bE8",
    authDomain: "crwn-db-65fb2.firebaseapp.com",
    databaseURL: "https://crwn-db-65fb2.firebaseio.com",
    projectId: "crwn-db-65fb2",
    storageBucket: "crwn-db-65fb2.appspot.com",
    messagingSenderId: "237429327116",
    appId: "1:237429327116:web:acd22290d4a07fb2cab529"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;