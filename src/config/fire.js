import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
  apiKey: "AIzaSyC0Kow9rSAK45qgWGWQ4Nt0qyt2rWZqHPI",
  authDomain: "zeta-tvd.firebaseapp.com",
  projectId: "zeta-tvd",
  storageBucket: "zeta-tvd.appspot.com",
  messagingSenderId: "467831195638",
  appId: "1:467831195638:web:941d08983ef86fdbde29d7",
  measurementId: "G-BN1N2464MG"
      };

firebase.initializeApp(config);

export default firebase;