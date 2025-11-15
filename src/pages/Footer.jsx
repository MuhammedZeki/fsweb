import { useContext } from "react";
import { LanguageContext } from "../hooks/LanguageContext";
import { data } from "../../data";

const Footer = () => {
  const { lang } = useContext(LanguageContext);
  const fetchData = data[lang];
  const { footerSection } = fetchData;
  return (
    <footer className=" flex items-start bg-footer">
      <div
        style={{
          padding: "1rem",
          margin: "1rem auto",
        }}
        className=" flex flex-col gap-12 w-[90%]"
      >
        <div
          style={{ padding: "2rem 0" }}
          className=" flex flex-col gap-2 font-inter font-semibold text-5xl leading-[125%] text-secondary"
        >
          {footerSection.title.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
        <div
          style={{ padding: "2rem 0" }}
          className="lg:flex lg:flex-row lg:items-center lg:justify-between flex flex-col gap-6"
        >
          <div className=" flex items-center gap-2 cursor-pointer">
            👉
            <span className="font-inter font-medium text-xl text-[#AF0C48] underline tracking-[5%]">
              {" "}
              {footerSection.mail}
            </span>
          </div>
          <div className=" flex items-center gap-4 font-inter font-medium text-lg leading-[150%] tracking-[1%] ">
            <span className="text-secondary">{footerSection.links[0]}</span>
            <span className="text-[#00AB6B]">{footerSection.links[1]}</span>
            <span className="text-[#0077B5]">{footerSection.links[2]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
