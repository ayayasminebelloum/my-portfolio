const Languages = ({ lang = 'en' }) => {
  const content = {
    en: {
      title: "Languages",
      languages: [
        { name: "English", level: "Fluent" },
        { name: "French", level: "Native" },
        { name: "Arabic", level: "Native" },
        { name: "Spanish", level: "Intermediate" }
      ]
    },
    fr: {
      title: "Langues",
      languages: [
        { name: "Anglais", level: "Courant" },
        { name: "Français", level: "Langue maternelle" },
        { name: "Arabe", level: "Langue maternelle" },
        { name: "Espagnol", level: "Intermédiaire" }
      ]
    },
    es: {
      title: "Idiomas",
      languages: [
        { name: "Inglés", level: "Fluido" },
        { name: "Francés", level: "Nativo" },
        { name: "Árabe", level: "Nativo" },
        { name: "Español", level: "Intermedio" }
      ]
    },
    ar: {
      title: "اللغات",
      languages: [
        { name: "الإنجليزية", level: "طلاقة" },
        { name: "الفرنسية", level: "لغة أم" },
        { name: "العربية", level: "لغة أم" },
        { name: "الإسبانية", level: "متوسط" }
      ]
    }
  };

  const localContent = content[lang] || content.en;

  return (
    <section id="languages" className="card-section">
      <h2 className="text-3xl font-bold mb-6">{localContent.title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {localContent.languages.map((lang, index) => (
          <div key={index} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="font-bold">{lang.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
