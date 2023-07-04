import * as firebase from "firebase/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNRefuMYIGgHSZo14eKb1I5we9CErg-gQ",
  authDomain: "portfolio-35f81.firebaseapp.com",
  projectId: "portfolio-35f81",
  storageBucket: "portfolio-35f81.appspot.com",
  messagingSenderId: "1005499509535",
  appId: "1:1005499509535:web:6e1d0b1c839bafd4115e2a",
  measurementId: "G-D6WGNN8FMT",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const dbService = getFirestore();
