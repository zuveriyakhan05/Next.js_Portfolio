"use client";

import { useEffect, useState } from "react";

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const skills = [
    { name: "React", color: "bg-indigo-100", text: "text-indigo-700" },
    { name: "Tailwind CSS", color: "bg-pink-100", text: "text-pink-700" },
    { name: "Figma", color: "bg-green-100", text: "text-green-700" },
    { name: "JavaScript", color: "bg-yellow-100", text: "text-yellow-700" },
    { name: "Next.js", color: "bg-blue-100", text: "text-blue-700" },
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
    { name: "SQL", color: "bg-red-200", text: "text-red-800" },
    { name: "Java", color: "bg-red-400", text: "text-red-900" },
  ];

  return (
    <main className="sm:ml-16 min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-green-50 to-cyan-50">

      {/* Floating shapes animations */}
      <div className="floating-shapes absolute inset-0 pointer-events-none z-0">

        {/* Circles with various sizes */}
        <div
          className="shape circle animate-float"
          style={{
            top: "10%",
            left: "15%",
            width: 60,
            height: 60,
            backgroundColor: "rgba(255,99,132,0.4)",
            opacity: 0,
            animationFillMode: "forwards",
            animationName: "fadeInOpacity, float",
            animationDuration: "1s, 7s",
            animationTimingFunction: "ease forwards, ease-in-out",
            animationIterationCount: "1, infinite",
            animationDelay: "0s, 0s",
          }}
        />

        <div
          className="shape circle animate-float-delay"
          style={{
            top: "75%",
            left: "20%",
            width: 35,
            height: 35,
            backgroundColor: "rgba(255,99,132,0.3)",
            opacity: 0,
            animationFillMode: "forwards",
            animationName: "fadeInOpacity, float",
            animationDuration: "1s, 8s",
            animationTimingFunction: "ease forwards, ease-in-out",
            animationIterationCount: "1, infinite",
            animationDelay: "0.9s, 2s",
          }}
        />

        <div
          className="shape circle animate-float-alt"
          style={{
            top: "55%",
            left: "80%",
            width: 50,
            height: 50,
            backgroundColor: "rgba(255, 150, 100, 0.3)",
            opacity: 0,
            animationFillMode: "forwards",
            animationName: "fadeInOpacity, floatAlt",
            animationDuration: "1s, 10s",
            animationTimingFunction: "ease forwards, ease-in-out",
            animationIterationCount: "1, infinite",
            animationDelay: "1.5s, 1s",
          }}
        />

        {/* Squares with varied sizes */}
        <div
          className="shape square animate-rotate"
          style={{
            top: "30%",
            left: "70%",
            width: 65,
            height: 65,
            backgroundColor: "rgba(54,162,235,0.3)",
            opacity: 0,
            animationFillMode: "forwards",
            animationName: "fadeInOpacity, rotate",
            animationDuration: "1s, 12s",
            animationTimingFunction: "ease forwards, linear",
            animationIterationCount: "1, infinite",
            animationDelay: "0.3s, 0s",
          }}
        />

        <div
          className="shape square bounce"
          style={{
            top: "80%",
            left: "60%",
            width: 40,
            height: 40,
            backgroundColor: "rgba(54,162,235,0.25)",
            opacity: 0,
            animationFillMode: "forwards",
            animationName: "fadeInOpacity, bounce",
            animationDuration: "1s, 3s",
            animationTimingFunction: "ease forwards, ease-in-out",
            animationIterationCount: "1, infinite",
            animationDelay: "1.2s, 0s",
          }}
        />

        <div
          className="shape square animate-rotate diamond"
          style={{
            top: "20%",
            left: "50%",
            width: 55,
            height: 55,
            backgroundColor: "rgba(100, 120, 255, 0.3)",
            opacity: 0,
            animationFillMode: "forwards",
            animationName: "fadeInOpacity, rotate",
            animationDuration: "1s, 12s",
            animationTimingFunction: "ease forwards, linear",
            animationIterationCount: "1, infinite",
            animationDelay: "1.8s, 0s",
          }}
        />

        {/* Dot with size variation */}
        <div
          className="shape dot animate-orbit"
          style={{
            top: "50%",
            left: "35%",
            width: 18,
            height: 18,
            backgroundColor: "rgba(75,192,192,0.5)",
            opacity: 0,
            animationFillMode: "forwards",
            animationName: "fadeInOpacity, orbit",
            animationDuration: "1s, 8s",
            animationTimingFunction: "ease forwards, linear",
            animationIterationCount: "1, infinite",
            animationDelay: "0.6s, 0s",
          }}
        />

        {/* Triangle with larger size */}
        <div
          className="shape triangle animate-float-alt"
          style={{
            top: "40%",
            left: "10%",
            width: 0,
            height: 0,
            borderLeft: "25px solid transparent",
            borderRight: "25px solid transparent",
            borderBottom: "45px solid rgba(255, 150, 100, 0.4)",
            opacity: 0,
            animationFillMode: "forwards",
            animationName: "fadeInOpacity, floatAlt",
            animationDuration: "1s, 10s",
            animationTimingFunction: "ease forwards, ease-in-out",
            animationIterationCount: "1, infinite",
            animationDelay: "2s, 1s",
          }}
        />

        {/* Hexagon (slightly bigger) */}
        <div
          className="shape hexagon bounce"
          style={{
            top: "70%",
            left: "80%",
            width: 70,
            height: 40,
            backgroundColor: "rgba(100, 120, 255, 0.3)",
            opacity: 0,
            animationFillMode: "forwards",
            animationName: "fadeInOpacity, bounce",
            animationDuration: "1s, 6s",
            animationTimingFunction: "ease forwards, ease-in-out",
            animationIterationCount: "1, infinite",
            animationDelay: "2.3s, 0s",
          }}
        />

      </div>

      <section className="max-w-3xl w-full mx-auto text-center relative z-10">
        {/* Heading with fade down */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-700 animate-fade-down">
          My Skills
        </h1>

        {/* Skill tags with subtle bounce */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          {skills.map((skill, index) => (
            <span
              key={skill.name}
              className={`${skill.color} ${skill.text} px-4 py-2 rounded-full font-semibold inline-block transition-transform duration-500 ease-out bounce-slow`}
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "scale(1)" : "scale(0.5)",
                transitionDelay: `${index * 0.06}s`,
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: visible;
        }
        .shape {
          position: absolute;
          opacity: 0; /* start hidden for fade-in */
        }
        .circle {
          border-radius: 50%;
        }
        .square {
          border-radius: 8px;
          background-clip: padding-box;
        }
        /* Diamond is rotated square */
        .diamond {
          transform: rotate(45deg);
        }
        .dot {
          border-radius: 50%;
        }
        /* Triangle shape with borders, no width/height */
        .triangle {
          width: 0;
          height: 0;
          position: absolute;
        }
        /* Hexagon shape using clip-path */
        .hexagon {
          position: relative;
          clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
          );
          background-color: rgba(100, 120, 255, 0.3);
        }

        /* Fade In Opacity */
        @keyframes fadeInOpacity {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Float up/down */
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-24px);
          }
        }
        @keyframes floatAlt {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(28px);
          }
        }
        .animate-float {
          animation-name: fadeInOpacity, float;
          animation-duration: 1s, 7s;
          animation-fill-mode: forwards;
          animation-timing-function: ease forwards, ease-in-out;
          animation-iteration-count: 1, infinite;
          animation-delay: 0s, 0s;
        }
        .animate-float-delay {
          animation-name: fadeInOpacity, float;
          animation-duration: 1s, 8s;
          animation-fill-mode: forwards;
          animation-timing-function: ease forwards, ease-in-out;
          animation-iteration-count: 1, infinite;
          animation-delay: 0.9s, 2s;
        }
        .animate-float-alt {
          animation-name: fadeInOpacity, floatAlt;
          animation-duration: 1s, 10s;
          animation-fill-mode: forwards;
          animation-timing-function: ease forwards, ease-in-out;
          animation-iteration-count: 1, infinite;
          animation-delay: 1.5s, 1s;
        }

        /* Rotate */
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-rotate {
          animation-name: fadeInOpacity, rotate;
          animation-duration: 1s, 12s;
          animation-fill-mode: forwards;
          animation-timing-function: ease forwards, linear;
          animation-iteration-count: 1, infinite;
          animation-delay: 0.3s, 0s;
        }

        /* Orbit */
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(100px);
          }
          100% {
            transform: rotate(360deg) translateX(100px);
          }
        }
        .animate-orbit {
          animation-name: fadeInOpacity, orbit;
          animation-duration: 1s, 8s;
          animation-fill-mode: forwards;
          animation-timing-function: ease forwards, linear;
          animation-iteration-count: 1, infinite;
          animation-delay: 0.6s, 0s;
          transform-origin: center center;
        }

        /* Bounce */
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .bounce {
          animation: bounce 3s ease-in-out infinite;
        }
        .bounce-slow {
          animation: bounce 6s ease-in-out infinite;
        }
        .bounce-slower {
          animation: bounce 9s ease-in-out infinite;
        }

        /* Fade Down */
        .animate-fade-down {
          animation: fadeDown 1.1s ease forwards;
        }
        @keyframes fadeDown {
          0% {
            opacity: 0;
            transform: translateY(-32px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
