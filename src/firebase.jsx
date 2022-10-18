import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx5jyJBZGHksXE2Zru77tVsrDDcqFYEMM",
  authDomain: "video-74cca.firebaseapp.com",
  projectId: "video-74cca",
  storageBucket: "video-74cca.appspot.com",
  messagingSenderId: "525854170486",
  appId: "1:525854170486:web:6b0942248c0acfc0fdae57",
  measurementId: "G-47JNTW3X1R",
};
firebase.initializeApp(firebaseConfig);

export default firebase.auth();
