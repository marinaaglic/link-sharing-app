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
  } catch (err) {
    console.log("Error fetching platforms: ", err);
    return [];
  }
};
