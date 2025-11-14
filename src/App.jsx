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
      className="border w-[90%] border-black"
    >
      <Home />
      <Content />
    </div>
  );
};

export default App;
