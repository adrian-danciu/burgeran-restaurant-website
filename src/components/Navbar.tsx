import ConditionalRendering from "./../utils/ConditionalRendering";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { MobileNavbar } from ".";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  console.log(isMobile);

  function handleResize() {
    setIsMobile(window.innerWidth <= 768);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <div>
      <ConditionalRendering condition={isMobile}>
        <MobileNavbar />
      </ConditionalRendering>
      <ConditionalRendering condition={!isMobile}>
        <div>Navbar</div>
      </ConditionalRendering>
    </div>
  );
};

export default Navbar;
