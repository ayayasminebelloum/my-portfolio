const projectsContent = {
  en: {
    title: "PROJECTS",
    projects: [
      {
        name: "AI-Driven Event Management Optimization",
        tags: "Machine Learning / Reinforcement Learning",
        details: [
          "Developed a predictive event recommendation system using deep learning and reinforcement learning to optimize audience engagement and resource allocation.",
          "Applied regression models, NLP, and demand forecasting to enhance event planning and decision-making."
        ]
      },
      {
        name: "ArtifAI – Educational Artist Chatbot",
        tags: "NLP / RAG Pipeline / GPT-2",
        details: [
          "Built a natural-language chatbot delivering historically accurate conversations with 50 famous painters using FAISS, MiniLM embeddings, and GPT-2 fine-tuned on synthetic Q&A.",
          "Achieved high response relevance on consumer-grade hardware (≈1.7s per 75-token reply) without GPU acceleration; lessons informed modular RAG pipeline design and future multimodal/continual learning extensions."
        ]
      },
      {
        name: "AI-Powered Product Recommendation System",
        tags: "Machine Learning / Hybrid Recommender",
        details: [
          "Designed and implemented hybrid recommendation models (content-based, collaborative, popularity) on 14M+ user interactions, increasing engagement and expected conversions.",
          "Iteratively improved model performance through feature engineering, hyperparameter tuning, and metadata optimization."
        ]
      },
      {
        name: "Real-Time Gaze Tracking for Computer Vision",
        tags: "",
        details: [
          "Captured live gaze data via webcam, visualized user attention on advertisements as heatmaps, and mapped gaze points to screen coordinates for actionable insights."
        ]
      },
      {
        name: "Banking App MVP Development",
        tags: "Full-Stack / Software Development / DevOps",
        details: [
          "Developed a cloud-native banking MVP with secure user authentication, transaction management, and CI/CD pipelines using Agile practices.",
          "Collaborated across roles: product vision, backend development, infrastructure automation, and cybersecurity integration."
        ]
      },
      {
        name: "Django Web App with MySQL & MongoDB",
        tags: "Database Design / Full-Stack",
        details: [
          "Built a web application integrating relational (MySQL) and NoSQL (MongoDB) databases, implementing web scraping to populate structured and unstructured datasets.",
          "Designed RESTful APIs, ORM models, and efficient data pipelines for scalable web applications."
        ]
      }
    ]
  },
  // ...other languages...
};

const Projects = ({ lang }) => {
  const t = projectsContent[lang] || projectsContent.en;
  return (
    <section id="projects" className="w-full max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
      {t.projects.map((proj, i) => (
        <div key={i} className="mb-4">
          <div className="font-semibold">{proj.name} <span className="text-sm text-gray-500">{proj.tags}</span></div>
          <ul className="list-disc list-inside ml-4">
            {proj.details.map((d, j) => <li key={j}>{d}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
};
export default Projects;
