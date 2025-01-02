import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import RegistrationPage from "../pages/registration/RegistrationPage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </>
  );
}
