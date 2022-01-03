
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDZ2u7gtcSmdqzhnGDOTL3b63RZ8FbB3Ds",
    authDomain: "school-d0ce7.firebaseapp.com",
    projectId: "school-d0ce7",
    storageBucket: "school-d0ce7.appspot.com",
    messagingSenderId: "44383800037",
    appId: "1:44383800037:web:f507505f2fa0dd1604e20c"
});



export const auth = getAuth(firebaseApp);
// export const googleAuthProvider = new auth.GoogleAuthProvider();