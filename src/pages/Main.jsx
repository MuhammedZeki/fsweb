import Home from "./Home";
import Content from "./Content";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <div
        style={{
          padding: "1rem",
          margin: "0 auto",
        }}
        className=" lg:w-[80%] flex flex-col gap-8 w-full"
      >
        <Home />
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default Main;
