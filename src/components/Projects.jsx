// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-black text-black dark:text-white scroll-mt-24"
    >
      <div className="max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-8">📂 My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Cards */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Cooking Veda</h3>
            <p>
              A voice-controlled cooking assistant app made using Kotlin +
              Jetpack Compose.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">StoreMaster</h3>
            <p>
              A local store management system app for Android & Web — still
              under development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
