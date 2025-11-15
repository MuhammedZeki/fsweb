import { useContext } from "react";
import { LanguageContext } from "../../hooks/LanguageContext";
import { data } from "../../../data";

const Projects = () => {
  const { lang } = useContext(LanguageContext);
  const fetchData = data[lang];
  const { projectsSection } = fetchData;
  return (
    <div
      style={{
        padding: "2rem 0",
        marginTop: "3rem",
      }}
      className="border-t border-[#BAB2E7] flex-col gap-6"
    >
      <span className="font-inter font-semibold text-5xl text-[#1F2937]">
        {projectsSection.title}
      </span>

      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between gap-4 flex-col">
        {projectsSection.projects.map((project, i) => (
          <div key={i} className="max-w-90 flex-col gap-2">
            <div>
              <img src={project.img} className="w-80" alt="resim" />
            </div>
            <span className="font-inter font-medium text-3xl text-[#4338CA]">
              {project.sub_title}
            </span>
            <p className="font-inter font-normal text-sm text-[#6B7280]">
              {project.sub_content}
            </p>
            <div className="d-flex items-center gap-4">
              {project.library &&
                project.library.map((lib, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "7px 1rem",
                    }}
                    className="border border-[#3730A3] rounded-sm text-[#3730A3] font-inter font-medium text-sm"
                  >
                    {lib}
                  </div>
                ))}
            </div>
            <div className="d-flex items-center justify-between ">
              {project.links &&
                project.links.map((link, index) => (
                  <button
                    key={index}
                    className="underline text-[#3730A3] cursor-pointer font-inter font-medium text-lg leading-4"
                  >
                    {link}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
