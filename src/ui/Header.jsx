import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CrossIcon, Logo, LogoSm, ToggleIcon } from "../icons";
import InfoModal from "../components/home/common/modals/InfoModal";

const Header = ({ className, header, openModal, setKey }) => {
  const [open, setOpen] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleKey = () => {
    setIsNavbar(false);
    if (setKey) {
      setKey((prev) => prev + 1);
    }
  };

  return (
    <header className={isSticky ? "sticky bg-custom-black top-0 z-30" : ""}>
      {/* modal */}
      {open && <InfoModal setOpen={setOpen} />}
      {/* desktop */}
      <nav
        className={`max-w-[1440px] mx-auto flex justify-between items-center xl:px-[60px] px-4 py-6 ${className} ${
          header === "custom" ? "bg-custom-black" : "bg-transparent"
        } ${isSticky ? "sticky bg-custom-black top-0 z-30" : ""}`}
      >
        {/* logo */}
        <Link to="/" className="sm:block hidden">
          <Logo />
        </Link>
        <Link to="/" className="sm:hidden block">
          <LogoSm />
        </Link>
        {/* page links */}
        <ul className="lg:flex hidden items-center space-x-8">
          <li className="uppercase font-secondary text-white xl:text-base text-sm font-normal xl:leading-[26px]">
            <Link to="/how-it-works" onClick={() => setKey((prev) => prev + 1)}>
              How It Works
            </Link>
          </li>
          <li className="font-secondary text-white xl:text-base text-sm font-normal xl:leading-[26px]">
            <Link to="/faq">FAQs</Link>
          </li>
          <li className="uppercase font-secondary text-white xl:text-base text-sm font-normal xl:leading-[26px]">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        {/* login buttons */}
        <div className="lg:flex hidden items-center space-x-5">
          {/* as club */}
          <button
            onClick={() => openModal()}
            className="xl:py-3 py-2 font-custom xl:px-5 px-4 border border-white hover:bg-white rounded-[40px] text-white hover:text-black transition-all delay-100 text-sm font-light"
          >
            LOGIN AS CLUB
          </button>
          {/* as player */}
          <button
            onClick={() => setOpen(true)}
            className="xl:py-3 py-2 font-custom xl:px-5 px-4 border border-secondary hover:border-primary rounded-[40px] text-white text-sm transition-all delay-100 font-light bg-secondary hover:bg-primary"
          >
            LOGIN AS PLAYER
          </button>
        </div>
        {/* toggle btn */}
        <button className="lg:hidden block" onClick={() => setIsNavbar(true)}>
          <ToggleIcon />
        </button>
      </nav>
      {/* mobile */}
      <nav
        className={`py-8 px-4 fixed right-0 lg:hidden top-0 bottom-0 bg-custom-black transition-all delay-300 z-[999] ${
          isNavbar ? "left-0" : "left-full"
        }`}
      >
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="">
            <LogoSm />
          </Link>
          {/* close btn */}
          <button
            className="lg:hidden block"
            onClick={() => setIsNavbar(false)}
          >
            <CrossIcon />
          </button>
        </div>
        <ul className="space-y-4 mt-6">
          <li className="uppercase font-secondary py-2 px-3 text-base leading-[26px] text-white font-normal">
            <Link to="/how-it-works" onClick={handleKey}>
              How It Works
            </Link>
          </li>
          <li className="font-secondary py-2 px-3 text-base leading-[26px] text-white font-normal">
            <Link to="/faq">FAQs</Link>
          </li>
          <li className="uppercase font-secondary py-2 px-3 text-base leading-[26px] text-white font-normal">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
