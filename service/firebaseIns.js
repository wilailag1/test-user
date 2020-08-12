import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBviix6MNryaGUaK08T4r8O0k62u0KHA10",
  authDomain: "test-user-4b266.firebaseapp.com",
  databaseURL: "https://test-user-4b266.firebaseio.com",
  projectId: "test-user-4b266",
  storageBucket: "test-user-4b266.appspot.com",
  messagingSenderId: "853956151488",
  appId: "1:853956151488:web:6182d4a1d46a86826dc525",
  measurementId: "G-8K562PE1QH"
};

// Initialize Firebase
export const firebaseInit = firebase.initializeApp(firebaseConfig);


