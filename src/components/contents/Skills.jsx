import { useContext } from "react";
import { LanguageContext } from "../../hooks/LanguageContext";
import { data } from "../../../data";

const Skills = () => {
  const { lang } = useContext(LanguageContext);
  const fetchData = data[lang];
  const { skillsSection } = fetchData;
  return (
    <section id="skills" className="flex flex-col gap-4">
      <span className="font-inter font-semibold text-5xl text-secondary">
        {skillsSection.title}
      </span>
      <div className="lg:flex lg:flex-row lg:gap-20 lg:items-center flex flex-col gap-7 ">
        {skillsSection.skills.map((item, i) => (
          <div key={i} className="flex flex-col gap-6">
            <span className="font-inter font-medium text-3xl text-placeholder">
              {item.sub_title}
            </span>
            <p className="font-inter font-normal text-lg text-tertiary">
              {item.sub_content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
