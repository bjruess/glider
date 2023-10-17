import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKJYQcYZkWwtAEjTizEqrIC2Xg-9gxmVM",
  authDomain: "glider-24235.firebaseapp.com",
  projectId: "glider-24235",
  storageBucket: "glider-24235.appspot.com",
  messagingSenderId: "774637155740",
  appId: "1:774637155740:web:a715a167b3a9b790ae0459"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);

