"use client";

import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";

export default function About() {
  return (
    <main className="relative min-h-screen w-full flex items-center bg-[#f4f1ee] overflow-hidden px-6">

      <Sidebar />

      {/* Soft Artistic Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-200 opacity-30 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200 opacity-30 blur-[120px]" />
      </div>

      {/* Centered Content */}
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
            Hi, I’m <span className="font-semibold">Zuveriya Khan</span> —
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