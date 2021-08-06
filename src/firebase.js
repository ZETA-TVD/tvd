import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC0Kow9rSAK45qgWGWQ4Nt0qyt2rWZqHPI",
    authDomain: "zeta-tvd.firebaseapp.com",
    projectId: "zeta-tvd",
    storageBucket: "zeta-tvd.appspot.com",
    messagingSenderId: "467831195638",
    appId: "1:467831195638:web:0764928e1f7df9f7de29d7",
    measurementId: "G-MQM2GM6NLD"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;