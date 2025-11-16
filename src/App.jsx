import { Route, Routes } from "react-router-dom";
import "./App.css";
import Api from "./api/Api";
import Main from "./pages/Main";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </>
  );
};

export default App;
