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

export const createuserProfileDocument = async(userAuth, otherData)=>{
        if(!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        console.log(userAuth);
        const snapShot = await userRef.get();
        if(!snapShot.exists){
               
                const { name , email, phone_no } = userAuth;
                const createdAt = new Date();
                try{
                        await userRef.set({
                                name,
                                email,
                                phone_no,
                                createdAt,
                                ...otherData
                        });

                }catch(error){
                console.log('error creating user', error.message);

                }
        }
        return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInwithGoogle =()=>auth.signInWithPopup(provider);
export default firebase;