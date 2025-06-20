import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ILinkData, IPlatform } from "../../../components/form/link/linkForm";
import { IProfileDetails } from "../../../components/form/profile/profileDetails";

export async function fetchPlatforms(): Promise<IPlatform[]> {
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
}

export async function fetchUserPlatforms(userId: string): Promise<ILinkData[]> {
  try {
    const userLinksRef = collection(db, "users", userId, "links");
    const querySnapshot = await getDocs(userLinksRef);
    const userPlatforms: ILinkData[] = querySnapshot.docs.map((doc) => ({
      docId: doc.id,
      id: doc.id,
      platform: doc.data().platform,
      url: doc.data().url,
    })) as ILinkData[];

    console.log("User platforms:", userPlatforms);

    return userPlatforms;
  } catch (error) {
    console.log("Error fetching user platforms", error);
    return [];
  }
}

export async function fetchUserDetails(
  userId: string
): Promise<IProfileDetails[]> {
  try {
    const userDetailsRef = collection(db, "users", userId, "details");
    const querySnapshot = await getDocs(userDetailsRef);
    const userDetails: IProfileDetails[] = querySnapshot.docs.map((doc) => ({
      firstName: doc.data().firstName,
      lastName: doc.data().lastName,
      email: doc.data().email,
    })) as IProfileDetails[];

    console.log(userDetails);

    return userDetails;
  } catch (error) {
    console.log("Error fetching user platforms", error);
    return [];
  }
}
