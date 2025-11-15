import React, { useContext } from "react";
import { LanguageContext } from "../../../hooks/LanguageContext";

const Navbar = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="flex items-center justify-between">
      <div className="bg-logo rotate-30 w-16 h-16 rounded-full flex items-center justify-center text-placeholder font-inter font-semibold text-2xl">
        A
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            padding: "0.75rem 1rem",
          }}
          className="font-inter cursor-pointer font-medium text-lg flex items-center justify-center hover:text-[#555a63] text-primary"
        >
          {lang === "en" ? "Skills" : "Yetenekler"}
        </button>
        <button
          onClick={() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            padding: "0.75rem 1rem",
          }}
          className="font-inter cursor-pointer font-medium text-lg flex items-center justify-center hover:text-[#555a63] text-primary "
        >
          {lang === "en" ? "Projects" : "Projeler"}
        </button>
        <button
          style={{
            padding: "0.75rem 1rem",
          }}
          className="font-inter cursor-pointer font-medium text-lg flex items-center justify-center border hover:text-[#221c74] border-color rounded-lg text-primary"
        >
          {lang === "en" ? "Hire me" : "Beni işe al"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
