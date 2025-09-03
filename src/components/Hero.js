const heroContent = {
  en: {
    name: "Aya-Yasmine Belloum",
    tagline: "Computer Science & AI Student | Document Intelligence & Explainable Machine Learning",
    description:
      "I’m passionate about building AI solutions that are accurate, explainable, and impactful. Through my internships at Nakilat and Kongsberg, I gained hands-on experience in document AI, NLP, and machine learning for real-world data. I also enjoy developing AI chatbots, building ML-powered apps, and competing in hackathons.",
    contact: "Contact Me",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "Download CV",
  },
  fr: {
    name: "Aya-Yasmine Belloum",
    tagline: "Étudiante en informatique & IA | Intelligence documentaire & Machine Learning explicable",
    description:
      "Je suis passionnée par la création de solutions d'IA précises, explicables et à fort impact. Mes stages chez Nakilat et Kongsberg m'ont permis d'acquérir une expérience pratique en IA documentaire, NLP et machine learning sur des données réelles. J'aime aussi développer des chatbots IA, créer des applications ML et participer à des hackathons.",
    contact: "Me contacter",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "Télécharger le CV",
  },
  es: {
    name: "Aya-Yasmine Belloum",
    tagline: "Estudiante de Informática e IA | Inteligencia Documental & Machine Learning Explicable",
    description:
      "Me apasiona construir soluciones de IA precisas, explicables e impactantes. Gracias a mis prácticas en Nakilat y Kongsberg, obtuve experiencia práctica en IA documental, PLN y machine learning para datos reales. También disfruto desarrollando chatbots de IA, apps con ML y compitiendo en hackathons.",
    contact: "Contáctame",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "Descargar CV",
  },
  ar: {
    name: "آية-ياسمين بلوم",
    tagline: "طالبة علوم الحاسوب والذكاء الاصطناعي | ذكاء المستندات وتعلم الآلة القابل للتفسير",
    description:
      "أنا شغوفة ببناء حلول ذكاء اصطناعي دقيقة وقابلة للتفسير وذات تأثير. من خلال تدريبي في ناقلات وكونغسبيرغ، اكتسبت خبرة عملية في ذكاء المستندات ومعالجة اللغة الطبيعية وتعلم الآلة للبيانات الواقعية. كما أستمتع بتطوير روبوتات الدردشة الذكية، وبناء تطبيقات مدعومة بتعلم الآلة، والمشاركة في مسابقات البرمجة.",
    contact: "تواصل معي",
    linkedin: "لينكدإن",
    github: "جيت هاب",
    cv: "تحميل السيرة الذاتية",
  },
};

const links = {
  email: "mailto:your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-profile",
  cv: "/cv.pdf", // Update with your actual CV link
};

const Hero = ({ lang }) => {
  const t = heroContent[lang] || heroContent.en;
  const isRTL = lang === "ar";
  return (
    <section
      id="hero"
      className={`w-full max-w-4xl mx-auto py-12 text-center ${isRTL ? "rtl" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h1 className="text-5xl font-extrabold mb-4">{t.name}</h1>
      <h2 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">{t.tagline}</h2>
      <p className="mb-8 text-lg max-w-2xl mx-auto">{t.description}</p>
      <div className={`flex flex-wrap justify-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
        <a
          href={links.email}
          className="px-5 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          📧 {t.contact}
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
        >
          🔗 {t.linkedin}
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded border border-gray-600 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          💻 {t.github}
        </a>
        <a
          href={links.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded border border-green-600 text-green-600 font-medium hover:bg-green-50 transition"
        >
          📄 {t.cv}
        </a>
      </div>
    </section>
  );
};

export default Hero;
