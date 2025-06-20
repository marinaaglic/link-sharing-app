import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { fetchUserPlatforms } from "../utils/firebase/api/queries";
import { ILinkData } from "../components/form/link/linkForm";
import { useAuth } from "./UserAuthContext";

interface IUserPlatformsProps {
  children: ReactNode;
}

interface UserPlatformsContextType {
  userPlatforms: ILinkData[];
  setUserPlatforms: React.Dispatch<React.SetStateAction<ILinkData[]>>;
  loading: boolean;
}

export const UserPlatformsContext = createContext<
  UserPlatformsContextType | undefined
>(undefined);

export const UserPlatformsProvider = ({ children }: IUserPlatformsProps) => {
  const { currentUser } = useAuth();
  const [userPlatforms, setUserPlatforms] = useState<ILinkData[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("Current user:", currentUser);

    if (currentUser) {
      setIsLoading(true);
      fetchUserPlatforms(currentUser.uid)
        .then((platforms) => {
          setUserPlatforms(platforms);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setUserPlatforms([]);
    }
  }, [currentUser]);

  const value = {
    userPlatforms,
    setUserPlatforms,
    loading,
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
