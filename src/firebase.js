
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCY9lIvhb0Q12hc5BBx-K3NMtvyoT9Br_o",
    authDomain: "chat-f11ce.firebaseapp.com",
    projectId: "chat-f11ce",
    storageBucket: "chat-f11ce.appspot.com",
    messagingSenderId: "561176748732",
    appId: "1:561176748732:web:fb56a5bac2a850e9dc26b9",
    measurementId: "G-ENDXF55P2G"
  };
  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();

