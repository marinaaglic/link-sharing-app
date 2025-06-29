import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserAuthProvider } from "./context/UserAuthContext.tsx";
import { UserPlatformsProvider } from "./context/UserPlatformsContext.tsx";
import { UserDetailsProvider } from "./context/UserDetailsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserAuthProvider>
        <UserPlatformsProvider>
          <UserDetailsProvider>
            <App />
          </UserDetailsProvider>
        </UserPlatformsProvider>
      </UserAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
