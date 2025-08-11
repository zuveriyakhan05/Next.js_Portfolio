"use client";

export default function About() {
  return (
    <main className="sm:ml-16 min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <section className="max-w-2xl w-full mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-700">About Me</h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          {/* Replace with your bio */}
          Hi, I'm Zuveriya Khan—a creative designer & developer passionate about building beautiful, usable experiences. I craft modern UIs, design seamless flows, and bring ideas to digital life!
        </p>
      </section>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(.77,0,.18,1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(32px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </main>
  );
}
