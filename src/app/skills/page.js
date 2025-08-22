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

  // Pastel colors for dots
  const dotColors = [
    "rgba(255, 99, 132, 0.7)",   // pink/red
    "rgba(54, 162, 235, 0.7)",   // blue
    "rgba(255, 206, 86, 0.7)",   // yellow
    "rgba(75, 192, 192, 0.7)",   // teal
    "rgba(153, 102, 255, 0.7)",  // purple
    "rgba(255, 159, 64, 0.7)",   // orange
  ];
  const dotsCount = 10;

  return (
    <main className="sm:ml-16 min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-green-50 to-cyan-50">
      <Sidebar />

      {/* Floating animated shapes */}
      <div className="floating-shapes absolute inset-0 pointer-events-none z-0">
        <div className="shape circle animate-float" style={{ top: "10%", left: "14%", width: 60, height: 60, backgroundColor: "rgba(255,99,132,0.4)" }} />
        <div className="shape circle animate-float-delay" style={{ top: "70%", left: "21%", width: 38, height: 38, backgroundColor: "rgba(255,99,132,0.3)" }} />
        <div className="shape circle animate-float-alt" style={{ top: "53%", left: "77%", width: 48, height: 48, backgroundColor: "rgba(255,150,100,0.3)" }} />
        <div className="shape square animate-rotate" style={{ top: "32%", left: "68%", width: 63, height: 63, backgroundColor: "rgba(54,162,235,0.3)" }} />
        <div className="shape square bounce" style={{ top: "83%", left: "60%", width: 35, height: 35, backgroundColor: "rgba(54,162,235,0.25)" }} />
        <div className="shape square diamond animate-rotate" style={{ top: "18%", left: "54%", width: 50, height: 50, backgroundColor: "rgba(100,120,255,0.3)" }} />
        <div className="shape dot animate-orbit" style={{ top: "52%", left: "32%", width: 14, height: 14, backgroundColor: "rgba(75,192,192,0.5)" }} />
        <div className="shape triangle animate-float-alt" style={{
          top: "44%",
          left: "13%",
          width: 0,
          height: 0,
          borderLeft: "23px solid transparent",
          borderRight: "23px solid transparent",
          borderBottom: "40px solid rgba(255,150,100,0.4)",
        }} />
        <div className="shape hexagon bounce" style={{
          top: "67%",
          left: "82%",
          width: 70,
          height: 40,
          backgroundColor: "rgba(100,120,255,0.3)",
        }} />
        {/* Colorful Animated Dots */}
        {Array.from({ length: dotsCount }).map((_, i) => {
          const size = Math.random() * 8 + 4;
          const left = Math.random() * 100;
          const delay = Math.random() * 6;
          const opacity = Math.random() * 0.5 + 0.3;
          const color = dotColors[Math.floor(Math.random() * dotColors.length)];
          return (
            <span
              key={i}
              className="dot"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                background: color,
                animationDelay: `${delay}s`,
                animationDuration: `12s`,
                opacity: opacity,
              }}
            />
          );
        })}
      </div>

      <section className="max-w-4xl w-full mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-indigo-700 animate-fade-down">
          My Skills
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                px-4 py-2 rounded-full border font-semibold transition
                ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-indigo-700 border-indigo-300 hover:bg-indigo-100"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {filteredSkills.map((skill, index) => {
            const animationClass =
              index % 3 === 0
                ? "skill-float"
                : index % 3 === 1
                ? "skill-bounce"
                : "skill-pulse";

            return (
              <span
                key={skill.name}
                className={`${skill.color} ${skill.text} ${animationClass} px-4 py-2 rounded-full font-semibold inline-block transition-transform duration-500 ease-out`}
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? "scale(1)" : "scale(0.5)",
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
        .floating-shapes { position: absolute; width: 100%; height: 100%; pointer-events: none; }
        .shape { position: absolute; opacity: 0; animation-fill-mode: forwards; animation-name: fadeInOpacity; animation-duration: 1s; animation-timing-function: ease; animation-iteration-count: 1; }
        .circle { border-radius: 50%; }
        .square { border-radius: 8px; background-clip: padding-box; }
        .diamond { transform: rotate(45deg); }
        .dot { border-radius: 50%; }
        .triangle { width: 0; height: 0; position: absolute; }
        .hexagon { position: relative; clip-path: polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%); background-color: rgba(100,120,255,0.3); }
        @keyframes fadeInOpacity { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-24px);} }
        @keyframes floatAlt { 0%,100%{transform:translateY(0);} 50%{transform:translateY(28px);} }
        .animate-float { animation-name: fadeInOpacity, float; animation-duration: 1s, 7s; animation-fill-mode: forwards; animation-timing-function: ease, ease-in-out; animation-iteration-count: 1, infinite; animation-delay: 0s, 0s; }
        .animate-float-delay { animation-name: fadeInOpacity, float; animation-duration: 1s, 8s; animation-fill-mode: forwards; animation-timing-function: ease, ease-in-out; animation-iteration-count: 1, infinite; animation-delay: 0.9s, 2s; }
        .animate-float-alt { animation-name: fadeInOpacity, floatAlt; animation-duration: 1s, 10s; animation-fill-mode: forwards; animation-timing-function: ease, ease-in-out; animation-iteration-count: 1, infinite; animation-delay: 1.5s, 1s; }
        @keyframes rotate { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
        .animate-rotate { animation-name: fadeInOpacity, rotate; animation-duration: 1s, 12s; animation-fill-mode: forwards; animation-timing-function: ease, linear; animation-iteration-count: 1, infinite; animation-delay: 0.3s, 0s; }
        @keyframes orbit { 0%{transform:rotate(0deg)translateX(100px);} 100%{transform:rotate(360deg)translateX(100px);} }
        .animate-orbit { animation-name: fadeInOpacity, orbit; animation-duration: 1s, 8s; animation-fill-mode: forwards; animation-timing-function: ease, linear; animation-iteration-count: 1, infinite; animation-delay: 0.6s, 0s; transform-origin: center center; }
        .bounce { animation: bounce 3s ease-in-out infinite; }
        @keyframes bounce { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        .bounce-slow { animation: bounce 6s ease-in-out infinite;}
        .bounce-slower { animation: bounce 9s ease-in-out infinite;}
        /* Skill animations */
        @keyframes skillFloat {0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);} }
        @keyframes skillBounce {0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);} }
        @keyframes skillPulse {0%,100%{transform:scale(1);}50%{transform:scale(1.08);} }
        .skill-float { animation: skillFloat 4s ease-in-out infinite;}
        .skill-bounce { animation: skillBounce 3s ease-in-out infinite;}
        .skill-pulse { animation: skillPulse 3.5s ease-in-out infinite;}
        .animate-fade-down { animation: fadeDown 1.1s ease forwards;}
        @keyframes fadeDown { 0% { opacity: 0; transform: translateY(-32px);} 100% { opacity: 1; transform: translateY(0);} }
        /* Colorful Dots Animation */
        .dot {
          position: absolute;
          bottom: -12px;
          border-radius: 50%;
          filter: blur(2px);
          animation-name: floatUp;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        @keyframes floatUp {
          0% { transform: translateY(0px) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-110vh) scale(0.8); opacity: 0; }
        }
      `}
      </style>
    </main>
  );
}
