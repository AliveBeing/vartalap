
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBLOz64gpHbbzrfjGc4wOsgz0fjCi116Rg",
  authDomain: "vartalap-6250b.firebaseapp.com",
  projectId: "vartalap-6250b",
  storageBucket: "vartalap-6250b.appspot.com",
  messagingSenderId: "531340121918",
  appId: "1:531340121918:web:8aa2b25ad0cabfef7d7e6f",
  measurementId: "G-MEWHYFB4J0"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth= getAuth(app);