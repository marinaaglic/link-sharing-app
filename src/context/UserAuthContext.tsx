import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signOutUser, userStateListener } from "../utils/firebase/firebase";
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
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, [setCurrentUser]);

  const signOut = () => {
    signOutUser();
    setCurrentUser(null);
    navigate("/");
  };

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
