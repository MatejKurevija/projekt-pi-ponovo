import { initializeApp } from "firebase/app";
import "firebase/auth";
import firebase from "firebase/app"
import {
	getFirestore,
	setDoc,
	doc,
	deleteDoc,
	getDoc,
	getDocs,
	collection,
	addDoc,
	onSnapshot,
	query,
	where,
	updateDoc,
	arrayUnion,
	arrayRemove,
} from "firebase/firestore";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
	signOut,
	deleteUser,
	sendPasswordResetEmail,
} from "firebase/auth";
import {
	getStorage,
	ref,
	uploadBytes,
	getDownloadURL,
	deleteObject,
	updateMetadata,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC2liUSo-6SoUcBFv9s7_WMbmIlUlOYu5Q",
  authDomain: "projektpi2-a0c85.firebaseapp.com",
  projectId: "projektpi2-a0c85",
  storageBucket: "projektpi2-a0c85.appspot.com",
  messagingSenderId: "523362706862",
  appId: "1:523362706862:web:fde3c1730456e7d626d43f",
  measurementId: "G-31D1RPQ1J0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export {
	app,
	db,
	auth,
	firebase,
	sendPasswordResetEmail,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
	signOut,
	getFirestore,
	setDoc,
	doc,
	deleteDoc,
	getDoc,
	getDocs,
	addDoc,
	collection,
	deleteUser,
	onSnapshot,
	storage,
	ref,
	uploadBytes,
	getDownloadURL,
	query,
	where,
	updateDoc,
	arrayRemove,
	arrayUnion,
	deleteObject,
	updateMetadata,
};
