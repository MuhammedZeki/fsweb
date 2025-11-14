import React from "react";

const Navbar = () => {
  return (
    <div className="d-flex items-center justify-between">
      <div className="bg-[#EEEBFF] rotate-30 w-16 h-16 rounded-full d-flex items-center justify-center text-[#7B61FF] font-inter font-semibold text-2xl">
        A
      </div>
      <div className="d-flex items-center gap-2">
        <button
          style={{
            padding: "0.75rem 1rem",
          }}
          className="font-inter cursor-pointer font-medium text-lg d-flex items-center justify-center hover:text-[#555a63] text-[#6B7280]"
        >
          Skills
        </button>
        <button
          style={{
            padding: "0.75rem 1rem",
          }}
          className="font-inter cursor-pointer font-medium text-lg d-flex items-center justify-center hover:text-[#555a63] text-[#6B7280]"
        >
          Projects
        </button>
        <button
          style={{
            padding: "0.75rem 1rem",
          }}
          className="font-inter cursor-pointer font-medium text-lg d-flex items-center justify-center border hover:text-[#221c74] border-[#3730A3] rounded-lg text-[#3730A3]"
        >
          Hire me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
