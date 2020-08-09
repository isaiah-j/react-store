import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyAslz2UuXrkURW5J2ceS-5_LGeFVmZEjYo",
    authDomain: "react-store-94cd9.firebaseapp.com",
    databaseURL: "https://react-store-94cd9.firebaseio.com",
    projectId: "react-store-94cd9",
    storageBucket: "react-store-94cd9.appspot.com",
    messagingSenderId: "346554575314",
    appId: "1:346554575314:web:d6ed4d64d9402d1578c00b",
    measurementId: "G-80HGY1KK0W"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    
    const userRef = firestore.doc(`/users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error)
        }

    }
    return userRef
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })



export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase