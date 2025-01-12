import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIbaZsgTPMX0zkGHhyuboksJuLvCMQcqc",
  authDomain: "link-sharing-app-83787.firebaseapp.com",
  projectId: "link-sharing-app-83787",
  storageBucket: "link-sharing-app-83787.firebasestorage.app",
  messagingSenderId: "35697139729",
  appId: "1:35697139729:web:344e5e167c32df147ad1b0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
