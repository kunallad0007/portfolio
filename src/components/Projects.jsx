// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Cooking Veda",
    description:
      "A voice-controlled cooking assistant app built using Kotlin + Jetpack Compose.",
    link: "https://github.com/kunallad0007/Cooking-Veda",
  },
  {
    title: "StoreMaster",
    description:
      "A local store management system for Android & Web — currently under development.",
    link: "#", // You can update this later
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-black text-black dark:text-white scroll-mt-24"
    >
      <div className="max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-10">📂 My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm font-semibold text-rose-600 dark:text-violet-400 hover:underline"
              >
                🔗 View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
