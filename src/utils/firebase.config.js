import { initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';

import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBvUvBXdoDIDp4DCmIWuZ_RVKWydEAu7uM",
  authDomain: "mealstogo-97a67.firebaseapp.com",
  projectId: "mealstogo-97a67",
  storageBucket: "mealstogo-97a67.appspot.com",
  messagingSenderId: "439379393216",
  appId: "1:439379393216:web:a75f9f9a914ef36a228b25",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});


export { auth };
