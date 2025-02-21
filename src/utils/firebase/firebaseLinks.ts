import { auth, db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ILinkFormFields } from "../../components/form/link/linkForm";

export async function addUserLink(linkData: ILinkFormFields) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User is not logged in!");
  }

  try {
    const userLinksRef = collection(db, "users", user.uid, "links");
    await addDoc(userLinksRef, {
      ...linkData,
    });

    console.log("Link successfully added.");
  } catch (err) {
    console.log("Error adding links: ", err);
    throw new Error("Failed to add a link.");
  }
}
