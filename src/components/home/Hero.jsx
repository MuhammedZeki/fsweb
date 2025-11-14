import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Hero = () => {
  return (
    <div
      style={{
        marginTop: "2rem",
      }}
      className=" d-flex items-center justify-between"
    >
      <div className="w-1/2 d-flex-col gap-2">
        <div className="d-flex items-center gap-2">
          <span className="w-24 border border-[#3730A3]"></span>
          <p
            style={{
              padding: "0.75rem 0.80rem",
            }}
            className="font-inter font-medium text-xl text-[#4338CA]"
          >
            Almila Su
          </p>
        </div>
        <div className="d-flex-col gap-8">
          <div className="d-flex-col gap-1 text-[#1F2937] font-inter font-bold text-7xl">
            <p>Creative thinker</p>
            <p>Minimalism lover</p>
          </div>
          <p className="font-inter font-normal text-lg text-[#6B7280]">
            Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
            Developer who to craft solid and scalable frontend products with
            great user experiences. Let’s shake hands with me.
          </p>
          <div className="d-flex items-center gap-4">
            <button
              style={{
                padding: "0.75rem 1rem",
              }}
              className="bg-[#3730A3] hover:bg-[#5952b9] hover:scale-102 transform duration-300 cursor-pointer rounded-lg text-white font-inter font-medium text-lg"
            >
              Hire Me
            </button>
            <button
              style={{
                padding: "0.75rem 1rem",
              }}
              className="border cursor-pointer border-[#3730A3] hover:scale-102 transform duration-300  gap-2 rounded-lg d-flex items-center justify-center"
            >
              <FaGithub className="w-6 h-6 text-[#3730A3]" />
              <span className="font-inter font-medium text-lg text-[#3730A3]">
                Github
              </span>
            </button>
            <button
              style={{
                padding: "0.75rem 1rem",
              }}
              className="border cursor-pointer  border-[#3730A3] hover:scale-102 transform duration-300 gap-2  rounded-lg d-flex items-center justify-center"
            >
              <FaLinkedinIn className="w-6 h-6 text-[#3730A3]" />
              <span className="font-inter font-medium text-lg text-[#3730A3]">
                Linkedin
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "1rem 2rem",
        }}
        className="w-1/2"
      >
        <img src="/pc.png" alt="pc" className="rounded-4xl" />
      </div>
    </div>
  );
};

export default Hero;
