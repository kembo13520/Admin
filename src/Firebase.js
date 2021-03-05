import firebase from 'firebase/app';
import 'firebase/firestore'
import "firebase/storage";

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAq5mHRY5-jMkFzHpiURMAaqneSBwMy3f8",
  authDomain: "admin-23a86.firebaseapp.com",
  databaseURL: "https://admin-23a86-default-rtdb.firebaseio.com",
  projectId: "admin-23a86",
  storageBucket: "admin-23a86.appspot.com",
  messagingSenderId: "102285677124",
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

const storage = firebase.storage();

export {storage, firebase as default};
