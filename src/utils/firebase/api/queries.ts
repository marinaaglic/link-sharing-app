import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ILinkData, IPlatform } from "../../../components/form/link/linkForm";

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
  userId: string,
): Promise<ILinkData[]> => {
  try {
    const userLinksRef = collection(db, "users", userId, "links");
    const querySnapshot = await getDocs(userLinksRef);
    const userPlatforms: ILinkData[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ILinkData[];

    console.log("User platforms:", userPlatforms);

    return userPlatforms;
  } catch (error) {
    console.log("Error fetching user platforms", error);
    return [];
  }
};
