/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyC2vB2RRBYcmf2UT_GaZPzPh6aydNprjGo",
  authDomain: "everythingeee-f6d89.firebaseapp.com",
  projectId: "everythingeee-f6d89",
  storageBucket: "everythingeee-f6d89.appspot.com",
  messagingSenderId: "780053322911",
  appId: "1:780053322911:web:33eac82a4dd191ac9516aa",
  measurementId: "G-ZF85EE86SF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const storage = getStorage(app);

export{ app , auth};
export { storage, ref, getDownloadURL };