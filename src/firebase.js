import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyCex8Cvg4AOzrBy4UJaU75rOo1vndhWaik",
  authDomain: "qrproject-c3136.firebaseapp.com",
  projectId: "qrproject-c3136",
  storageBucket: "qrproject-c3136.appspot.com",
  messagingSenderId: "580072271836",
  appId: "1:580072271836:web:5dda1dd7fd49efb4b7a919"
  };
  const app = initializeApp(firebaseConfig);
 export const db = getDatabase();