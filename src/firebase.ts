import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDY2UC0CmJNNw-E0111a-g4jpHuTJFhSmU",
  authDomain: "web-cv-267b2.firebaseapp.com",
  projectId: "web-cv-267b2",
  storageBucket: "web-cv-267b2.firebasestorage.app",
  messagingSenderId: "687400550800",
  appId: "1:687400550800:web:e52e7e510be3e9eb947315",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
