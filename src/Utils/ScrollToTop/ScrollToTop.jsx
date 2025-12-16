import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollProgress = (scrollTop / docHeight) * 100;
      setScrollPercent(scrollProgress);

      setShow(scrollTop > 200); // show button after 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    show && (
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{
          background: `conic-gradient(#22c55e ${scrollPercent}%, #1f2937 ${scrollPercent}%)`,
        }}
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
