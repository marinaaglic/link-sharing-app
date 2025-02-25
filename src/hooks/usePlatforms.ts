import { useEffect, useState } from "react";
import { IPlatform } from "../components/form/link/linkForm";
import { fetchPlatforms } from "../utils/firebase/api/queries";

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<IPlatform[]>([]);
  useEffect(() => {
    const fetchAndSetPlatforms = async () => {
      try {
        const fetchedPlatforms: IPlatform[] = await fetchPlatforms();
        setPlatforms(fetchedPlatforms);
      } catch (err) {
        console.log("Data could not be fetched: ", err);
      }
    };
    fetchAndSetPlatforms();
  }, []);

  return platforms;
};

export default usePlatforms;
