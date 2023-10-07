// import firebase from "firebase/app";
// import "firebase/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyDUvFeXMeFvcm5joSUOwQxuazL_i9q9fyo",
    authDomain: "blogging-website-efe0d.firebaseapp.com",
    projectId: "blogging-website-efe0d",
    storageBucket: "blogging-website-efe0d.appspot.com",
    messagingSenderId: "949217170589",
    appId: "1:949217170589:web:b7fa92c0fd6e427ed17074"
  };

  // Initialize Firebase
// Wait for the Firebase SDK to be fully loaded, then initialize the app
firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();
export default db;
  

