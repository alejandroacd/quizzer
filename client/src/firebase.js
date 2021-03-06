import firebase from 'firebase/app';
import 'firebase/auth';



export const app = firebase.initializeApp({
    apiKey: "AIzaSyCl38WbmDQl7o5l4IeYqRC-qoaDtgRRs1Q",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
})

export const auth = app.auth();

