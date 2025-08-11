"use client";

export default function Skills() {
  return (
    <main className="sm:ml-16 min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-green-50 to-cyan-50">
      <section className="max-w-2xl w-full mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-700">My Skills</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          {/* Add your own stack! */}
          <span className="px-4 py-2 bg-indigo-100 rounded-full font-semibold text-indigo-700">React</span>
          <span className="px-4 py-2 bg-pink-100 rounded-full font-semibold text-pink-700">Tailwind CSS</span>
          <span className="px-4 py-2 bg-green-100 rounded-full font-semibold text-green-700">Figma</span>
          <span className="px-4 py-2 bg-yellow-100 rounded-full font-semibold text-yellow-700">JavaScript</span>
          <span className="px-4 py-2 bg-blue-100 rounded-full font-semibold text-blue-700">Next.js</span>
        </div>
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
