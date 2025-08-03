"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

export default function Sidebar() {
  const navItems = ["Contact", "Projects", "Skills", "About Me"];
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = theme === "dark" || (theme === "system" && resolvedTheme === "dark");

  // Close sidebar on click (mobile)
  const handleNavClick = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button (mobile only) */}
      <button
        className="fixed top-4 left-4 z-40 sm:hidden bg-[#191919] rounded-full p-3 text-gray-300 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        type="button"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar overlay (mobile open) */}
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "block" : "hidden"
        } sm:hidden`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`
          fixed top-0 left-0 h-full w-[100px] flex flex-col items-center
          bg-[#191919] text-gray-300 py-8 z-40
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:static sm:flex
          ${isDark ? "dark" : ""}
        `}
        aria-label="Sidebar navigation"
      >
        {/* Logo */}
        <div className="font-black text-3xl tracking-widest mb-16 select-none">ZK</div>

        {/* Removed the Theme Toggle Button */}

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col items-center mt-12" aria-label="Primary navigation">
          <ul>
            {navItems.map((item) => (
              <li
                key={item}
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                className="text-base cursor-pointer hover:text-white dark:hover:text-pink-400 select-none transition-colors mb-4"
                tabIndex={0}
                role="link"
                onClick={handleNavClick}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex-1" />

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-7 mb-5">
          <a
            href="https://www.linkedin.com/in/zuveriya-khan-9a44a6319"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.figma.com/@yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-pink-600 hover:text-pink-800 dark:hover:text-pink-400 transition-colors"
            aria-label="Figma"
          >
            <SiFigma />
          </a>
          <a
            href="https://github.com/zuveriyakhan05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-white dark:text-black dark:hover:text-indigo-600 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </aside>
    </>
  );
}
