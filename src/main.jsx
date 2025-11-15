import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageContextProvider } from "./hooks/LanguageContext.jsx";
import { DarkContextProvider } from "./hooks/DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <DarkContextProvider>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </DarkContextProvider>
);
