// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcxsjvn3I7779B4cZqWKNEZy8NeHy1x0c",
  authDomain: "petapp-4f2b9.firebaseapp.com",
  databaseURL: "https://petapp-4f2b9-default-rtdb.firebaseio.com",
  projectId: "petapp-4f2b9",
  storageBucket: "petapp-4f2b9.appspot.com",
  messagingSenderId: "1012897066189",
  appId: "1:1012897066189:web:0936a1eb88dfc5fc054d84"
};

// Initialize Firebase
let app

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

export const db = app.database();
export const firestore = firebase.firestore(app);
export const auth = app.auth();
export const storage = app.storage();