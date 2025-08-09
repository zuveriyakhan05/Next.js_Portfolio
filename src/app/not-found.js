"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 p-8 text-center overflow-hidden">
      {/* 🔵 Animated decorative shapes */}
      <div>
        {/* Large floating circle top-left */}
        <div className="absolute top-10 left-10 w-36 h-36 bg-indigo-300 opacity-30 rounded-full animate-float-slow" />
        {/* Medium floating circle bottom-right */}
        <div className="absolute bottom-16 right-16 w-28 h-28 bg-pink-400 opacity-30 rounded-full animate-float-delay" />
        {/* Floating triangle */}
        <svg
          className="absolute right-24 top-1/2 w-24 h-24 opacity-40 animate-rotate-slow"
          viewBox="0 0 100 100"
        >
          <polygon points="50,10 10,90 90,90" fill="#f472b6" />
        </svg>
        {/* Small floating square */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-10 h-10 bg-indigo-200 opacity-30 rounded-lg animate-float" />

        {/* New shapes below */}

        {/* Floating diamond (rotated square) bottom-left */}
        <div className="absolute bottom-24 left-12 w-16 h-16 bg-purple-400 opacity-25 rounded-lg rotate-45 animate-float-delay" />

        {/* Floating pentagon top-center */}
        <svg
          className="absolute top-14 left-1/2 -translate-x-1/2 w-20 h-20 opacity-30 animate-rotate-slower"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,5 90,38 72,95 28,95 10,38"
            fill="#d946ef"
          />
        </svg>

        {/* Floating star bottom-center */}
        <svg
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-12 h-12 opacity-20 animate-float-slow"
          viewBox="0 0 24 24"
          fill="#fda4af"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>

        {/* Floating ellipse top-right, rotated */}
        <div className="absolute top-16 right-32 w-28 h-14 bg-pink-300 opacity-15 rounded-full rotate-12 animate-float-slower" />
      </div>

      {/* Big 404 with scale & fade */}
      <h1 className="text-9xl font-extrabold text-indigo-700 animate-zoom-in mb-6 drop-shadow-lg relative z-10">
        404
      </h1>

      {/* Heading slides in */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 animate-slide-down relative z-10">
        Page Not Found
      </h2>

      {/* Paragraph fades up */}
      <p className="text-gray-700 mb-8 max-w-md animate-fade-up relative z-10">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>

      {/* Pulsing glow button */}
      <Link
        href="/"
        className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition animate-pulse-glow relative z-10"
      >
        Go Back Home
      </Link>

      {/* ✨ Animations */}
      <style jsx>{`
        /* Big Zoom In */
        .animate-zoom-in {
          animation: zoomIn 1s ease forwards;
        }
        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Slide down for heading */
        .animate-slide-down {
          animation: slideDown 1.2s ease forwards;
        }
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Fade up for paragraph */
        .animate-fade-up {
          animation: fadeUp 1.4s ease forwards;
        }
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Glow Pulse for button */
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0px rgba(99, 102, 241, 0.8);
          }
          50% {
            box-shadow: 0 0 25px rgba(99, 102, 241, 0.7);
          }
          100% {
            box-shadow: 0 0 0px rgba(99, 102, 241, 0.8);
          }
        }

        /* Floating animations for background shapes */
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
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Slow rotation for triangle */
        .animate-rotate-slow {
          animation: rotate 15s linear infinite;
        }
        /* Slower rotation for pentagon */
        .animate-rotate-slower {
          animation: rotate 25s linear infinite;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </main>
  );
}
