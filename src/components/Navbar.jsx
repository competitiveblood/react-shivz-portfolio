import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex items-center">
                <img src={logo} alt="Kevin Rush Logo" className="h-10 w-10 ml-8" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/competitiveblood/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/competitiveblood" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://leetcode.com/u/competitiveblood/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

