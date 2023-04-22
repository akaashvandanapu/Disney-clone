import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB___BhtkB3VeRAcwaZR3R8f5y0KxRmqRQ",
    authDomain: "disneyplus-clone-fdc48.firebaseapp.com",
    projectId: "disneyplus-clone-fdc48",
    storageBucket: "disneyplus-clone-fdc48.appspot.com",
    messagingSenderId: "528825714809",
    appId: "1:528825714809:web:38ad8a231d51be474f2ca8",
    measurementId: "G-QHCQMEZLXS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();//Adding the google O-authentication
const storage = firebase.storage();

export { auth, provider, storage};
export default db;