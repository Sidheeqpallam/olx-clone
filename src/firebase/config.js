import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAdJJ_pvjAGR7ks1JuX7OaWBAFfUgOBnLg",
    authDomain: "olx-clone-3f289.firebaseapp.com",
    projectId: "olx-clone-3f289",
    storageBucket: "olx-clone-3f289.appspot.com",
    messagingSenderId: "674484807880",
    appId: "1:674484807880:web:47ddc45978e8cd7d67ddfd",
    measurementId: "G-7WHE1WSG4B"
  };

export default  firebase.initializeApp(firebaseConfig)