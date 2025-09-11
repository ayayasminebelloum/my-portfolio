const skillsContent = {
  en: {
    title: "SKILLS",
    skills: [
      "Project Management",
      "Structural Analysis",
      "Robotics and Automation",
      "Researching",
      "Program development",
      "Data Analysis",
      "Innovation & Creativity",
      "Adaptability",
      "Presentation Skills"
    ]
  },
  // Add other languages here
};

const Skills = ({ lang }) => {
  const t = skillsContent[lang] || skillsContent.en;
  return (
    <section id="skills" className="w-full max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
      <ul className="list-disc list-inside ml-4">
        {t.skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </section>
  );
};

export default Skills;
 