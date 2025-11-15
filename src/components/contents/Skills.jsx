import { useContext } from "react";
import { LanguageContext } from "../../hooks/LanguageContext";
import { data } from "../../../data";

const Skills = () => {
  const { lang } = useContext(LanguageContext);
  const fetchData = data[lang];
  const { skillsSection } = fetchData;
  return (
    <section className="flex-col lg:gap-12">
      <span className="font-inter font-semibold text-5xl text-[#1F2937]">
        {skillsSection.title}
      </span>
      <div className="lg:flex lg:flex-row lg:gap-20 lg:items-center flex-col gap-7 ">
        {skillsSection.skills.map((item, i) => (
          <div key={i} className="flex-col  gap-6">
            <span className="font-inter font-medium text-3xl text-[#4338CA]">
              {item.sub_title}
            </span>
            <p className="font-inter font-normal text-sm text-[#6B7280]">
              {item.sub_content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
