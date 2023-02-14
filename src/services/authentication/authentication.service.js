import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const loginRequest = async (auth, email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export const registerRequest = async (auth, email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const signOutRequest = async (auth) => await signOut(auth);
