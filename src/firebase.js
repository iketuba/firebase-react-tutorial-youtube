import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5qqNC7mSbx688swOEC5gMG5K7d4ecHmw",
  authDomain: "fir-react-b8b94.firebaseapp.com",
  projectId: "fir-react-b8b94",
  storageBucket: "fir-react-b8b94.appspot.com",
  messagingSenderId: "412528580351",
  appId: "1:412528580351:web:307b3eea528d6b66019eca",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
