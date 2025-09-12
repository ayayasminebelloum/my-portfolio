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
import Blog from "../../components/Blog";
import Contact from "../../components/Contact";
import Resume from "../../components/Resume";


// Example translation object (replace with i18n solution later)
const translations = {
  en: { language: "English" },
  fr: { language: "Français" },
  es: { language: "Español" },
  ar: { language: "العربية" },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr" | "es" | "ar">("en");

  // Pass lang as prop to all components for translation
  return (
    <div className="font-sans min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Language Switcher */}
      <div className="flex justify-end p-4 gap-2">
        {Object.keys(translations).map((lng) => (
          <button
            key={lng}
            className={`px-3 py-1 rounded ${
              lang === lng
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setLang(lng as "en" | "fr" | "es" | "ar")}
          >
            {
              translations[lng as keyof typeof translations].language
            }
          </button>
        ))}
      </div>
      {/* Main Content */}
      <main className="flex flex-col gap-12 items-center">
        <Hero lang={lang} />
        <About lang={lang} />
        <Education lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <TechnologyStack lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} />
        <Achievements lang={lang} />
        <Blog lang={lang} />
        <Resume lang={lang} />
      </main>
    </div>
  );
}