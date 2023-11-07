import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";






const firebaseConfig = {
  apiKey: "AIzaSyARK10x8iaawHfaqmDSVEwy1uC3nJDZjQs",
  authDomain: "redesocial-e2e56.firebaseapp.com",
  projectId: "redesocial-e2e56",
  storageBucket: "redesocial-e2e56.appspot.com",
  messagingSenderId: "922165985209",
  appId: "1:922165985209:web:4929ab920dc0de9ad7c068",
  measurementId: "G-BTG06W7W47"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);


export { auth, firestore };




