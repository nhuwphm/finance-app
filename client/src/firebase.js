// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBWkbc7sM5xzrmr9PnueiDymBZdhmpNxdQ",
  authDomain: "finance-app-59f62.firebaseapp.com",
  databaseURL: "https://finance-app-59f62-default-rtdb.firebaseio.com",
  projectId: "finance-app-59f62",
  storageBucket: "finance-app-59f62.appspot.com",
  messagingSenderId: "806564549621",
  appId: "1:806564549621:web:d6c3ae39d2975343c706bc",
  measurementId: "G-SR56GCKEF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default auth;