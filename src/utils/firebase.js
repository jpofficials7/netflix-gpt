// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCgkyDdxqjr6KWg5ZKBoW-aXaXfUSTDWCA',
  authDomain: 'netflixgpt-abbde.firebaseapp.com',
  projectId: 'netflixgpt-abbde',
  storageBucket: 'netflixgpt-abbde.firebasestorage.app',
  messagingSenderId: '46556027842',
  appId: '1:46556027842:web:9d7e1d14205f2d2643545b',
  measurementId: 'G-Q0NF6517DQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
