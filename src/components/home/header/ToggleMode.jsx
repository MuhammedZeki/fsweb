import { useContext } from "react";
import { LanguageContext } from "../../../hooks/LanguageContext";

const ToggleMode = () => {
  const { lang, changeLang } = useContext(LanguageContext);
  return (
    <section
      style={{ padding: "0.75rem 0" }}
      className="flex items-center justify-end gap-4 "
    >
      <button className="d-flex gap-2 items-center ">
        <div className="w-14 h-6 bg-[#4731D3] rounded-2xl relative cursor-pointer">
          <div className="absolute rounded-full w-4 h-4 bg-[#FFE86E] top-1 right-2"></div>
        </div>
        <span className="font-inter text-[#777777] text-sm font-bold tracking-[10%]">
          DARK MODE
        </span>
      </button>
      <div className="border border-[#777777] h-5"></div>
      <div>
        <button
          onClick={() => changeLang(lang === "en" ? "tr" : "en")}
          className="font-inter text-[#4731D3] hover:text-[#7969e6] transform duration-300 cursor-pointer text-sm font-bold tracking-[10%]"
        >
          {lang === "en" ? "Türkçe" : "English"}
        </button>
      </div>
    </section>
  );
};

export default ToggleMode;
