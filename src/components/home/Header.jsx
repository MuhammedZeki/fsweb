import ToggleMode from "./header/ToggleMode";
import Navbar from "./header/Navbar";

const Header = () => {
  return (
    <div className="border border-black d-flex-col gap-1 items-end">
      <div className="w-[20%]">
        <ToggleMode />
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
