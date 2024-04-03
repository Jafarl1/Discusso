import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCOsE-yJH2uRm9lWPBpY70Qh0PaY5hN0K0",
  authDomain: "diary-app-77dcd.firebaseapp.com",
  projectId: "diary-app-77dcd",
  storageBucket: "diary-app-77dcd.appspot.com",
  messagingSenderId: "603487878276",
  appId: "1:603487878276:web:1d4cec8dd2a832e16dd6d1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase();

export { app, auth, database, getDatabase, ref, set };
