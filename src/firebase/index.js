import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQtEo3Nigy9fXNCUEY1Y1JOPHTOXeL2rg",
  authDomain: "task-managemant.firebaseapp.com",
  projectId: "task-managemant",
  storageBucket: "task-managemant.appspot.com",
  messagingSenderId: "95236331148",
  appId: "1:95236331148:web:e3336830496196e5680da9",
};

// init app
firebase.initializeApp(firebaseConfig);

// init services
const projectFireStore = firebase.firestore();

export { projectFireStore };
