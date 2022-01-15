import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVZdEql3L7_l-MXHJ8st7fpmzY7MdpLdk",
  authDomain: "facebook-clone-a7132.firebaseapp.com",
  projectId: "facebook-clone-a7132",
  storageBucket: "facebook-clone-a7132.appspot.com",
  messagingSenderId: "384346194803",
  appId: "1:384346194803:web:c0dc70050e1f2d58503b06",
  measurementId: "G-7B4D2FJX2S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
