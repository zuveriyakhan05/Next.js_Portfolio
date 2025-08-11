"use client";

import { useEffect, useState } from "react";

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // trigger animations after mount
    setAnimate(true);
  }, []);

  const skills = [
    // Existing
    { name: "React", color: "bg-indigo-100", text: "text-indigo-700" },
    { name: "Tailwind CSS", color: "bg-pink-100", text: "text-pink-700" },
    { name: "Figma", color: "bg-green-100", text: "text-green-700" },
    { name: "JavaScript", color: "bg-yellow-100", text: "text-yellow-700" },
    { name: "Next.js", color: "bg-blue-100", text: "text-blue-700" },
    // New
    { name: "HTML", color: "bg-orange-100", text: "text-orange-700" },
    { name: "CSS", color: "bg-sky-100", text: "text-sky-700" },
    { name: "Node.js", color: "bg-green-200", text: "text-green-800" },
    { name: "Express.js", color: "bg-gray-200", text: "text-gray-800" },
    { name: "C", color: "bg-purple-100", text: "text-purple-700" },
    { name: "C++", color: "bg-purple-200", text: "text-purple-800" },
    { name: "Git", color: "bg-red-100", text: "text-red-700" },
    { name: "GitHub", color: "bg-gray-300", text: "text-gray-900" },
    { name: "Photoshop", color: "bg-indigo-200", text: "text-indigo-900" },
    { name: "Pagemaker", color: "bg-pink-200", text: "text-pink-900" },
    { name: "CorelDraw", color: "bg-yellow-200", text: "text-yellow-900" },
  ];

  return (
    <main className="sm:ml-16 min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-green-50 to-cyan-50">
      <section className="max-w-3xl w-full mx-auto text-center">
        {/* Heading with slide-down */}
        <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 text-indigo-700 animate-heading`}>
          My Skills
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          {skills.map((skill, index) => (
            <span
              key={skill.name}
              className={`${skill.color} ${skill.text} px-4 py-2 rounded-full font-semibold inline-block
                transition-transform duration-500 ease-out`}
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "scale(1)" : "scale(0.5)",
                transitionDelay: `${index * 0.08}s`,
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        /* Heading drops in from top */
        .animate-heading {
          animation: slideDown 0.8s ease forwards;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
    