import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSgAiOfdhEFjodwwH28jVJ7yhDZzL8U98",
  authDomain: "todo-1-29cfc.firebaseapp.com",
  projectId: "todo-1-29cfc",
  storageBucket: "todo-1-29cfc.firebasestorage.app",
  messagingSenderId: "962079322852",
  appId: "1:962079322852:web:d9053927f771a4d73932f1",
  measurementId: "G-EWSSMZGM22",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
