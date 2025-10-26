import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCyoLNFvAcpwKX6ZCDfnuU0hBw00duFhjA",
  authDomain: "db-multi-filial-projekt.firebaseapp.com",
  projectId: "db-multi-filial-projekt",
  storageBucket: "db-multi-filial-projekt.firebasestorage.app",
  messagingSenderId: "452912643077",
  appId: "1:452912643077:web:2085bd06d2931483a9b06c"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
