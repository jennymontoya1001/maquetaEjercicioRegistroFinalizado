import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBdMGZvBMRdDBT_p2DSJ1gx1lO2eiJFfQ",
  authDomain: "fir-v9-4527c.firebaseapp.com",
  projectId: "fir-v9-4527c",
  storageBucket: "fir-v9-4527c.appspot.com",
  messagingSenderId: "521105501754",
  appId: "1:521105501754:web:a39cc57de0b9f5f5364f03"
};

const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();

export{
    app,
    google
}