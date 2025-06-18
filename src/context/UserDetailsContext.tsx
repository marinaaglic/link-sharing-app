import { createContext, useState, useEffect } from "react";
import { IProfileDetails } from "../components/form/profile/profileDetails";
import { useAuth } from "./UserAuthContext";

interface UserDetailsContextType {
  userDetails: IProfileDetails[];
  setUserDetails: React.Dispatch<React.SetStateAction<IProfileDetails[]>>;
  loading: boolean;
}
