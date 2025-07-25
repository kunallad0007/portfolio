import React from "react";
import { Download, Briefcase } from "lucide-react";
import heroDark from "../assets/hero-image-light.svg";
import heroLight from "../assets/hero-image-dark.svg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 pt-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Hero Text + Buttons */}
        <div className="space-y-6 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
            I’m Kunal — a full-stack developer with a passion for clean code,
            bold ideas, and user-first design.
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-xl mx-auto md:mx-0">
            I don’t just build websites — I craft experiences that perform,
            connect, and inspire. Let’s create something unforgettable. 🚀
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <a
              href="/Kunal_Lad_Resume.pdf"
              download
              className="px-6 py-3 bg-rose-600 text-white dark:bg-violet-500 font-semibold rounded-lg shadow-md hover:bg-rose-700 dark:hover:bg-violet-600 transition-all duration-200"
            >
              📄 Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
            >
              💼 Hire Me
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex justify-center">
          <img
            src={heroLight}
            alt="Hero"
            className="block dark:hidden w-full max-w-[320px] sm:max-w-[420px] h-auto"
          />
          <img
            src={heroDark}
            alt="Hero"
            className="hidden dark:block w-full max-w-[320px] sm:max-w-[420px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
