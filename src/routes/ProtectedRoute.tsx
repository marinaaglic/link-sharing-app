import { Outlet, useLocation, Navigate } from "react-router-dom";
import { auth } from "../utils/firebase/firebaseConfig";

export default function ProtectedRoute() {
  const location = useLocation();

  return auth.currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
