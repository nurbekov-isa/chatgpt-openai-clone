// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMzGkyVJOcF4OsSb6iVYTQa-sktKgRd3M",
  authDomain: "chatgpt-clone-611a1.firebaseapp.com",
  projectId: "chatgpt-clone-611a1",
  storageBucket: "chatgpt-clone-611a1.appspot.com",
  messagingSenderId: "420157517580",
  appId: "1:420157517580:web:373bc1d2da1e9b7b0f6329"
};

// Initialize Firebase
// Single turn pattern
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };