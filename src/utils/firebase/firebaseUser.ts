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
import { addDoc, getDoc, collection } from "firebase/firestore";
import { IProfileDetails } from "../../components/form/profile/profileDetails";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";

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
  const filteredDetails = Object.fromEntries(
    Object.entries(profileDetails).filter(([_, value]) => value !== undefined)
  );

  try {
    const userDetailsRef = collection(db, "users", user.uid, "details");
    const docRef = await addDoc(userDetailsRef, filteredDetails);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const details = docSnap.data;
      return {
        ...details,
      } as IProfileDetails;
    } else {
      throw new Error("No such document.");
    }
  } catch (err) {
    console.log("Error saving user details: ", err);
    throw new Error("Failed to save user details.");
  }
}

export async function uploadProfileImage(file: File, userId: string) {
  const imageRef = ref(storage, `profileImages/${userId}/${file.name}`);
  await uploadBytes(imageRef, file);
  const downloadURL = await getDownloadURL(imageRef);
  return downloadURL;
}
