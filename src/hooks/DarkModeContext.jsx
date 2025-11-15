import { createContext, useEffect, useState } from "react";

export const DarkContext = createContext();

export const DarkContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode("light");
    }
  }, []);

  const changeMode = (val) => {
    setDarkMode(val);
    localStorage.setItem("theme", val);

    if (val === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <DarkContext.Provider value={{ darkMode, changeMode }}>
      {children}
    </DarkContext.Provider>
  );
};
