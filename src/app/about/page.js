"use client";
import Sidebar from "@/components/Sidebar"; 


export default function About() {
  const dotsCount = 10; // number of animated dots
  const dots = Array.from({ length: dotsCount });

  // Pastel / soft color palette
  const colors = [
    "rgba(255, 99, 132, 0.7)",   // pink/red
    "rgba(54, 162, 235, 0.7)",   // blue
    "rgba(255, 206, 86, 0.7)",   // yellow
    "rgba(75, 192, 192, 0.7)",   // teal
    "rgba(153, 102, 255, 0.7)",  // purple
    "rgba(255, 159, 64, 0.7)",   // orange
  ];

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-100 via-pink-50 to-purple-100 overflow-hidden">
      <Sidebar />
      <div>

        <div className="absolute top-10 left-8 w-36 h-36 bg-indigo-300 opacity-20 rounded-full animate-float bounce-slow" />
        <div className="absolute bottom-20 right-12 w-28 h-28 bg-pink-400 opacity-20 rounded-full animate-float-delay bounce-slow" />
        <svg className="absolute right-24 top-24 w-28 h-28 opacity-30 animate-float-alt bounce-slower" viewBox="0 0 100 100">
          <polygon points="50,10 10,90 90,90" fill="#f472b6" />
        </svg>
        <div className="absolute left-1/3 bottom-12 w-16 h-16 bg-indigo-200 opacity-20 rounded-lg animate-rotate bounce" />
        <div className="absolute top-1/2 left-[10%] w-5 h-5 bg-purple-400 opacity-50 rounded-full animate-orbit bounce" />

        
        <div className="absolute top-16 right-32 w-24 h-24 bg-purple-300 opacity-15 rounded-full animate-float bounce-slower" />
        <svg className="absolute bottom-28 left-16 w-20 h-20 opacity-25 animate-float-alt bounce" viewBox="0 0 100 100">
          <polygon points="50,10 10,90 90,90" fill="#c084fc" />
        </svg>
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-pink-300 opacity-20 rounded-lg animate-rotate bounce-slow" />

        <div className="absolute bottom-16 right-24 w-4 h-4 bg-indigo-400 opacity-40 rounded-full animate-orbit bounce-slower" />
      </div>
      
      {/* === Colorful Animated Dots === */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {dots.map((_, i) => {
          const size = Math.random() * 8 + 4; // 4px to 12px
          const left = Math.random() * 100; // %
          const delay = Math.random() * 10; // sec
          const duration = Math.random() * 10 + 8; // 8 to 18 sec
          const opacity = Math.random() * 0.5 + 0.3; // 0.3 to 0.8
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
      </div>
      <section className="max-w-2xl w-full mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-700 animate-heading">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-paragraph">
          Hi, I'm <span className="font-bold text-indigo-500">Zuveriya Khan</span> — I’m a passionate Full-Stack Developer 🧑‍💻 and UI/UX Designer 🎨 currently pursuing
          a B.Tech in Computer Science Engineering at Rai University 🎓.
          I merge intuitive design with powerful development to craft digital experiences
          that are both user-friendly and high-performing.
        </p>
      </section>
      <style jsx>{`
        /* Heading fade + scale */
        .animate-heading {
          animation: headingAnim 1s ease forwards;
        }
        @keyframes headingAnim {
          0% { opacity: 0; transform: scale(0.8) translateY(-20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        /* Paragraph slide-up */
        .animate-paragraph {
          animation: paragraphAnim 1.2s ease forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        @keyframes paragraphAnim {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        /* Colorful Dots Animation */
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
          50% { transform: translateY(-50vh) scale(1.2); }
          90% { opacity: 1; }
          100% { transform: translateY(-110vh) scale(0.8); opacity: 0; }
        }
      `}</style>
    </main>
  );
}
