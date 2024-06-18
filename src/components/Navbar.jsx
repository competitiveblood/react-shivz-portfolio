import React from "react";
import { FaLinkedin, FaGithub, FaSpotify } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
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
                <a href="https://open.spotify.com/user/d8hvew5b2sky6oexjrwviqmgc?si=853849cafe204fec" target="_blank" rel="noopener noreferrer">
                    <FaSpotify />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
