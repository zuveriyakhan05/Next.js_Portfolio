"use client";

import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbaeavn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setStatus("✨ Thanks for your message! I'll get back to you soon.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Could not send. Please try again.");
    }

    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <main className="relative min-h-screen w-full flex items-center bg-[#f4f1ee] overflow-hidden px-6">

      <Sidebar />

      {/* Soft Background (matching other pages) */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-200 opacity-30 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200 opacity-30 blur-[120px]" />
      </div>

      <section className="relative z-10 max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center py-20">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight">
            Let’s build something{" "}
            <span className="italic font-semibold text-indigo-600">
              amazing
            </span>
          </h1>

          <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-md">
            I'm always open to new opportunities, collaborations, and creative
            ideas. If you have a project in mind — let’s talk and make it real.
          </p>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-10 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <div>
              <label className="text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
            >
              Send Message →
            </button>

            {status && (
              <p className="text-sm font-medium text-indigo-600 mt-2">
                {status}
              </p>
            )}
          </form>
        </motion.div>

      </section>
    </main>
  );
}