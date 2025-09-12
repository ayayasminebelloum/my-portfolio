const Interests = ({ lang = 'en' }) => {
  const content = {
    en: {
      title: "Interests",
      items: ["Artificial Intelligence", "Machine Learning", "Reading", "Photography"]
    },
    fr: {
      title: "Intérêts",
      items: ["Intelligence Artificielle", "Apprentissage Automatique", "Lecture", "Photographie"]
    },
    es: {
      title: "Intereses",
      items: ["Inteligencia Artificial", "Aprendizaje Automático", "Lectura", "Fotografía"]
    },
    ar: {
      title: "الاهتمامات",
      items: ["الذكاء الاصطناعي", "تعلم الآلة", "القراءة", "التصوير"]
    }
  };

  const localContent = content[lang] || content.en;

  return (
    <section id="interests" className="card-section">
      <h2 className="text-3xl font-bold mb-6">{localContent.title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {localContent.items.map((item, index) => (
          <div key={index} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
