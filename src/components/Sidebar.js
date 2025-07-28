"use client";

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
        <span className="text-2xl select-none">🦋</span>
        <span className="text-2xl select-none">🧬</span>
        <span className="text-2xl select-none">🌐</span>
      </div>
    </aside>
  );
}
