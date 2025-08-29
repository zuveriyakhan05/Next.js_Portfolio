"use client";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";

export default function Contact() {
  const dotsCount = 10;
  const dots = Array.from({ length: dotsCount });
  const colors = [
    "rgba(255, 99, 132, 0.7)",
    "rgba(54, 162, 235, 0.7)",
    "rgba(255, 206, 86, 0.7)",
    "rgba(75, 192, 192, 0.7)",
    "rgba(153, 102, 255, 0.7)",
    "rgba(255, 159, 64, 0.7)",
  ];
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbaeavn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (response.ok) {
        setStatus("Thanks for sending your message!");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Could not send. Please try again.");
    }
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <main className="sm:ml-16 min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-50 to-pink-50 relative overflow-hidden">
      <Sidebar />
      <ThemeToggle />
      {/* Colorful Animated Dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {dots.map((_, i) => {
          const size = Math.random() * 8 + 4;
          const left = Math.random() * 100;
          const delay = Math.random() * 10;
          const duration = Math.random() * 10 + 8;
          const opacity = Math.random() * 0.5 + 0.3;
          const color = colors[Math.floor(Math.random() * colors.length)];
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
                animationDuration: `${duration}s`,
                opacity: opacity,
              }}
            />
          );
        })}

        {/* Floating Shapes */}
        <div className="shape circle animate-float"
          style={{
            top: "10%",
            left: "12%",
            width: 120,
            height: 120,
            backgroundColor: "rgba(255,99,132,0.3)"
          }}
        />
        <div className="shape square animate-rotate"
          style={{
            top: "40%",
            left: "76%",
            width: 90,
            height: 90,
            backgroundColor: "rgba(54,162,235,0.25)"
          }}
        />
        <div className="shape diamond animate-rotate"
          style={{
            top: "17%",
            left: "30%",
            width: 80,
            height: 80,
            backgroundColor: "rgba(153,102,255,0.25)"
          }}
        />
        <div className="shape triangle animate-float-alt"
          style={{
            top: "77%",
            left: "20%",
            width: 0,
            height: 0,
            borderLeft: "50px solid transparent",
            borderRight: "50px solid transparent",
            borderBottom: "100px solid rgba(255,159,64,0.3)"
          }}
        />
        <div className="shape dot animate-orbit"
          style={{
            top: "66%",
            left: "66%",
            width: 30,
            height: 30,
            backgroundColor: "rgba(75,192,192,0.3)"
          }}
        />
        <div className="shape hexagon bounce"
          style={{
            top: "81%",
            left: "81%",
            width: 90,
            height: 90,
            backgroundColor: "rgba(255,206,86,0.3)"
          }}
        />
      </div>

      <section className="max-w-lg w-full mx-auto text-center animate-fade-in relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-700">Get in Touch</h1>
        <p className="text-gray-600 mb-8">
          "Let's create something great! ✨ I'm always open to new projects and collaborations."
          🛠️ Let's connect and discuss exciting new opportunities."
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-md mx-auto"
        >
          <label className="text-left font-medium">
            Your name:
            <input
              type="text"
              name="name"
              required
              className="mt-2 px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </label>
          <label className="text-left font-medium">
            Your email:
            <input
              type="email"
              name="email"
              required
              className="mt-2 px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </label>
          <label className="text-left font-medium">
            Your message:
            <textarea
              name="message"
              required
              rows={4}
              className="mt-2 px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </label>
          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700 transition"
          >
            Send
          </button>
          {status && (
            <p className="mt-4 font-semibold text-indigo-600">{status}</p>
          )}
        </form>
      </section>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(.77,0,.18,1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(32px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .dot {
          position: absolute;
          bottom: -12px;
          border-radius: 50%;
          filter: blur(2px);
          animation-name: floatUp;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes floatUp {
          0% { transform: translateY(0px) scale(1); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-48vh) scale(1.2); }
          90% { opacity: 1; }
          100% { transform: translateY(-110vh) scale(0.85); opacity: 0; }
        }
        .shape {
          position: absolute;
          opacity: 0.5;
          animation-fill-mode: forwards;
        }
        .circle { border-radius: 50%; }
        .square { border-radius: 8px; background-clip: padding-box; }
        .diamond { border-radius: 8px; transform: rotate(45deg); background-clip: padding-box; }
        .dot { border-radius: 50%; }
        .triangle { width: 0; height: 0; position: absolute; }
        .hexagon {
          position: relative;
          clip-path: polygon(
            25% 0%, 75% 0%, 100% 50%,
            75% 100%, 25% 100%, 0% 50%
          );
        }
        @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-24px);} }
        @keyframes floatAlt { 0%,100%{transform:translateY(0);} 50%{transform:translateY(28px);} }
        @keyframes rotate { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
        @keyframes orbit { 0%{transform:rotate(0deg)translateX(80px);} 100%{transform:rotate(360deg)translateX(80px);} }
        @keyframes bounce { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        .animate-float { animation: float 7s ease-in-out infinite; }
        .animate-float-delay { animation: float 8s 2s ease-in-out infinite; }
        .animate-float-alt { animation: floatAlt 9s 1s ease-in-out infinite; }
        .animate-rotate { animation: rotate 13s linear infinite; }
        .animate-orbit { animation: orbit 9s linear infinite; transform-origin: center center;}
        .bounce { animation: bounce 5s ease-in-out infinite; }
      `}</style>
    </main>
  );
}
