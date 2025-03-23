import { auth, db } from "./firebaseConfig";
import { collection, addDoc, getDoc, deleteDoc, doc } from "firebase/firestore";
import { ILinkData } from "../../components/form/link/linkForm";

export async function addUserLink(linkData: ILinkData) {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User is not logged in!");
  }

  try {
    const userLinksRef = collection(db, "users", user.uid, "links");
    const docRef = await addDoc(userLinksRef, {
      ...linkData,
    });

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const link = docSnap.data();
      return {
        id: docRef.id,
        ...link,
      } as ILinkData;
    } else {
      throw new Error("No such document!");
    }
  } catch (err) {
    console.log("Error adding links: ", err);
    throw new Error("Failed to add a link.");
  }
}

export async function deleteLink(linkId: string) {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User is not logged in!");
  }

  try {
    const linkRef = doc(db, "users", user.uid, "links", linkId);
    console.log("DocRef: ", linkRef);
    await deleteDoc(linkRef);
    console.log(`Successfully deleted link with ID: ${linkId}`);
  } catch (err) {
    console.error("Error deleting link:", err);
    throw new Error("Failed to delete link.");
  }
}
