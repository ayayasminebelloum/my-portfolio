const achievementsContent = {
  en: {
    title: "ACHIEVEMENTS & HACKATHONS",
    items: [
      {
        role: "Datathon Participant",
        org: "IESciTech",
        period: "11/2023 - 12/2023",
        details: [
          "Competed in the IESciTech Datathon, leveraging data science and AI techniques to solve real-world challenges.",
          "Applied machine learning, statistical analysis, and data visualization to uncover insights and optimize decision-making processes."
        ]
      },
      {
        role: "Hackathon Participant",
        org: "IE University - Madrid, Spain",
        period: "",
        details: [
          "Participated in a hackathon focused on extracting structured data from PDF documents, such as term sheets and investment conditions.",
          "Utilized Python to build a solution that extracted essential fields, including Name, ISIN, Issuer, Currency (Ccy), Underlyings, Strike, Issue Date, Maturity, Cap, Barrier, etc.",
          "Implemented a PDF loader or OCR solution, exploring various models like Unstructured or custom-built options to extract data effectively.",
          "Evaluated the project based on extracted metrics, accuracy rate, and efficiency of the runtime (few seconds per document).",
          "Delivered the final project as a structured Python folder with CSV output files containing extracted data fields.",
          "Followed key requirements such as handling missing or differently named fields, ensuring runtime efficiency, and leveraging external datasets available to the company.",
          "Explored alternatives to Large Language Models (LLMs) and OpenAI for data extraction, focusing on accuracy and compliance with hackathon rules."
        ]
      }
    ]
  },
  // ...other languages...
};

const Achievements = ({ lang }) => {
  const t = achievementsContent[lang] || achievementsContent.en;
  return (
    <section id="achievements" className="w-full max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
      {t.items.map((item, i) => (
        <div key={i} className="mb-4">
          <div className="font-semibold">{item.role} {item.org && <>| {item.org}</>} {item.period && <>| {item.period}</>}</div>
          <ul className="list-disc list-inside ml-4">
            {item.details.map((d, j) => <li key={j}>{d}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Achievements;
