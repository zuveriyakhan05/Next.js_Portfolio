"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Contact", href: "/contact" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      {/* Google Fonts Import for sidebar font */}
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
      `}</style>

      {/* Hamburger for mobile only */}
      <button
        aria-label="Open Sidebar"
        className="fixed top-4 left-4 z-50 bg-white/50 backdrop-blur p-2 rounded shadow text-2xl sm:hidden"
        onClick={() => setOpen(true)}
      >
        <FaBars />
      </button>

      {/* Mobile Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-16 z-50 bg-white/20 backdrop-blur-xl flex flex-col items-center py-6 justify-start gap-10
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-20"}
          sm:hidden
        `}
        style={{ minHeight: "240px" }}
      >
        {/* Logo */}
        <div className="mb-2 flex items-center justify-center w-full text-indigo-600 font-extrabold text-5xl select-none animated-logo logo-shift">
          ZK
        </div>

        <button
          className="absolute top-6 right-3 text-2xl"
          onClick={() => setOpen(false)}
          aria-label="Close Sidebar"
        >
          <FaTimes />
        </button>

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
      </aside>

      {/* Desktop Sidebar */}
      <aside
        className={`
          hidden sm:fixed sm:top-0 sm:left-0 sm:h-full sm:w-16 sm:z-50
          sm:bg-white/20 sm:backdrop-blur-xl sm:flex sm:flex-col sm:items-center sm:justify-start sm:py-6 sm:gap-10
        `}
        style={{ minHeight: "240px" }}
      >
        {/* Logo */}
        <div className="text-[40px] mb-2 flex items-center justify-center w-full text-indigo-600 font-extrabold text-5xl select-none animated-logo logo-shift" style={{ fontFamily: "'Poppins', sans-serif" }}>
          ZK
        </div>

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
      </aside>

      {/* Animation styles and position adjustment */}
      <style jsx>{`
        .animated-logo {
          animation: logoAnim 3s ease-in-out infinite;
          display: inline-block;
          font-family: 'Poppins', sans-serif;
        }

        .logo-shift {
          position: relative;
          right: -12px; /* Shifts logo 12px outside right */
        }

        @keyframes logoAnim {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            color: #4f46e5; /* indigo-600 */
            text-shadow: 0 0 10px rgba(79, 70, 229, 0.7);
          }
          50% {
            transform: scale(1.2) rotate(15deg);
            color: #4338ca; /* indigo-700 */
            text-shadow: 0 0 20px rgba(67, 56, 202, 0.9);
          }
        }
      `}</style>
    </>
  );
}
