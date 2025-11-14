import Profile from "../components/contents/Profile";
import Projects from "../components/contents/Projects";
import Skills from "../components/contents/Skills";

const Content = () => {
  return (
    <div
      style={{
        margin: "2rem 0",
      }}
      className="d-flex-col gap-8"
    >
      <Skills />
      <Profile />
      <Projects />
    </div>
  );
};

export default Content;
