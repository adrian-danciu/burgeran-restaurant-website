import ConditionalRendering from "../utils/ConditionalRendering";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MobileNavbar } from ".";

import logo from "../assets/logo.png";

import { navLinks } from "../utils/navLinks";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 819);
  console.log(isMobile);

  function handleResize() {
    setIsMobile(window.innerWidth <= 819);
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
        <nav className="bg-[#0f0e17] h-[70px] flex flex-row justify-between items-center w-full px-10">
          <div className="flex flex-row justify-center items-center gap-5">
            <img src={logo} className="w-10 h-10" />
            <p className="font-subtitle text-headline text-2xl">Burgeran</p>
          </div>
          <ul className="flex flex-row justify-center items-center gap-20 text-headline font-semibold font-title">
            {navLinks.map((link) => (
              <li className="hover:text-primary">
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="bg-primary text-background w-full h-[30px] flex flex-row justify-between items-center px-10 font-subtitle">
          <p>Free delivery on all orders over 50$</p>

          <div className="flex flex-row justify-center items-center gap-10">
            <p>Call us at: 1293732193127</p>
            <p>Open: 10:00 - 23:00</p>
            <p>Address: 1234 Street, City</p>
          </div>
        </div>
      </ConditionalRendering>
    </div>
  );
};

export default Navbar;
