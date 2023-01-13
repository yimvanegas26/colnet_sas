import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB0WLYDrI6py9Qd2K-cZwxhLMdPqLRb4No",
  authDomain: "colnet-e7707.firebaseapp.com",
  projectId: "colnet-e7707",
  storageBucket: "colnet-e7707.appspot.com",
  messagingSenderId: "549465511758",
  appId: "1:549465511758:web:79042694396d6e4eee701f",
  measurementId: "G-QHVQ5C4W84"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);