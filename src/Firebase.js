import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyCP7cjatL6T7NIejEzW8bha35w44s6xY6I",
  authDomain: "ticketland-cb74c.firebaseapp.com",
  databaseURL: "https://ticketland-cb74c-default-rtdb.firebaseio.com",
  projectId: "ticketland-cb74c",
  storageBucket: "ticketland-cb74c.appspot.com"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
