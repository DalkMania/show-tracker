import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import config from '../../config'

  // Initialize Firebase
  const fbconfig = {
    apiKey: config.firebase.apiKey,
    authDomain: config.firebase.authDomain,
    databaseURL: config.firebase.databaseURL,
    projectId: config.firebase.projectId,
    storageBucket: config.firebase.storageBucket,
    messagingSenderId: config.firebase.messagingSenderId,
  };
  firebase.initializeApp(fbconfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.database();

export default firebase;
