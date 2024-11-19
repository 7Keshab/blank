
// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPyiBfDAzGeNhncWGZ3M9zfHUnX357kqM",
  authDomain: "spring-s-dream.firebaseapp.com",
  projectId: "spring-s-dream",
  storageBucket: "spring-s-dream.firebasestorage.app",
  messagingSenderId: "90024110481",
  appId: "1:90024110481:web:2076c228943813bdb39230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
const db = getFirestore(app);

export { app, auth, db };

