import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDW1i9DLLFu2FgwuniMRULetN58HC1QAB8",
  authDomain: "cardmaker-b269d.firebaseapp.com",
  databaseURL: "https://cardmaker-b269d-default-rtdb.firebaseio.com",
  projectId: "cardmaker-b269d",
};
const filebaseApp = firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const firebaseData = filebaseApp.database();
export const firebaseAuth = filebaseApp.auth();
