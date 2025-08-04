"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 overflow-hidden">
      {/* Animated decorative shapes */}
      <div>
        {/* Existing shapes */}
        <div className="absolute top-10 left-8 w-36 h-36 bg-indigo-300 opacity-20 rounded-full animate-float bounce-slow" />
        <div className="absolute bottom-20 right-12 w-28 h-28 bg-pink-400 opacity-20 rounded-full animate-float-delay bounce-slow" />
        <svg className="absolute right-24 top-24 w-28 h-28 opacity-30 animate-float-alt bounce-slower" viewBox="0 0 100 100">
          <polygon points="50,10 10,90 90,90" fill="#f472b6" />
        </svg>
        <div className="absolute left-1/3 bottom-12 w-16 h-16 bg-indigo-200 opacity-20 rounded-lg animate-rotate bounce" />
        <div className="absolute top-1/2 left-[10%] w-5 h-5 bg-purple-400 opacity-50 rounded-full animate-orbit bounce" />

        {/* New additional shapes */}
        {/* Floating circle top-right */}
        <div className="absolute top-16 right-32 w-24 h-24 bg-purple-300 opacity-15 rounded-full animate-float bounce-slower" />
        {/* Floating triangle bottom-left */}
        <svg className="absolute bottom-28 left-16 w-20 h-20 opacity-25 animate-float-alt bounce" viewBox="0 0 100 100">
          <polygon points="50,10 10,90 90,90" fill="#c084fc" />
        </svg>
        {/* Floating square top-center */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-pink-300 opacity-20 rounded-lg animate-rotate bounce-slow" />
        {/* Small orbiting dot bottom-right */}
        <div className="absolute bottom-16 right-24 w-4 h-4 bg-indigo-400 opacity-40 rounded-full animate-orbit bounce-slower" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-down scale-up">
          Hi, I'm <span className="text-indigo-600 drop-shadow-lg">Zuveriya Khan</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 text-gray-200 mb-4 animate-fade scale-up delay-150">
          Creative Designer &amp; Developer
        </h2>
        <p className="text-gray-600 text-gray-300 mb-8 animate-fade-up scale-up delay-300">
          I design stunning interfaces and seamless digital experiences.
        </p>
        <a
          href="#portfolio"
          className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition animate-fade-up scale-up delay-500"
        >
          View My Work
        </a>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        /* Float up and down */
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 8s 2s ease-in-out infinite;
        }
        .animate-float-alt {
          animation: floatAlt 10s 1s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-24px);}
        }
        @keyframes floatAlt {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(28px);}
        }

        /* Rotate effect for squares */
        .animate-rotate {
          animation: rotate 12s linear infinite;
        }
        @keyframes rotate {
          from { transform: rotate(0deg);}
          to { transform: rotate(360deg);}
        }

        /* Orbit effect for dot */
        .animate-orbit {
          animation: orbit 8s linear infinite;
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(0);}
          100% { transform: rotate(360deg) translateX(100px);}
        }

        /* Bounce effects added for extra motion */
        @keyframes bounce {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-10px);}
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

        /* Fade effects */
        .animate-fade-down {
          animation: fadeDown 1.1s ease forwards;
        }
        .animate-fade {
          animation: fadeIn 1.2s 0.5s ease forwards;
        }
        .animate-fade-up {
          animation: fadeUp 1.1s 1s ease forwards;
        }

        /* Scale up for pleasant zoom on load */
        .scale-up {
          animation-name: scaleUp;
          animation-duration: 0.8s;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fadeDown {
          0% { opacity: 0; transform: translateY(-32px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(32px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9);}
          to { opacity: 1; transform: scale(1);}
        }
      `}</style>
    </section>
  );
}
