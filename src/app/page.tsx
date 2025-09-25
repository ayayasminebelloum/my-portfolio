"use client";
import { useState } from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import TechnologyStack from "../../components/TechnologyStack";
import Skills from "../../components/Skills";
import Education from "../../components/Education";
import Achievements from "../../components/Achievements";
import Paper from "../../components/Paper";
import Contact from "../../components/Contact";
import Resume from "../../components/Resume";
import Interests from "../../components/Interests";
import Languages from "../../components/Languages";
import Papers from "../../components/Paper";


// Example translation object (replace with i18n solution later)
const translations = {
  en: { language: "English" },
  fr: { language: "Français" },
  es: { language: "Español" },
  ar: { language: "العربية" },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr" | "es" | "ar">("en");

  // Render sections stacked so native scrolling works
  return (
    <div className="font-sans min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <main className="flex flex-col gap-12 items-center w-full">
        <div id="hero" className="w-full">
          <Hero lang={lang} setLang={setLang} translations={translations} />
        </div>

        <div id="about" className="w-full">
          <About lang={lang} />
        </div>

        <div id="education" className="w-full">
          <Education lang={lang} />
        </div>

        <div id="experience" className="w-full">
          <Experience lang={lang} />
        </div>

        <div id="projects" className="w-full">
          <Projects lang={lang} />
        </div>

        <div id="achievements" className="w-full">
          <Achievements lang={lang} />
        </div>

        <div id="papers" className="w-full">
          <Papers lang={lang} />
        </div>

        <div id="techStack" className="w-full">
          <TechnologyStack lang={lang} />
        </div>

        <div id="skills" className="w-full">
          <Skills lang={lang} />
        </div>

        <div id="interests" className="w-full">
          <Interests lang={lang} />
        </div>

        <div id="languages" className="w-full">
          <Languages lang={lang} />
        </div>

        <div id="contact" className="w-full">
          <Contact lang={lang} />
        </div>

      </main>
    </div>
  );
}