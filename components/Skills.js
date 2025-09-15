const skillsContent = {
  en: {
    title: "PROFESSIONAL SKILLS",
    intro: "Alongside my technical expertise, I bring a suite of soft skills that enable effective collaboration, innovation, and leadership in fast-paced, cross-functional environments.",
    skills: [
      "Communication & Presentation",
      "Collaboration & Teamwork",
      "Adaptability & Learning Agility",
      "Problem-Solving & Critical Thinking",
      "Leadership & Project Management",
      "Innovation & Creativity",
      "Time Management & Organization",
      "Empathy & Stakeholder Awareness"
    ]
  },
  fr: {
    title: "COMPÉTENCES PROFESSIONNELLES",
    intro: "En plus de mon expertise technique, j'apporte un ensemble de compétences interpersonnelles qui permettent une collaboration, une innovation et un leadership efficaces dans des environnements transversaux et dynamiques.",
    skills: [
      "Communication & Présentation",
      "Collaboration & Travail d'équipe",
      "Adaptabilité & Agilité d'apprentissage",
      "Résolution de problèmes & Pensée critique",
      "Leadership & Gestion de projet",
      "Innovation & Créativité",
      "Gestion du temps & Organisation",
      "Empathie & Conscience des parties prenantes"
    ]
  },
  es: {
    title: "HABILIDADES PROFESIONALES",
    intro: "Junto a mi experiencia técnica, aporto un conjunto de habilidades blandas que permiten una colaboración, innovación y liderazgo efectivos en entornos multifuncionales y dinámicos.",
    skills: [
      "Comunicación & Presentación",
      "Colaboración & Trabajo en equipo",
      "Adaptabilidad & Agilidad de aprendizaje",
      "Resolución de problemas & Pensamiento crítico",
      "Liderazgo & Gestión de proyectos",
      "Innovación & Creatividad",
      "Gestión del tiempo & Organización",
      "Empatía & Conciencia de stakeholders"
    ]
  },
  ar: {
    title: "المهارات المهنية",
    intro: "إلى جانب خبرتي التقنية، أمتلك مجموعة من المهارات الشخصية التي تمكن من التعاون والابتكار والقيادة الفعالة في بيئات العمل السريعة ومتعددة الوظائف.",
    skills: [
      "التواصل والعرض",
      "التعاون والعمل الجماعي",
      "التكيف وسرعة التعلم",
      "حل المشكلات والتفكير النقدي",
      "القيادة وإدارة المشاريع",
      "الابتكار والإبداع",
      "إدارة الوقت والتنظيم",
      "التعاطف والوعي بأصحاب المصلحة"
    ]
  }
};

const Skills = ({ lang = "en" }) => {
  const t = skillsContent[lang] || skillsContent.en;
  return (
    <section
      id="skills"
      className="w-full hero-section flex flex-col items-center justify-start py-16"
      style={{
        minHeight: 665,
        backgroundColor: "#9870ab",
        backgroundImage: "url('/edubg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-8">
        {/* Title Patch - modified for vertical layout */}
        <div
          className="education-patch fabric-patch p-6 mx-auto"
          style={{
            backgroundColor: "#9870ab",
            border: "2px dashed white",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            display: "flex",
            flexDirection: "column", // Changed to column
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            height: "200px",
            width: "700px",
          }}
        >
          <h2 
            className="text-3xl font-bold" 
            style={{ color: "#e9cae9", position: "relative", zIndex: 2 }}
          >
            {t.title}
          </h2>
          <p 
            className="text-sm" 
            style={{ 
              color: "#e9cae9", 
              position: "relative", 
              zIndex: 2,
              maxWidth: "500px", // Control text width
              opacity: 0.9
            }}
          >
            {t.intro}
          </p>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg,
                  rgba(255,255,255,0.05) 0,
                  rgba(255,255,255,0.05) 1px,
                  transparent 1px,
                  transparent 6px
                ),
                repeating-linear-gradient(-45deg,
                  rgba(0,0,0,0.05) 0,
                  rgba(0,0,0,0.05) 1px,
                  transparent 1px,
                  transparent 6px
                )
              `,
              zIndex: 1
            }}
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.skills.map((skill, index) => (
            <div
              key={index}
              className="education-patch fabric-patch p-6"
              style={{
                backgroundColor: "#9870ab",
                border: "2px dashed white",
                minHeight: "140px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <h3 className="text-lg font-semibold" style={{ color: "#e9cae9", position: "relative", zIndex: 2 }}>
                {skill}
              </h3>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(45deg,
                      rgba(255,255,255,0.05) 0px,
                      rgba(255,255,255,0.05) 1px,
                      transparent 1px,
                      transparent 6px
                    ),
                    repeating-linear-gradient(-45deg,
                      rgba(0,0,0,0.05) 0px,
                      rgba(0,0,0,0.05) 1px,
                      transparent 1px,
                      transparent 6px
                    )
                  `,
                  zIndex: 1
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
