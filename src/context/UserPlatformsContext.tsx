import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { fetchUserPlatforms } from "../utils/firebase/api/queries";
import { auth } from "../utils/firebase/firebaseConfig";
import { IPlatform } from "../components/form/link/linkForm";

interface IUserPlatformsProps {
  children: ReactNode;
}

interface UserPlatformsContextType {
  userPlatforms: IPlatform[];
  setUserPlatforms: React.Dispatch<React.SetStateAction<IPlatform[]>>;
}

export const UserPlatformsContext = createContext<
  UserPlatformsContextType | undefined
>(undefined);

export const UserPlatformsProvider = ({ children }: IUserPlatformsProps) => {
  const [userPlatforms, setUserPlatforms] = useState<IPlatform[]>([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      fetchUserPlatforms(user.uid).then((platforms) => {
        setUserPlatforms(platforms);
      });
    }
  }, []);

  const value = {
    userPlatforms,
    setUserPlatforms,
  };

  return (
    <UserPlatformsContext.Provider value={value}>
      {children}
    </UserPlatformsContext.Provider>
  );
};

export const useUserPlatforms = (): UserPlatformsContextType => {
  const context = useContext(UserPlatformsContext);
  if (!context) {
    throw new Error(
      "useUserPlatforms must be used within a UserPlatformsProvider"
    );
  }
  return context;
};
