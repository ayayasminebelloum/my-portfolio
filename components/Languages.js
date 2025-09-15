const Languages = ({ lang = 'en' }) => {
  const content = {
    en: {
      title: "Languages",
      languages: [
        {
          name: "Arabic",
          level: "Native or bilingual proficiency",
          proficiency: 10
        },
        {
          name: "Berber languages",
          level: "Native or bilingual proficiency",
          proficiency: 10
        },
        {
          name: "English",
          level: "Native or bilingual proficiency",
          proficiency: 10
        },
        {
          name: "French",
          level: "Native or bilingual proficiency",
          proficiency: 10
        },
        {
          name: "Spanish",
          level: "Limited working proficiency",
          proficiency: 7
        },
        {
          name: "Turkish",
          level: "Full professional proficiency",
          proficiency: 9
        }
      ]
    },
    fr: {
      title: "Langues",
      languages: [
        {
          name: "Arabe",
          level: "Langue maternelle ou bilingue",
          proficiency: 10
        },
        {
          name: "Langues berbères",
          level: "Langue maternelle ou bilingue",
          proficiency: 10
        },
        {
          name: "Anglais",
          level: "Langue maternelle ou bilingue",
          proficiency: 10
        },
        {
          name: "Français",
          level: "Langue maternelle ou bilingue",
          proficiency: 10
        },
        {
          name: "Espagnol",
          level: "Compétence professionnelle limitée",
          proficiency: 7
        },
        {
          name: "Turc",
          level: "Compétence professionnelle complète",
          proficiency: 9
        }
      ]
    },
    es: {
      title: "Idiomas",
      languages: [
        {
          name: "Árabe",
          level: "Competencia nativa o bilingüe",
          proficiency: 10
        },
        {
          name: "Lenguas bereberes",
          level: "Competencia nativa o bilingüe",
          proficiency: 10
        },
        {
          name: "Inglés",
          level: "Competencia nativa o bilingüe",
          proficiency: 10
        },
        {
          name: "Francés",
          level: "Competencia nativa o bilingüe",
          proficiency: 10
        },
        {
          name: "Español",
          level: "Competencia profesional limitada",
          proficiency: 7
        },
        {
          name: "Turco",
          level: "Competencia profesional completa",
          proficiency: 9
        }
      ]
    },
    ar: {
      title: "اللغات",
      languages: [
        {
          name: "العربية",
          level: "اللغة الأم أو الكفاءة الثنائية",
          proficiency: 10
        },
        {
          name: "اللغات الأمازيغية",
          level: "اللغة الأم أو الكفاءة الثنائية",
          proficiency: 10
        },
        {
          name: "الإنجليزية",
          level: "اللغة الأم أو الكفاءة الثنائية",
          proficiency: 10
        },
        {
          name: "الفرنسية",
          level: "اللغة الأم أو الكفاءة الثنائية",
          proficiency: 10
        },
        {
          name: "الإسبانية",
          level: "كفاءة مهنية محدودة",
          proficiency: 7
        },
        {
          name: "التركية",
          level: "كفاءة مهنية كاملة",
          proficiency: 9
        }
      ]
    }
  };

  const localContent = content[lang] || content.en;
  const totalDots = 10;

  // Sort languages by proficiency in descending order
  const sortedLanguages = [...localContent.languages].sort((a, b) => b.proficiency - a.proficiency);

  return (
    <section 
      id="languages" 
      className="w-full py-16 px-4"
      style={{
        backgroundColor: '#f5f5f5', // Changed to light grey
        minHeight: '665px',
        minWidth: '700px'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-black text-center">
          {localContent.title}
        </h2>
        <p className="text-xl mb-8 text-black text-center">
          {localContent.subtitle}
        </p>
        
        <div className="space-y-8">
          {sortedLanguages.map((language, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 ml-[200px]">
              <div className="w-48">
                <h3 className="text-xl font-bold text-black">{language.name}</h3>
                <p className="text-sm text-gray-600">{language.level}</p>
              </div>
              
              <div className="flex-1 flex items-center gap-2">
                {[...Array(totalDots)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: i < language.proficiency ? '#9870ab' : 'rgba(152, 112, 171, 0.2)'
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
