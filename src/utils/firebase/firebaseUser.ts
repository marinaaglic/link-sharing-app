import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  NextOrObserver,
  User,
} from "firebase/auth";

import { auth } from "./firebaseConfig";

export async function createNewAccount(email: string, password: string) {
  if (!email && !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signIn(email: string, password: string) {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export function userStateListener(callback: NextOrObserver<User>) {
  return onAuthStateChanged(auth, callback);
}

export async function signOutUser() {
  await signOut(auth);
}
