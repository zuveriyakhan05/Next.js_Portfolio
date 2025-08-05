"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 p-8 text-center">
      <h1 className="text-9xl font-extrabold text-indigo-700 animate-fade-in mb-6">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>

      {/* Simple fade-in animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.2s ease forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
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
