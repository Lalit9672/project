import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAeWUvA_sXWUL6ps7QIjF55-BZHG--qg8w",
    authDomain: "college-project-337223.firebaseapp.com",
    databaseURL: "https://college-project-337223-default-rtdb.firebaseio.com",
    projectId: "college-project-337223",
    storageBucket: "college-project-337223.appspot.com",
    messagingSenderId: "651643674784",
    appId: "1:651643674784:web:1be7c51aa81fb44464e9c5"
  };
  

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

export default app;