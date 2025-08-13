"use client";

export default function Contact() {
  return (
    <main className="sm:ml-16 min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-50 to-pink-50">
      <section className="max-w-lg w-full mx-auto text-center animate-fade-in">
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
      `}</style>
    </main>
  );
}
