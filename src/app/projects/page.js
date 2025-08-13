"use client";

export default function Projects() {
  return (
    <main className="sm:ml-16 min-h-screen flex items-center px-4 py-12 bg-gradient-to-br from-pink-50 to-purple-100">
      <section className="max-w-5xl w-full mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-indigo-700">
          Projects
        </h1>

        {/* Development Projects */}
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
                {/* Play button icon for Live Demo */}
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-6 w-6 inline" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor" 
                     strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 8l6 4-6 4V8z" />
                </svg>
              </a>
              <a
                href="https://github.com/yourusername/react-portfolio"
                target="_blank"
                rel="noopener"
                className="text-gray-700 hover:text-gray-900"
                aria-label="Source Code on GitHub"
              >
                {/* Fixed GitHub Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.475 2 2 6.475 2 12c0 4.418 2.865 8.166 6.839 9.489.5.091.682-.217.682-.483 0-.238-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.004.07 1.532 1.031 1.532 1.031.893 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.22-.252-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.447-1.27.098-2.648 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.845a9.6 9.6 0 012.504.336c1.91-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.395.099 2.648.64.7 1.028 1.594 1.028 2.687 0 3.848-2.338 4.697-4.566 4.945.359.309.679.92.679 1.855 0 1.339-.012 2.422-.012 2.751 0 .268.18.577.688.48C19.138 20.162 22 16.417 22 12c0-5.525-4.475-10-10-10z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Designer Projects */}
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
                aria-label="Live Demo"
              >
                {/* Play button icon for Live Demo */}
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-6 w-6 inline" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor" 
                     strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 8l6 4-6 4V8z" />
                </svg>
              </a>
              <a
                href="https://github.com/yourusername/education-design"
                target="_blank"
                rel="noopener"
                className="text-gray-700 hover:text-gray-900"
                aria-label="Source Code on GitHub"
              >
                {/* Fixed GitHub Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.475 2 2 6.475 2 12c0 4.418 2.865 8.166 6.839 9.489.5.091.682-.217.682-.483 0-.238-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.004.07 1.532 1.031 1.532 1.031.893 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.22-.252-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.447-1.27.098-2.648 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.845a9.6 9.6 0 012.504.336c1.91-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.395.099 2.648.64.7 1.028 1.594 1.028 2.687 0 3.848-2.338 4.697-4.566 4.945.359.309.679.92.679 1.855 0 1.339-.012 2.422-.012 2.751 0 .268.18.577.688.48C19.138 20.162 22 16.417 22 12c0-5.525-4.475-10-10-10z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(0.77, 0, 0.18, 1) both;
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
