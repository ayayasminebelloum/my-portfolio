const experienceContent = {
  en: {
    title: "WORK EXPERIENCE",
    jobs: [
      {
        company: "Qatar Gas Transport Company Ltd (NAKILAT)",
        period: "July 2025 - October 2025",
        role: "AI & Data Engineer / Document AI Specialist",
        details: [
          "Developed an in-house alternative to Azure Form Recognizer for automated invoice processing, building a full OCR and structured extraction pipeline and a reinforcement learning agent that learns from human database corrections to continuously improve accuracy."
        ]
      },
      {
        company: "Kongsberg Maritime Services",
        period: "October 2025 - December 2025",
        role: "Machine Learning Intern",
        details: [
          "Designed and deployed advanced ML models on complex industrial datasets, applying explainable AI techniques to deliver interpretable, actionable insights while leading end-to-end preprocessing, feature engineering, evaluation, and visualization."
        ]
      }
    ]
  },
  // Add other languages here
};

const Experience = ({ lang }) => {
  const t = experienceContent[lang] || experienceContent.en;
  return (
    <section id="experience" className="w-full max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
      {t.jobs.map((job, i) => (
        <div key={i} className="mb-4">
          <div className="font-semibold">{job.company} | {job.period}</div>
          <div className="italic">{job.role}</div>
          <ul className="list-disc list-inside ml-4">
            {job.details.map((d, j) => <li key={j}>{d}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
};
export default Experience;
