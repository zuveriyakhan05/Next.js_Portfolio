"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Contact", href: "/contact" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "About", href: "/about" },
  ];

  const figmaSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 40 60" fill="none" className="inline">
      <rect x="0" y="0" width="20" height="20" rx="10" fill="#F24E1E" />
      <rect x="0" y="20" width="20" height="20" rx="10" fill="#A259FF" />
      <rect x="0" y="40" width="20" height="20" rx="10" fill="#0ACF83" />
      <rect x="20" y="0" width="20" height="20" rx="10" fill="#FF7262" />
      <circle cx="30" cy="30" r="10" fill="#1ABCFE" />
    </svg>
  );

  const linkedInSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2" className="inline">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 19h-2.5v-9h2.5v9zm-1.25-10.272c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13 10.272h-2.5v-4.5c0-1.08-.02-2.47-1.5-2.47s-1.73 1.17-1.73 2.39v4.58h-2.5v-9h2.4v1.23h.03c.33-.63 1.14-1.29 2.34-1.29 2.5 0 2.96 1.64 2.96 3.77v5.03z" />
    </svg>
  );

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/zuveriyakhan05",
      icon: <FaGithub size={22} />,
    },
    {
      name: "Figma",
      href: "https://figma.com/@your-figma",
      icon: figmaSVG,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/zuveriya-khan-9a44a6319",
      icon: linkedInSVG,
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
      {/* Mobile sidebar */}
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
      {/* Desktop sidebar */}
      <aside
        className={`
          hidden sm:fixed sm:top-0 sm:left-0 sm:h-full sm:w-16 sm:z-50
          sm:bg-white/20 sm:backdrop-blur-xl sm:flex sm:flex-col sm:items-center sm:justify-between sm:py-6
        `}
        style={{ minHeight: "240px" }}
      >
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
