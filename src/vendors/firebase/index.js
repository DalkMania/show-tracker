import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyCsDd5OyGwyK4jwDN0FqOlrAFZP5XjHkns',
    authDomain: 'tvtrackerapp-e68a2.firebaseapp.com',
    databaseURL: 'https://tvtrackerapp-e68a2.firebaseio.com',
    projectId: 'tvtrackerapp-e68a2',
    storageBucket: '',
    messagingSenderId: '703545240234',
  };
  firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.database();

export default firebase;
