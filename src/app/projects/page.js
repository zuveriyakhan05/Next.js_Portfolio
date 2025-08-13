"use client";

export default function Projects() {
  return (
    <main className="sm:ml-16 min-h-screen flex items-center px-4 py-12 bg-gradient-to-br from-pink-50 to-purple-100">
      <section className="max-w-5xl w-full mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-indigo-700">
          Projects
        </h1>

        {/* ==== Development Projects ==== */}
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">Development Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white shadow rounded-lg p-6 text-left">
            <h3 className="font-bold text-lg text-indigo-700 mb-2">React Developer Portfolio</h3>
            <p className="text-gray-600 mb-2">
              A responsive, animated portfolio site made with React.js and Tailwind CSS.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://zuveriyakhan.netlify.app/"
                target="_blank"
                rel="noopener"
                className="text-indigo-500 hover:text-indigo-700"
                aria-label="Live Demo"
              >
                {/* Live Demo Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="https://github.com/yourusername/react-portfolio"
                target="_blank"
                rel="noopener"
                className="text-gray-700 hover:text-gray-900"
                aria-label="Source Code on GitHub"
              >
                {/* GitHub Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.432c.6.112.82-.26.82-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.244 1.84 1.244 1.07 1.83 2.807 1.301 3.492.996.108-.774.418-1.301.76-1.602-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.237-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 016 0c2.292-1.552 3.3-1.23 3.3-1.23.654 1.653.242 2.873.118 3.176.77.842 1.237 1.912 1.237 3.222 0 4.61-2.803 5.623-5.475 5.922.43.37.81 1.1.81 2.222v3.293c0 .32.218.694.825.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ==== Designer Projects ==== */}
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">Designer Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6 text-left">
            <h3 className="font-bold text-lg text-indigo-700 mb-2">Early Education App</h3>
            <p className="text-gray-600 mb-2"></p>
            <div className="flex items-center gap-4">
              <a
                href="https://yourfigmalink.com"
                target="_blank"
                rel="noopener"
                className="text-indigo-500 hover:text-indigo-700"
                aria-label="View on Figma"
              >
                {/* Figma Icon (using SVG) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a5 5 0 100 10 5 5 0 000-10zm0 12a4 4 0 014 4v4h-8v-4a4 4 0 014-4zM6 14v6H4v-6h2zm12 0v6h-2v-6h2z" />
                </svg>
              </a>
              <a
                href="https://github.com/yourusername/education-app-design"
                target="_blank"
                rel="noopener"
                className="text-gray-700 hover:text-gray-900"
                aria-label="Source Code on GitHub"
              >
                {/* GitHub Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.432c.6.112.82-.26.82-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.244 1.84 1.244 1.07 1.83 2.807 1.301 3.492.996.108-.774.418-1.301.76-1.602-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.237-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 016 0c2.292-1.552 3.3-1.23 3.3-1.23.654 1.653.242 2.873.118 3.176.77.842 1.237 1.912 1.237 3.222 0 4.61-2.803 5.623-5.475 5.922.43.37.81 1.1.81 2.222v3.293c0 .32.218.694.825.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(.77, 0, .18, 1) both;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(32px);
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
