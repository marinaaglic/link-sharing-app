import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { IPlatform } from "../../../components/form/link/linkForm";

export const fetchPlatforms = async (): Promise<IPlatform[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "platforms"));
    const newData: IPlatform[] = querySnapshot.docs.map((doc) => ({
      ...(doc.data() as IPlatform),
      id: doc.id,
    }));
    return newData;
  } catch (error) {
    console.log("Error fetching platforms: ", error);
    return [];
  }
};

export const fetchUserPlatforms = async (
  userId: string
): Promise<IPlatform[]> => {
  try {
    const userLinksRef = collection(db, "users", userId, "links");
    const querySnapshot = await getDocs(userLinksRef);
    const userPlatforms: IPlatform[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as IPlatform[];

    return userPlatforms;
  } catch (error) {
    console.log("Error fetching user platforms", error);
    return [];
  }
};
