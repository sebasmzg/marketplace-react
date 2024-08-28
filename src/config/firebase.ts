import { initializeApp, FirebaseOptions } from "firebase/app";
import * as auth from "firebase/auth";

console.log("API Key:", process.env.REACT_APP_FIREBASE_API_KEY);
console.log("Auth Domain:", process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
console.log("Project ID:", process.env.REACT_APP_FIREBASE_PROJECT_ID);
console.log("Storage Bucket:", process.env.REACT_APP_FIREBASE_STORAGE_BUCKET);
console.log("Messaging Sender ID:", process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID);
console.log("App ID:", process.env.REACT_APP_FIREBASE_APP_ID);

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const authFirebase = auth.initializeAuth(appFirebase);
