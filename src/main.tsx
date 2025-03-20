import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserAuthProvider } from "./context/UserAuthContext.tsx";
import { UserPlatformsProvider } from "./context/UserPlatformsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserAuthProvider>
        <UserPlatformsProvider>
          <App />
        </UserPlatformsProvider>
      </UserAuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
