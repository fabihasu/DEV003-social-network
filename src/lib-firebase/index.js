/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from 'firebase/app';
import {
  getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect,
} from 'firebase/auth';
// import { onNavigate } from '../router/utils';

const firebaseConfig = {
  apiKey: 'AIzaSyA1E6v0tl-VMKi90Oqck7ywqNNbgBj6lBE',
  authDomain: 'beat-1-29ed1.firebaseapp.com',
  projectId: 'beat-1-29ed1',
  storageBucket: 'beat-1-29ed1.appspot.com',
  messagingSenderId: '95473403789',
  appId: '1:95473403789:web:c3d43d3ca3251e2a029fc4',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

// función de autenticación
const auth = getAuth();
// eslint-disable-next-line max-len
export const signUpFirebase = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// función de google provider
export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
};

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     onNavigate('/home');
//   } else {
//     onNavigate('/');
//   }
// });
