import "./App.css";
import Content from "./pages/Content";
import Home from "./pages/Home";
const App = () => {
  return (
    <div
      style={{
        padding: "1rem",
        margin: "0 auto",
      }}
      className=" w-[80%] d-flex-col gap-8"
    >
      <Home />
      <Content />
    </div>
  );
};

export default App;
