import { initializeApp } from 'firebase/app'

  const firebaseConfig = {
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,
    // measurementId: process.env.FIREBASE_MEASUREMENT_ID
    apiKey: "AIzaSyCYN5ordAEmdqJ1FRyckWrnZTefkFiESes",
    authDomain: "devs-5b8b7.firebaseapp.com",
    projectId: "devs-5b8b7",
    storageBucket: "devs-5b8b7.appspot.com",
    messagingSenderId: "1088314394643",
    appId: "1:1088314394643:web:48ed4e0a5784a5287dd7e6",
    measurementId: "G-175TL5R6HX"
  };

  // init firebase
export const config = initializeApp(firebaseConfig);

