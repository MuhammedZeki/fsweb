import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageContextProvider } from "./hooks/LanguageContext.jsx";
import { DarkContextProvider } from "./hooks/DarkModeContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Bounce, ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <DarkContextProvider>
    <LanguageContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </Router>
      </QueryClientProvider>
    </LanguageContextProvider>
  </DarkContextProvider>
);
