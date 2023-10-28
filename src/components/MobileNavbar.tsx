import { useEffect, useState, useRef } from "react";
import { navLinks } from "../utils/navLinks";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import mobileMenu from "../assets/icons/bars-solid.svg";
import { useLocation } from "react-router-dom";

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    handleClose();
  }, [location.pathname]);

  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      if (navRef.current) {
        // Check if the click is directly on the fullscreen-nav or outside it
        if (
          event.target === navRef.current ||
          !navRef.current.contains(event.target as Node)
        ) {
          handleClose();
        }
      }
    };

    window.addEventListener("mousedown", handleWindowClick);

    return () => {
      window.removeEventListener("mousedown", handleWindowClick);
    };
  }, []);

  return (
    <div>
      <div className="bg-primary flex flex-row justify-between items-center px-5 h-[53px]">
        <div className="flex flex-row justify-center items-center gap-2">
          <img src={logo} className="w-10 h-10" />
          <p className="font-subtitle text-background text-2xl">Burgeran</p>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="h-50 w-50">
          <img src={mobileMenu} alt="mobile-menu-icon" className="w-5 h-5" />
        </button>
      </div>
      {isOpen && (
        <div className="fullscreen-nav p-10" ref={navRef}>
          <button onClick={handleClose} className="close-btn">
            X
          </button>
          <div className="flex flex-col justify-center items-center gap-10 w-full">
            <ul className="w-full">
              {navLinks.map((link) => (
                <li
                  key={link.link}
                  className="w-full bg-background  text-primary text-center rounded-lg border-[2px] border-primary"
                >
                  <Link
                    to={link.link}
                    onClick={handleClose}
                    className="text-lg font-title"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col justify-center items-center gap-2 font-subtitle text-primary text-lg">
              <p>Call us at: 1293732193127</p>
              <p>Open: 10:00 - 23:00</p>
              <p>Address: 1234 Street, City</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <img src={logo} className="w-20 h-20" />
              <p className="font-subtitle text-headline text-3xl">Burgeran</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
