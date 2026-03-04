"use client";

import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "React Developer Portfolio",
      description:
        "A responsive and animated portfolio website built with React.js and Tailwind CSS.",
      live: "https://zuveriyakhan.netlify.app/",
      github: "https://github.com/zuveriyakhan05/Zuveriya_Portfolio.git",
    },
    {
      title: "Next.js Designer Portfolio",
      description:
        "A modern portfolio crafted using Next.js and Tailwind CSS with smooth UI animations.",
      live:
        "https://next-js-portfolio-uciy-zuveriyakhan05s-projects.vercel.app/",
      github:
        "https://github.com/zuveriyakhan05/Next.js_Portfolio.git",
    },
    {
      title: "Early Education App (UI/UX)",
      description:
        "A playful and engaging UI design concept for an early childhood education application created in Figma.",
      live: "https://yourfigmalink.com",
      github: null,
    },
  ];

  return (
    <main className="relative min-h-screen w-full flex items-center bg-[#f4f1ee] overflow-hidden px-6">

      <Sidebar />

      {/* Soft Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-200 opacity-30 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200 opacity-30 blur-[120px]" />
      </div>

      <section className="relative z-10 max-w-6xl w-full mx-auto py-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-light text-gray-900">
            My{" "}
            <span className="italic font-semibold text-indigo-600">
              Projects
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl leading-relaxed">
            A curated collection of development and design work focused on
            crafting elegant, responsive and meaningful digital experiences.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-8 text-sm font-semibold">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 transition"
                  >
                    {project.github ? "Live Demo →" : "View Design →"}
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </motion.div>
          ))}

        </div>

      </section>
    </main>
  );
}