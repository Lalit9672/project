import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkjTwKRciSMbQMjBruhuDKyHY2N6m9fSg",
    authDomain: "react-firebase-5a622.firebaseapp.com",
    projectId: "react-firebase-5a622",
    storageBucket: "react-firebase-5a622.appspot.com",
    messagingSenderId: "225067817638",
    appId: "1:225067817638:web:5e1aca3a31fca62dc93267",
    measurementId: "G-L3YG33KGD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const fire = firebase.initializeApp(firebaseConfig);
export default fire;

