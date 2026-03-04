"use client";

import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setAnimate(true);
  }, []);

  const skills = [
    { name: "React", color: "bg-indigo-100", text: "text-indigo-700", category: "Frontend" },
    { name: "Tailwind CSS", color: "bg-pink-100", text: "text-pink-700", category: "Frontend" },
    { name: "Figma", color: "bg-green-100", text: "text-green-700", category: "Tools" },
    { name: "JavaScript", color: "bg-yellow-100", text: "text-yellow-700", category: "Programming Languages" },
    { name: "Next.js", color: "bg-blue-100", text: "text-blue-700", category: "Frontend" },
    { name: "HTML", color: "bg-orange-100", text: "text-orange-700", category: "Frontend" },
    { name: "CSS", color: "bg-sky-100", text: "text-sky-700", category: "Frontend" },
    { name: "Node.js", color: "bg-green-200", text: "text-green-800", category: "Backend" },
    { name: "Express.js", color: "bg-gray-200", text: "text-gray-800", category: "Backend" },
    { name: "C", color: "bg-purple-100", text: "text-purple-700", category: "Programming Languages" },
    { name: "C++", color: "bg-purple-200", text: "text-purple-800", category: "Programming Languages" },
    { name: "Git", color: "bg-red-100", text: "text-red-700", category: "Tools" },
    { name: "GitHub", color: "bg-gray-300", text: "text-gray-900", category: "Tools" },
    { name: "Photoshop", color: "bg-indigo-200", text: "text-indigo-900", category: "Tools" },
    { name: "Pagemaker", color: "bg-pink-200", text: "text-pink-900", category: "Tools" },
    { name: "CorelDraw", color: "bg-yellow-200", text: "text-yellow-900", category: "Tools" },
    { name: "SQL", color: "bg-red-200", text: "text-red-800", category: "Databases" },
    { name: "Java", color: "bg-red-400", text: "text-red-900", category: "Programming Languages" },
    { name: "MongoDB", color: "bg-green-300", text: "text-green-900", category: "Databases" },
  ];

  const categories = ["All", "Frontend", "Backend", "Databases", "Programming Languages", "Tools"];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <main className="relative min-h-screen w-full flex items-center bg-[#f4f1ee] overflow-hidden px-6">

      <Sidebar />

      {/* Soft Artistic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-200 opacity-30 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200 opacity-30 blur-[120px]" />
      </div>

      <section className="relative z-10 max-w-4xl w-full mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-light mb-10 text-gray-900">
          My <span className="italic font-semibold text-indigo-600">Skills</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                px-4 py-2 rounded-full border font-semibold transition
                ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-50"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {filteredSkills.map((skill, index) => {
            const floatClass =
              index % 3 === 0
                ? "float-slow"
                : index % 3 === 1
                ? "float-medium"
                : "float-fast";

            return (
              <span
                key={skill.name}
                className={`${skill.color} ${skill.text} ${floatClass}
                  px-4 py-2 rounded-full font-semibold inline-block
                  transition-all duration-500 hover:scale-110`}
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? "scale(1)" : "scale(0.8)",
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                {skill.name}
              </span>
            );
          })}
        </div>

      </section>

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }

        @keyframes floatFast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        .float-medium {
          animation: floatMedium 5s ease-in-out infinite;
        }

        .float-fast {
          animation: floatFast 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}