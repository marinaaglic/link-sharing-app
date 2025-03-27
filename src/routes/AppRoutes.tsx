import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import RegistrationPage from "../pages/registration/RegistrationPage";
import LinksPage from "../pages/links/LinksPage";
import ProtectedRoute from "./ProtectedRoute";
import ProfileDetailsPage from "../pages/profile/ProfileDetails";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/links" element={<LinksPage />} />
        </Route>
        <Route element={<ProtectedRoute/>}>
          <Route path="/profile-details" element={<ProfileDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}
