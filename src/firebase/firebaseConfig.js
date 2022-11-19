// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDI3Ap1nD3Wd2RiAszjFGvXIGfj5bLUAbg",
  authDomain: "food-delivery-cfb12.firebaseapp.com",
  projectId: "food-delivery-cfb12",
  storageBucket: "food-delivery-cfb12.appspot.com",
  messagingSenderId: "167113791960",
  appId: "1:167113791960:web:3afc711b9f2de4df17faad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getAuth(app)

module.exports = { auth, app };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDI3Ap1nD3Wd2RiAszjFGvXIGfj5bLUAbg",
//   authDomain: "food-delivery-cfb12.firebaseapp.com",
//   projectId: "food-delivery-cfb12",
//   storageBucket: "food-delivery-cfb12.appspot.com",
//   messagingSenderId: "167113791960",
//   appId: "1:167113791960:web:3afc711b9f2de4df17faad"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);