"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function About() {

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center bg-[#f4f1ee] overflow-hidden px-6"
    >

      <Sidebar />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* BREATHING GRADIENT BLOBS */}
      <div className="absolute inset-0">

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-100px] left-[-120px] w-[600px] h-[600px] bg-indigo-300 opacity-30 blur-[160px]"
        />

        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-pink-300 opacity-30 blur-[150px]"
        />

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-purple-300 opacity-20 blur-[140px]"
        />

      </div>

      {/* MOUSE FOLLOW LIGHT */}
      <div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: "radial-gradient(circle, white, transparent 70%)",
          left: mouse.x - 250,
          top: mouse.y - 250
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 }
            }
          }}
        >

          <div className="flex items-start gap-6">

            <motion.div
              variants={{
                hidden: { height: 0, opacity: 0 },
                visible: { height: 160, opacity: 1 }
              }}
              transition={{ duration: 0.8 }}
              className="w-[3px] bg-indigo-600 mt-2"
            />

            <div>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4"
              >
                Get to know me
              </motion.p>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.9 }}
                className="text-5xl md:text-6xl font-light text-gray-900 leading-[1.1]"
              >
                Designing with <br />
                <span className="italic font-semibold text-indigo-600">
                  purpose
                </span>{" "}
                & passion.
              </motion.h1>

            </div>

          </div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="mt-10 text-lg text-gray-600 max-w-2xl leading-relaxed"
          >
            Hi, I&apos;m <span className="font-semibold">Zuveriya Khan</span> —
            a Full-Stack Developer and UI/UX Designer pursuing
            B.Tech in Computer Science Engineering.
            <br /><br />
            I blend creativity with logic to craft meaningful digital
            experiences that feel elegant, intuitive, and human-centered.
            My focus lies in building high-performing applications
            wrapped in thoughtful design.
          </motion.p>

        </motion.div>

      </div>

    </main>
  );
}