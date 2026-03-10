"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#f4f1ee] overflow-hidden px-6">
      {/* ✨ Animated Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Floating Blob 1 */}
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-200 opacity-30 blur-[140px] rounded-full"
        />

        {/* Floating Blob 2 */}
        <motion.div
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200 opacity-30 blur-[120px] rounded-full"
        />

        {/* Subtle Moving Light Sweep */}
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl"
        />

        {/* Subtle Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main Layout */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 items-center gap-16">

        {/* LEFT SIDE */}
        <div>
          <div className="flex items-start gap-6">
            <div className="w-[3px] h-40 bg-indigo-600 mt-2" />

            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4"
              >
                Designer & Developer Portfolio
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-light text-gray-900 leading-[1.1]"
              >
                I design <br />
                with <span className="italic font-semibold text-indigo-600">
                  emotion
                </span>{" "}
                <br />
                & intention.
              </motion.h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-lg text-gray-600 max-w-lg leading-relaxed"
          >
            Hi, I’m <span className="font-semibold">Zuveriya Khan</span> —
            a creative designer & developer crafting meaningful digital
            experiences that feel human, elegant and alive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex gap-6"
          >
            <motion.a
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
              href="/projects"
              className="text-indigo-600 font-semibold text-lg relative group"
            >
              View Projects
              <span className="block h-[2px] bg-indigo-600 w-0 group-hover:w-full transition-all duration-300 mt-1" />
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
              href="/Pathan Zuveriya.pdf"
              target="_blank"
              className="text-gray-700 font-semibold text-lg relative group"
            >
              Resume
              <span className="block h-[2px] bg-gray-700 w-0 group-hover:w-full transition-all duration-300 mt-1" />
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Profile Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-indigo-300 blur-3xl opacity-30 scale-110" />

            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              src="/profile.jpg"
              alt="Zuveriya Khan"
              className="relative w-[340px] h-[340px] object-cover rounded-full shadow-2xl border-4 border-white"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
