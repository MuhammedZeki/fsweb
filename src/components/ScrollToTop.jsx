import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        style={{
          padding: "0.75rem",
        }}
        onClick={scrollToTop}
        className="fixed bottom-5 cursor-pointer right-5 rounded-full bg-[#596cbb] text-white shadow-lg hover:bg-[#6779c2] transition"
      >
        <FaChevronUp className="text-white h-6 w-6" />
      </button>
    )
  );
};

export default ScrollToTop;
