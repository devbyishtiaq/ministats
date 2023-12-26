import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, LogoSm, ToggleIcon } from "../icons";
import InfoModal from "../components/home/common/modals/InfoModal";
import { useAppContext } from "../context/AppContext";

const Header = ({ className, header, openModal }) => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      {/* modal */}
      {open && <InfoModal setOpen={setOpen} />}
      {/* desktop */}
      <nav
        className={`flex justify-between items-center xl:px-[60px] px-4 py-6 ${className} ${
          header === "custom" ? "bg-custom-black" : "bg-transparent"
        }`}
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
            <Link to="/how-it-works">How It Works</Link>
          </li>
          <li className="uppercase font-secondary text-white xl:text-base text-sm font-normal xl:leading-[26px]">
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
        <button className="lg:hidden block">
          <ToggleIcon />
        </button>
      </nav>
      {/* mobile */}
      {/* <nav className="p-4 fixed right-0 top-0 bottom-0 bg-secondary left-[0] z-[999]"></nav> */}
    </header>
  );
};

export default Header;
