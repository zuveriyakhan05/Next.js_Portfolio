"use client";
import Sidebar from "@/components/Sidebar"; 

export default function Projects() {
  // For animated dots
  const dotsCount = 10;
  const colors = [
    "rgba(255, 99, 132, 0.7)",   // pink/red
    "rgba(54, 162, 235, 0.7)",   // blue
    "rgba(255, 206, 86, 0.7)",   // yellow
    "rgba(75, 192, 192, 0.7)",   // teal
    "rgba(153, 102, 255, 0.7)",  // purple
    "rgba(255, 159, 64, 0.7)",   // orange
  ];

  return (
    <main className="relative sm:ml-16 min-h-screen flex items-center px-4 py-12 bg-gradient-to-br from-pink-50 to-purple-100 overflow-hidden">
      {/* = Decorative Animated Shapes = */}
      <div>
        {/* Large top-left circle */}
        <div className="absolute top-8 left-8 w-36 h-36 bg-indigo-300 opacity-20 rounded-full animate-float" />
        {/* Top-right triangle */}
        <svg className="absolute right-20 top-24 w-24 h-24 opacity-30 animate-float-alt" viewBox="0 0 100 100">
          <polygon points="50,10 10,90 90,90" fill="#f472b6" />
        </svg>
        {/* Bottom-left triangle */}
        <svg className="absolute bottom-20 left-16 w-20 h-20 opacity-20 animate-float" viewBox="0 0 100 100">
          <polygon points="50,10 10,90 90,90" fill="#c084fc" />
        </svg>
        {/* Bottom-right circle */}
        <div className="absolute bottom-12 right-20 w-24 h-24 bg-pink-400 opacity-20 rounded-full animate-float-delay" />
        {/* Center spinning square */}
        <div className="absolute left-1/3 bottom-10 w-16 h-16 bg-indigo-200 opacity-20 rounded-lg animate-rotate" />
        {/* Floating dot (top-middle) */}
        <div className="absolute top-1/2 left-[10%] w-5 h-5 bg-purple-400 opacity-50 rounded-full animate-orbit" />
        {/* Top-right small circle */}
        <div className="absolute top-16 right-32 w-24 h-24 bg-purple-300 opacity-10 rounded-full animate-float" />
        {/* Top-center pastel square */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-pink-300 opacity-20 rounded-lg animate-rotate" />
        {/* Bottom-right tiny circle */}
        <div className="absolute bottom-16 right-28 w-4 h-4 bg-indigo-400 opacity-40 rounded-full animate-orbit" />
      </div>

      {/* === Colorful Animated Dots === */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: dotsCount }).map((_, i) => {
          const size = Math.random() * 8 + 4; // 4px to 12px
          const left = Math.random() * 100;   // %
          const delay = Math.random() * 10;   // sec
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

      <Sidebar />

      <section className="max-w-5xl w-full mx-auto text-center animate-fade-in relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-indigo-700">
          Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Project 1 */}
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
                href="https://github.com/zuveriyakhan05/Zuveriya_Portfolio.git"
                target="_blank"
                rel="noopener"
                className="text-gray-700 hover:text-gray-900"
                aria-label="Source Code on GitHub"
              >
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

          {/* Project 2 on right side */}
          {/* <div className="bg-white shadow rounded-lg p-6 text-left">
            <h3 className="font-bold text-lg text-indigo-700 mb-2">Task Manager App</h3>
            <p className="text-gray-600 mb-2">
              A full-stack MERN app to manage daily tasks with authentication and beautiful dashboard UI.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://your-task-manager-live-link.com"
                target="_blank"
                rel="noopener"
                className="text-indigo-500 hover:text-indigo-700"
                aria-label="Live Demo"
              >
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
                href="https://github.com/zuveriyakhan05/task-manager-app"
                target="_blank"
                rel="noopener"
                className="text-gray-700 hover:text-gray-900"
                aria-label="Source Code on GitHub"
              >
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
          </div> */}

          {/* Project 3 on right side next row */}
          <div className="bg-white shadow rounded-lg p-6 text-left">
            <h3 className="font-bold text-lg text-indigo-700 mb-2"> Next.js Designer Portfolio</h3>
            <p className="text-gray-600 mb-2">A responsive, animated portfolio site made with Next.js and Tailwind CSS.            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://next-js-portfolio-uciy-zuveriyakhan05s-projects.vercel.app/"
                target="_blank"
                rel="noopener"
                className="text-indigo-500 hover:text-indigo-700"
                aria-label="Live Demo"
              >
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
                href="https://github.com/zuveriyakhan05/Next.js_Portfolio.git"
                target="_blank"
                rel="noopener"
                className="text-gray-700 hover:text-gray-900"
                aria-label="Source Code on GitHub"
              >
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
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white shadow rounded-lg p-6 text-left">
            <h3 className="font-bold text-lg text-indigo-700 mb-2">Early Education App</h3>
            <p className="text-gray-600 mb-2"></p>
            <div className="flex items-center gap-4">
              <a
                href="https://yourfigmalink.com"
                target="_blank"
                rel="noopener"
                className="text-indigo-500 hover:text-indigo-700"
                aria-label="View in Figma"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 40 60" fill="none" className="h-6 w-6 inline">
                  <rect x="0" y="0" width="20" height="20" rx="10" fill="#F24E1E"/>
                  <rect x="0" y="20" width="20" height="20" rx="10" fill="#A259FF"/>
                  <rect x="0" y="40" width="20" height="20" rx="10" fill="#0ACF83"/>
                  <rect x="20" y="0" width="20" height="20" rx="10" fill="#FF7262"/>
                  <circle cx="30" cy="30" r="10" fill="#1ABCFE"/>
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
        /* Animated shapes */
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 12s 2s ease-in-out infinite;
        }
        .animate-float-alt {
          animation: floatAlt 14s 1s ease-in-out infinite;
        }
        .animate-rotate {
          animation: rotate 18s linear infinite;
        }
        .animate-orbit {
          animation: orbit 8s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px);}
          50% { transform: translateY(-24px);}
        }
        @keyframes floatAlt {
          0%, 100% { transform: translateY(0px);}
          50% { transform: translateY(32px);}
        }
        @keyframes rotate {
          from { transform: rotate(0deg);}
          to { transform: rotate(360deg);}
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(0);}
          100% { transform: rotate(360deg) translateX(16px);}
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
