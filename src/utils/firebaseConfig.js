import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwGjHkyCIkWs0oVFfvi9La1wb-Z-MepMM",
  authDomain: "rick-and-morty-86ca4.firebaseapp.com",
  projectId: "rick-and-morty-86ca4",
  storageBucket: "rick-and-morty-86ca4.appspot.com",
  messagingSenderId: "653573924776",
  appId: "1:653573924776:web:f14474ba4615626e819f9d"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const provider = new GoogleAuthProvider();