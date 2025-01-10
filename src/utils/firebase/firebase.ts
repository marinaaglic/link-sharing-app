import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  NextOrObserver,
  User,
} from "firebase/auth";

import { auth } from "../../utils/firebase/firebaseConfig";

export async function CreateNewAccount(email: string, password: string) {
  if (!email && !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function SignIn(email: string, password: string) {
  if (!email && !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export function userStateListener(callback: NextOrObserver<User>) {
  return onAuthStateChanged(auth, callback);
}

export async function SignOutUser() {
  await signOut(auth);
}
