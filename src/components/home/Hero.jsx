import { useContext, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { data, icons } from "../../../data";
import { LanguageContext } from "../../hooks/LanguageContext";
const Hero = () => {
  const { lang } = useContext(LanguageContext);
  const fetchData = data[lang];
  const { heroSection, skillsSection, ProjectsSection, FooterSection } =
    fetchData;
  return (
    <div
      style={{
        marginTop: "2rem",
      }}
      className=" lg:flex lg:flex-row lg:items-center lg:justify-between flex-col gap-4"
    >
      <div className="lg:w-1/2 lg:flex-col gap-2 w-full">
        <div className="flex lg:flex-row items-center gap-2">
          <span className="w-24 border border-[#3730A3]"></span>
          <p
            style={{
              padding: "0.75rem 0.80rem",
            }}
            className="font-inter font-medium text-xl text-[#4338CA]"
          >
            {heroSection.name}
          </p>
        </div>
        <div className="flex-col gap-8">
          <div className="flex-col gap-1 text-[#1F2937] font-inter font-bold text-7xl">
            {heroSection.greeting.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <p className="font-inter font-normal text-lg text-[#6B7280]">
            {heroSection.intro}
          </p>
          <div className="flex lg:flex-row items-center gap-4">
            <button
              style={{
                padding: "0.75rem 1rem",
              }}
              className="bg-[#3730A3] hover:bg-[#5952b9] hover:scale-102 transform duration-300 cursor-pointer rounded-lg text-white font-inter font-medium text-lg"
            >
              Hire Me
            </button>
            {heroSection.socials.map((item, i) => {
              const Icon = icons[item.logo];
              return (
                <button
                  key={i}
                  style={{
                    padding: "0.75rem 1rem",
                  }}
                  className="border cursor-pointer border-[#3730A3] hover:scale-102 transform duration-300  gap-2 rounded-lg d-flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 text-[#3730A3]" />
                  <span className="font-inter font-medium text-lg text-[#3730A3]">
                    {item.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "1rem 2rem",
        }}
        className="lg:w-1/2 w-full"
      >
        <img src={heroSection.img} alt="pc" className="rounded-4xl" />
      </div>
    </div>
  );
};

export default Hero;
