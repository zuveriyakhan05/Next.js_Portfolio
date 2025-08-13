"use client";

export default function Contact() {
  const dotsCount = 10;
  const dots = Array.from({ length: dotsCount });
  const colors = [
    "rgba(255, 99, 132, 0.7)",   // pink
    "rgba(54, 162, 235, 0.7)",   // blue
    "rgba(255, 206, 86, 0.7)",   // yellow
    "rgba(75, 192, 192, 0.7)",   // teal
    "rgba(153, 102, 255, 0.7)",  // purple
    "rgba(255, 159, 64, 0.7)",   // orange
  ];

  return (
    <main className="sm:ml-16 min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-50 to-pink-50 relative overflow-hidden">
      {/* Colorful Animated Dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {dots.map((_, i) => {
          const size = Math.random() * 8 + 4; // 4px to 12px
          const left = Math.random() * 100; // %
          const delay = Math.random() * 10; // sec
          const duration = Math.random() * 10 + 8; // 8 to 18 sec
          const opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8
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

      <section className="max-w-lg w-full mx-auto text-center animate-fade-in relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-700">Get in Touch</h1>
        <p className="text-gray-600 mb-8">Feel free to reach out for collaborations or just a friendly hello!</p>
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(.77,0,.18,1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(32px);}
          to { opacity: 1; transform: translateY(0);}
        }
        /* Animated Colorful Dots */
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
          50% { transform: translateY(-48vh) scale(1.2); }
          90% { opacity: 1; }
          100% { transform: translateY(-110vh) scale(0.85); opacity: 0; }
        }
      `}</style>
    </main>
  );
}
