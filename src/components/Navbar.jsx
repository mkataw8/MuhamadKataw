import React, { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [nav, setNav] = useState(true);
  const [click, setClick] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const closeMenu = () => setClick(false);
  return (
    <div className=" pt-10 flex flex-col justify-center items-center ">
      <div className="w-full md:w-10/12 flex items-center">
        <div className="w-full flex justify-center items-center text-white font-bold text-xl md:text-2xl">
          <h1>Muhamad Kataw</h1>
        </div>

        <div className="ml-auto pr-4 md:pr-36">
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <ul
            className={`flex flex-col md:flex-row md:space-x-3 font-bold text-white text-lg md:text-xl ${
              isMenuOpen ? "block" : "hidden"
            } md:flex`}
          >
            <li className="hover:text-sky-200 mb-2 md:mb-0 cursor-pointer">
              <Link
                to="aboutme"
                spy={true}
                smooth={true}
                offset={1}
                duration={950}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="hover:text-sky-200 mb-2 md:mb-0 cursor-pointer">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-150}
                duration={850}
                onClick={closeMenu}
              >
                Skills
              </Link>
            </li>
            <li className="hover:text-sky-200 mb-2 md:mb-0 cursor-pointer">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={850}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li className="hover:text-sky-200 mb-2 md:mb-0 cursor-pointer">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={850}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
