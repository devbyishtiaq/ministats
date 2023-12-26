import { Link } from "react-router-dom";
import { LinkedinIcon, Logo, TwitterIcon, LogoSm } from "../icons";

const Footer = () => {
  return (
    <footer id="footer" className="xl:px-[60px] px-4 xl:pt-20 pt-10 pb-6 ">
      <div className="flex lg:flex-nowrap flex-wrap items-center justify-between lg:gap-0 gap-8">
        {/* about us */}
        <div className="flex flex-col xl:space-y-[36px] space-y-4 max-w-[529px]">
          {/* logo */}
          <Logo className="sm:block hidden" />
          <LogoSm className="sm:hidden block" />
          {/* info */}
          <p className="text-grey xl:text-lg text-sm font-light font-secondary">
            Unlocking Potential, Elevating Play: MiniStats - Where Data Drives
            Development on the Field. Your Game, Your Growth, Your Excellence!
          </p>
          {/* social icons */}
          <div className="flex items-center space-x-6">
            <a href="https://twitter.com/Mini_Stats">
              <TwitterIcon />
            </a>
            <a href="https://www.linkedin.com/company/ministats/">
              <LinkedinIcon />
            </a>
          </div>
        </div>
        {/* quick links */}
        <div>
          <h4 className="xl:text-2xl text-base font-primary font-bold xl:leading-[29.76px] leading-[19.84px] uppercase text-white">
            QUICK LINKS
          </h4>
          <ul className="xl:space-y-3 space-y-2 text-grey xl:text-lg text-base font-light font-secondary xl:mt-5 mt-4">
            <li>
              <Link to="/how-it-works">How it works</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        {/* contact us */}
        <div>
          <h4 className="xl:text-2xl text-base font-primary font-bold xl:leading-[29.76px] leading-[19.84px] uppercase text-white">
            CONTACT US
          </h4>
          <ul className="xl:space-y-3 space-y-2 text-grey xl:text-lg text-base font-light font-secondary xl:mt-5 mt-4">
            <li>
              <span>+1 832 988 4186</span>
            </li>
            <li>
              <a href="mailto: Support@ministats.ai" className="underline">
                Support@ministats.ai
              </a>
            </li>
            <li>
              <span>Houston, Texas. USA</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-dark-grey h-[1px] my-6" />
      <p className="text-grey font-normal text-base text-center">
        © 2023 Ministats. All Rights Reserved. Unauthorized use prohibited.
      </p>
    </footer>
  );
};

export default Footer;
