// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo8TnIIJObbkLeCZf3F99pJu3ygY0I_Ts",
  authDomain: "d-models-hub-client-5a367.firebaseapp.com",
  projectId: "d-models-hub-client-5a367",
  storageBucket: "d-models-hub-client-5a367.firebasestorage.app",
  messagingSenderId: "146256802269",
  appId: "1:146256802269:web:67452dd653b591f2604634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
