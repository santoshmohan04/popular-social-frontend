// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import { getFirestore } from "firebase/firestore"; // for cloud firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMoHKIAJELxvJ3OnZ3Tq2AxwRJqG735qY",
  authDomain: "popular-social-mern-ee655.firebaseapp.com",
  projectId: "popular-social-mern-ee655",
  storageBucket: "popular-social-mern-ee655.appspot.com",
  messagingSenderId: "441958122780",
  appId: "1:441958122780:web:82e97489e8ff63dc3866d9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup };
export default db;
