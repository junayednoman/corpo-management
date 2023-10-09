// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc_icSdCm-HWg43ttY5mbDp7iZm2dm428",
  authDomain: "corpo-management.firebaseapp.com",
  projectId: "corpo-management",
  storageBucket: "corpo-management.appspot.com",
  messagingSenderId: "1033858257929",
  appId: "1:1033858257929:web:0ec4ad530889e17cce54d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;