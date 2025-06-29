import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { IProfileDetails } from "../components/form/profile/profileDetails";
import { useAuth } from "./UserAuthContext";
import { fetchUserDetails } from "../utils/firebase/api/queries";

interface IUserDetailsProps {
  children: ReactNode;
}

interface UserDetailsContextType {
  userDetails: IProfileDetails | null;
  setUserDetails: React.Dispatch<React.SetStateAction<IProfileDetails | null>>;
  loading: boolean;
}

export const UserDetailsContext = createContext<
  UserDetailsContextType | undefined
>(undefined);

export const UserDetailsProvider = ({ children }: IUserDetailsProps) => {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState<IProfileDetails | null>(null);
  const [loading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (currentUser) {
      setIsLoading(true);
      fetchUserDetails(currentUser.uid)
        .then((details) => {
          console.log("Fetched user details: ", details);

          setUserDetails(details);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setUserDetails(null);
    }
  }, [currentUser]);

  const value = {
    userDetails,
    setUserDetails,
    loading,
  };

  return (
    <UserDetailsContext.Provider value={value}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export const useUserDetails = (): UserDetailsContextType => {
  const context = useContext(UserDetailsContext);
  if (!context) {
    throw new Error(
      "useUserPlatforms must be used within a UserPlatformsProvider"
    );
  }
  return context;
};
