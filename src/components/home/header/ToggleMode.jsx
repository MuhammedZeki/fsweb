import { useContext } from "react";
import { LanguageContext } from "../../../hooks/LanguageContext";
import { DarkContext } from "../../../hooks/DarkModeContext";

const ToggleMode = () => {
  const { darkMode, changeMode } = useContext(DarkContext);
  const { lang, changeLang } = useContext(LanguageContext);

  return (
    <section className="flex items-center justify-end gap-4 py-3">
      <button
        onClick={() => changeMode(darkMode === "light" ? "dark" : "light")}
        className="flex gap-2 items-center"
      >
        <div className="w-14 h-6 bg-toggle  rounded-2xl relative cursor-pointer">
          <div
            className={`absolute rounded-full w-4 h-4 bg-[#FFE86E] top-1 transition duration-700 ease-in-out ${
              darkMode === "dark" ? "right-2" : "left-2"
            }`}
          ></div>
        </div>
        <span className="font-inter text-tertiary text-sm font-bold tracking-[10%]">
          {darkMode === "dark" ? "Light Mode" : "Dark Mode"}
        </span>
      </button>

      <div className="border h-5 text-secondary"></div>

      <div>
        <button
          onClick={() => changeLang(lang === "en" ? "tr" : "en")}
          className="font-inter text-tertiary transition-colors duration-300 cursor-pointer text-sm font-bold tracking-[10%]"
        >
          {lang === "en" ? "Türkçe" : "English"}
        </button>
      </div>
    </section>
  );
};

export default ToggleMode;
