const techContent = {
  en: {
    title: "TECHNOLOGY STACK",
    stack: [
      "Python, Java, C++, C, HTML, JavaScript",
      "Machine Learning & AI: TensorFlow, PyTorch, Scikit-learn, Deep Learning, Reinforcement Learning, NLP, AI Ethics",
      "Data Analysis & Visualization: Pandas, NumPy, Matplotlib, Seaborn, Statistical Analysis",
      "Databases: SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Firebase), Structured & Unstructured Data",
      "Software Development & DevOps: Django, Flask, Full-Stack Development, Docker, Kubernetes, CI/CD, Agile/Scrum, SDLC",
      "Cloud: AWS, Google Cloud, Azure",
      "Cybersecurity: OAuth, JWT, Secure Coding, API Security",
      "CS Concepts: Data Structures, Algorithms, OOP, Cloud-Native Architecture"
    ]
  },
  // ...other languages...
};

const TechnologyStack = ({ lang }) => {
  const t = techContent[lang] || techContent.en;
  return (
    <section id="tech-stack" className="w-full max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
      <ul className="list-disc list-inside ml-4">
        {t.stack.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </section>
  );
};
export default TechnologyStack;
