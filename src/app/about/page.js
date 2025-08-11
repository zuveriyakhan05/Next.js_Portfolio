"use client";

export default function About() {
  return (
    <main className="relative sm:ml-16 min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      {/* Decorative floating shapes */}
      <div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-300 opacity-20 rounded-full animate-float-slow" />
        <div className="absolute bottom-16 right-16 w-24 h-24 bg-pink-300 opacity-20 rounded-full animate-float-delay" />
        <svg
          className="absolute right-1/3 top-1/4 w-16 h-16 opacity-30 animate-rotate-slow"
          viewBox="0 0 100 100"
        >
          <polygon points="50,10 10,90 90,90" fill="#a78bfa" />
        </svg>
      </div>

      <section className="max-w-2xl w-full mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-700 animate-heading">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-paragraph">
          Hi, I'm <span className="font-bold text-indigo-500">Zuveriya Khan</span> —  I’m a passionate Full-Stack Developer 🧑‍💻 and UI/UX Designer 🎨 currently pursuing
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
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Paragraph slide-up */
        .animate-paragraph {
          animation: paragraphAnim 1.2s ease forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        @keyframes paragraphAnim {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Background shape animations */
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 10s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 8s 2s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-rotate-slow {
          animation: rotate 20s linear infinite;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}
