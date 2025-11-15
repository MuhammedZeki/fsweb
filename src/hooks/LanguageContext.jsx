import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const getLang = localStorage.getItem("lang");
    if (getLang) setLang(getLang);
  }, []);
  const changeLang = (val) => {
    setLang(val);
    localStorage.setItem("lang", val);
  };
  return (
    <LanguageContext.Provider value={{ lang, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
