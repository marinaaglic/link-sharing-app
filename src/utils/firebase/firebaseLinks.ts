import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ILinkFormFields } from "../../components/form/link/linkForm";
import { useAuth } from "../../context/UserAuthContext";

export async function addUserLink(linkData: ILinkFormFields) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    throw new Error("User is not logged in!");
  }

  try {
    const userLinksRef = collection(db, "users", currentUser.uid, "links");
    await addDoc(userLinksRef, {
      ...linkData,
    });

    console.log("Link successfully added.");
  } catch (err) {
    console.log("Error adding links: ", err);
    throw new Error("Failed to add a link.");
  }
}
