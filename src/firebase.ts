import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBUVAKEHNI8oO11OSmeFN_tPvrOoseqQCM",
  authDomain: "multi-filial-projekt-1.firebaseapp.com",
  databaseURL: "https://multi-filial-projekt-1-default-rtdb.firebaseio.com",
  projectId: "multi-filial-projekt-1",
  storageBucket: "multi-filial-projekt-1.firebasestorage.app",
  messagingSenderId: "88336281846",
  appId: "1:88336281846:web:514cfd30c707e4a14e7cd7",
  measurementId: "G-GQRLM49G1Z"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
