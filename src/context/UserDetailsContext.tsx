import { createContext, useState, useEffect, ReactNode } from "react";
import { IProfileDetails } from "../components/form/profile/profileDetails";
import { useAuth } from "./UserAuthContext";
import { fetchUserDetails } from "../utils/firebase/api/queries";

interface IUserDetailsProps {
  children: ReactNode;
}

interface UserDetailsContextType {
  userDetails: IProfileDetails[];
  setUserDetails: React.Dispatch<React.SetStateAction<IProfileDetails[]>>;
  loading: boolean;
}

export const UserDetailsContext = createContext<
  UserDetailsContextType | undefined
>(undefined);

export const UserDetailsProvider = ({ children }: IUserDetailsProps) => {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState<IProfileDetails[]>([]);
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
      setUserDetails([]);
    }
  }, [currentUser]);
};
