
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCt2vNEl95O8YfEd6xDvUCRdTV6iTp1PsY",
  authDomain: "vartalap-41e11.firebaseapp.com",
  projectId: "vartalap-41e11",
  storageBucket: "vartalap-41e11.appspot.com",
  messagingSenderId: "427199409817",
  appId: "1:427199409817:web:6cc577d25d9f1023629208",
  measurementId: "G-E8KVGT43PC"
};

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth= getAuth(app);