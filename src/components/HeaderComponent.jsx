import React, { useState } from "react";

function Header() {
  const [isOpen, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!isOpen);
  };

  return (
    <header className="py-3 md:py-4 w-full z-10">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 max-w-7xl lg:max-w-[1400px]">
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-[#333f70] focus:outline-none z-20"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`
            ${isOpen ? "block" : "hidden"}
            md:flex md:items-center md:w-auto w-full absolute md:static top-16 right-0
            bg-white md:bg-transparent shadow-md md:shadow-none
            transition-all duration-300 ease-in-out
            ${isOpen ? "h-screen md:h-auto" : "h-0 md:h-auto"}
          `}
        >
          <ul
            className="
              flex flex-col md:flex-row md:justify-around md:gap-8 lg:gap-12
              text-[#333f70]  font-semibold text-lg md:text-xl lg:text-2xl 
              w-full md:w-auto px-4 md:px-0 py-4 md:py-0
              text-right rtl
              2xl:text-3xl
            "
          >
            <li className="py-2 md:py-0">
              <a
                href="#services"
                className="block hover:text-blue-600 transition-colors duration-200 text-[#333f70]"
                onClick={() => setToggle(false)}
              >
                خدمات
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#advices"
                className="block hover:text-blue-600 transition-colors duration-200 text-[#333f70]"
                onClick={() => setToggle(false)}
              >
                نصائح
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#hours"
                className="block hover:text-blue-600 transition-colors duration-200 text-[#333f70]"
                onClick={() => setToggle(false)}
              >
                أوقات العمل
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a
                href="#contact"
                className="block hover:text-blue-600 transition-colors duration-200 text-[#333f70]"
                onClick={() => setToggle(false)}
              >
                تواصل معنا
              </a>
            </li>
          </ul>
        </nav>

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Clinique neurologique, neurologie à Meda, EEG EMG, Docteur Yala Mohand Salah"
            className="h-16 md:h-20 lg:h-35 w-auto xl:h-40"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
