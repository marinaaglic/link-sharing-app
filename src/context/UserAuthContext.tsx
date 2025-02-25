import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signOutUser, userStateListener } from "../utils/firebase/firebaseUser";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IUserAuthContextProps {
  children: ReactNode;
}

export const UserAuthContext = createContext({
  currentUser: {} as User | null,
  setCurrentUser: (_user: User) => {},
  signOut: () => {},
});

export const UserAuthProvider = ({ children }: IUserAuthContextProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      if (user) {
        console.log("User state changed:", user);
        setCurrentUser(user);
      } else {
        console.log("User logged out.");
        setCurrentUser(null);
      }
    });
    return unsubscribe;
  }, [setCurrentUser]);

  const signOut = () => {
    signOutUser();
    setCurrentUser(null);
    navigate("/");
  };
  console.log("Current user:", currentUser);
  const value = {
    currentUser,
    setCurrentUser,
    signOut,
  };
  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(UserAuthContext);
};
