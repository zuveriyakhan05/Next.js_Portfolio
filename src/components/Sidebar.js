"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFigma } from "react-icons/si";


export default function Sidebar() {
  const navItems = ["Contact", "Projects", "Skills", "About Me"];

  return (
    <aside
      className="fixed h-full w-[100px] flex flex-col items-center bg-[#191919] text-gray-300 py-8 z-20"
      aria-label="Sidebar navigation"
    >
      {/* Logo */}
<div className="font-black text-3xl tracking-widest mb-16 select-none">ZK</div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col items-center" aria-label="Primary">
        <ul className="space-y-0">
          {navItems.map((item) => (
            <li
              key={item}
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              className="text-base cursor-pointer hover:text-white select-none transition-colors"
              tabIndex={0}
              role="link"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer to push icons to bottom */}
      <div className="flex-1" />

      {/* Icons only */}
      <div className="flex flex-col items-center gap-7 mb-5">
  <a
    href="www.linkedin.com/in/zuveriya-khan-9a44a6319"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-blue-500 hover:text-blue-700 transition-colors"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://www.figma.com/@yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-pink-600 hover:text-pink-800 transition-colors"
    aria-label="Figma"
  >
    <SiFigma />
  </a>
  <a
    href="https://github.com/zuveriyakhan05"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-gray-300 hover:text-white transition-colors"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>
</div>
    </aside>
  );
}
