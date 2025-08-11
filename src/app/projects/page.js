"use client";

export default function Projects() {
  return (
    <main className="sm:ml-16 min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-pink-50 to-purple-100">
      <section className="max-w-3xl w-full mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-700">Projects</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Example Project Cards */}
          <div className="bg-white shadow rounded-lg p-6 text-left">
            <h2 className="font-bold text-lg text-indigo-700 mb-2">Awesome Portfolio</h2>
            <p className="text-gray-600 mb-2">A responsive, animated portfolio site made with Next.js and Tailwind CSS.</p>
            <a href="https://yourprojecturl.com" target="_blank" rel="noopener" className="text-indigo-500 hover:underline">Live Demo</a>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-left">
            <h2 className="font-bold text-lg text-indigo-700 mb-2">Design System UI Kit</h2>
            <p className="text-gray-600 mb-2">A beautiful Figma UI Kit for rapid design prototyping.</p>
            <a href="https://yourfigmalink.com" target="_blank" rel="noopener" className="text-indigo-500 hover:underline">View on Figma</a>
          </div>
          {/* Add more project cards */}
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
