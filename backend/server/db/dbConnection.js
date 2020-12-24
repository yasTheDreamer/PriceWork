import { firebaseConfig } from "../config/dbConfig";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

// database setup
export default firebase;
