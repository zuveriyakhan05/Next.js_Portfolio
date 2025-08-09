"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaGithub, FaFigma, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Contact", href: "/contact" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "About", href: "/about" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/https://github.com/zuveriyakhan05",
      icon: <FaGithub size={22} />,
    },
    {
      name: "Figma",
      href: "https://figma.com/@your-figma",
      icon: <FaFigma size={22} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/www.linkedin.com/in/zuveriya-khan-9a44a6319",
      icon: <FaLinkedin size={22} />,
    },
  ];

  return (
    <>
      <button
        aria-label="Open Sidebar"
        className="fixed top-4 left-4 z-50 bg-white/50 backdrop-blur p-2 rounded shadow text-2xl sm:hidden"
        onClick={() => setOpen(true)}
      >
        <FaBars />
      </button>

      <aside
        className={`
          fixed top-0 left-0 h-full w-16 z-50 bg-white/20 backdrop-blur-xl flex flex-col items-center py-6 justify-between
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-20"}
          sm:hidden
        `}
        style={{ minHeight: "240px" }}
      >
        <button
          className="absolute top-6 right-3 text-2xl"
          onClick={() => setOpen(false)}
          aria-label="Close Sidebar"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-center gap-10 mt-20">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-gray-800 hover:text-indigo-600 transition font-semibold text-sm"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
                letterSpacing: "0.1em",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-5 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </aside>

      <aside
        className={`
          hidden sm:fixed sm:top-0 sm:left-0 sm:h-full sm:w-16 sm:z-50
          sm:bg-white/20 sm:backdrop-blur-xl sm:flex sm:flex-col sm:items-center sm:justify-between sm:py-6
        `}
        style={{ minHeight: "240px" }}>
        <div className="flex flex-col items-center gap-10 mt-20">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-800 hover:text-indigo-600 transition font-semibold text-sm"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
                letterSpacing: "0.1em",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center gap-5 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
