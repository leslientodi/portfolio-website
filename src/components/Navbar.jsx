import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/raviKumarLogo.webp";
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <a href="/" aria-label="Home">
          <img src={logo} alt="Logo" className="mx-2" width={50} height={33} />
        </a> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://linkedin.com/in/nana-owusu-ansah-ntodi-98aa94274"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/leslientodi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/bezzle_xr/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/NanaNtodi177809"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
