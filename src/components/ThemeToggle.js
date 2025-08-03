"use client"; 

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
    >
      {currentTheme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}
