import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8c80b.firebaseapp.com",
  projectId: "reactchat-8c80b",
  storageBucket: "reactchat-8c80b.appspot.com",
  messagingSenderId: "20124075971",
  appId: "1:20124075971:web:2776fc27dddae42ff75f76",
  measurementId: "G-7ZDHN24ZB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { app, analytics, auth, db, storage };
