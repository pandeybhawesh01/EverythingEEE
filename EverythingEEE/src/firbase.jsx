// firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyC2vB2RRBYcmf2UT_GaZPzPh6aydNprjGo",
  authDomain: "everythingeee-f6d89.firebaseapp.com",
  projectId: "everythingeee-f6d89",
  storageBucket: "everythingeee-f6d89.appspot.com",
  messagingSenderId: "780053322911",
  appId: "1:780053322911:web:33eac82a4dd191ac9516aa",
  measurementId: "G-ZF85EE86SF"
};

// Initialize Firebase with a custom name (e.g., 'MyApp')
const appp = initializeApp(firebaseConfig, 'MyApp'); // Custom name
const analytics = getAnalytics(appp);

export { appp, analytics };
