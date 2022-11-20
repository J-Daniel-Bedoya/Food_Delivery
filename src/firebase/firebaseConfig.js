import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxQFtaeeOwinJV86YxS7uNoexYdh-au1w",
  authDomain: "foodadeliveryapp.firebaseapp.com",
  projectId: "foodadeliveryapp",
  storageBucket: "foodadeliveryapp.appspot.com",
  messagingSenderId: "868801719592",
  appId: "1:868801719592:web:3b4b8cd439bc9792a7341d",
  measurementId: "G-NJ57RPPVJR"
};

const app = initializeApp(firebaseConfig)

export default app;