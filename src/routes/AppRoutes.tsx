import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import RegistrationPage from "../pages/registration/RegistrationPage";
import LinksPage from "../pages/links/LinksPage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/links" element={<LinksPage />} />
      </Routes>
    </>
  );
}
