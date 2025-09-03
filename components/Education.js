const educationContent = {
  en: {
    title: "EDUCATION",
    schools: [
      {
        name: "GEMS American Academy - Doha, Qatar",
        period: "06/2022",
        degree: "Grade 11 and 12 High School",
        achievements: [
          "Honours Student Academic Achievement Award",
          "Coursework in AP Computer Science",
          "Coursework in AP Calculus",
          "Coursework in AP Physics",
          "Coursework in AP Chemistry",
        ],
      },
      {
        name: "IE University",
        period: "2022-2026",
        degree: "Bachelor’s Program in Computer Science & Artificial Intelligence",
        coursework: [
          "Programming I & II",
          "Algorithms & Data Structures",
          "High-Performance Computing",
          "Software Development & DevOps",
          "Database Design",
          "Discrete Mathematics",
          "Calculus",
          "Probability & Statistics",
          "Data Analysis",
          "Machine Learning",
          "Reinforcement Learning",
          "Natural Language Processing",
          "Computer Vision",
          "AI Reasoning & Problem Solving",
          "Chatbots & Recommendation Engines",
          "Project Management & Innovation",
        ],
      },
    ],
  },
  // Add other languages here
};

const Education = ({ lang }) => {
  const t = educationContent[lang] || educationContent.en;
  return (
    <section id="education" className="w-full max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
      {t.schools.map((school, i) => (
        <div key={i} className="mb-4">
          <div className="font-semibold">
            {school.name}{" "}
            {school.period && `| ${school.period}`}
          </div>
          <div className="mb-1">{school.degree}</div>
          {school.achievements && (
            <ul className="list-disc list-inside ml-4 mb-2">
              {school.achievements.map((a, j) => (
                <li key={j}>{a}</li>
              ))}
            </ul>
          )}
          {school.coursework && (
            <div>
              <span className="font-semibold">Key coursework:</span>
              <ul className="list-disc list-inside ml-4">
                {school.coursework.map((c, j) => (
                  <li key={j}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};
export default Education;
