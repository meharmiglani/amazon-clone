import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAOBPf-_HV8GjJL-NIyQj-jh8khFpVJU2g',
  authDomain: 'clone-2212.firebaseapp.com',
  databaseURL: 'https://clone-2212.firebaseio.com',
  projectId: 'clone-2212',
  storageBucket: 'clone-2212.appspot.com',
  messagingSenderId: '1075954797207',
  appId: '1:1075954797207:web:941f643a4ac754d774b7d2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
