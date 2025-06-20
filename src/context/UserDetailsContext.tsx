import { createContext, useState, useEffect, ReactNode } from "react";
import { IProfileDetails } from "../components/form/profile/profileDetails";
import { useAuth } from "./UserAuthContext";

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
};
