const Footer = () => {
  return (
    <footer className="d-flex items-start   bg-[#F9F9F9]">
      <div
        style={{
          padding: "1rem",
          margin: "1rem auto",
        }}
        className="d-flex-col gap-12 w-[90%]"
      >
        <div
          style={{ padding: "2rem 0" }}
          className="d-flex-col gap-2 font-inter font-semibold text-5xl leading-[125%] text-[#1F2937]"
        >
          <p>Let’s work together on</p>
          <p>your next product.</p>
        </div>
        <div
          style={{ padding: "2rem 0" }}
          className="d-flex items-center justify-between"
        >
          <div className="d-flex items-center gap-2 cursor-pointer">
            👉
            <span className="font-inter font-medium text-xl text-[#AF0C48] underline tracking-[5%]">
              {" "}
              almilasucode@gmail.com
            </span>
          </div>
          <div className="d-flex items-center gap-4 font-inter font-medium text-lg leading-[150%] tracking-[1%] ">
            <span className="text-[#0A0A14]">Personal Blog</span>
            <span className="text-[#00AB6B]">Github</span>
            <span className="text-[#0077B5]">Linkedin</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
