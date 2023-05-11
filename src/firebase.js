import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
 apiKey: "AIzaSyD58tb6KdwkBfLLXIQz3Mm4cKyJAUcD-yI",
  authDomain: "otpfire-6a30a.firebaseapp.com",
  projectId: "otpfire-6a30a",
  storageBucket: "otpfire-6a30a.appspot.com",
  messagingSenderId: "904645406201",
  appId: "1:904645406201:web:4376bd8e6054e223b36128",
  measurementId: "G-MDBR6BDB23"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
