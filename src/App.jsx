import "./App.css";
import Content from "./pages/Content";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <div
        style={{
          padding: "1rem",
          margin: "0 auto",
        }}
        className=" lg:w-[80%] d-flex-col gap-8 w-full"
      >
        <Home />
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default App;
