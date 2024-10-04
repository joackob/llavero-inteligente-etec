// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from  "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIK2zjhpD0Blc0IalRgNqC71634f4KiUI",
  authDomain: "angiediaz-df855.firebaseapp.com",
  projectId: "angiediaz-df855",
  storageBucket: "angiediaz-df855.appspot.com",
  messagingSenderId: "752638920803",
  appId: "1:752638920803:web:04d29a1af8d7e1ada05056",
  measurementId: "G-6K0GBRS0PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export {storage};
export default app;