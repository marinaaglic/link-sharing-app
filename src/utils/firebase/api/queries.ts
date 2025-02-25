import { collection, getDocs } from 'firebase/firestore';
import { IPlatform } from '../../../components/form/link/linkForm';
import { db } from '../firebaseConfig';

export const fetchPlatforms = async (): Promise<IPlatform[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'platforms'));
    const newData: IPlatform[] = querySnapshot.docs.map((doc) => ({
      ...(doc.data() as IPlatform),
      id: doc.id,
    }));
    return newData;
  } catch (err) {
    console.log('Error fetching platforms: ', err);
    return [];
  }
};
