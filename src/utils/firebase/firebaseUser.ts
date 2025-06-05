import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  NextOrObserver,
  User,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

import { auth, db } from "./firebaseConfig";
import { collection } from "firebase/firestore";
import { IProfileDetails } from "../../components/form/profile/profileDetails";

export async function createNewAccount(email: string, password: string) {
  if (!email && !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signIn(email: string, password: string) {
  if (!email || !password) return;

  try {
    await setPersistence(auth, browserLocalPersistence);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential;
  } catch (error) {
    console.error("Login failed:", error);
  }
}

export function userStateListener(callback: NextOrObserver<User>) {
  return onAuthStateChanged(auth, callback);
}

export async function signOutUser() {
  await signOut(auth);
}

export async function saveUserDetails(profileDetails: IProfileDetails) {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User is not logged in.");
  }

  try {
    const userLinksRef = collection(db, "users", user.uid, "details");
  } catch (err) {}
}
