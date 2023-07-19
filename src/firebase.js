// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDPkCcdf9tO_gq_RQknFGTuz1WD4xAvCMI",
  authDomain: "extension-c720b.firebaseapp.com",
  projectId: "extension-c720b",
  storageBucket: "extension-c720b.appspot.com",
  messagingSenderId: "186812680296",
  appId: "1:186812680296:web:f023e57f17e617bb23d3dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const firestore = getFirestore(app);