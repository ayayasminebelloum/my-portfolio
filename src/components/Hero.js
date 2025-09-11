import Image from 'next/image';

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
      className={`relative w-full max-w-4xl mx-auto py-12 text-center bg-[#B660CD] rounded-lg shadow-lg mt-8`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* GitHub Corner Flipped to Left */}
      <a href="https://github.com/ayayasminebelloum" className="github-corner" aria-label="View source on GitHub" style={{position:'absolute',top:0,left:0}}>
        <svg width="80" height="80" viewBox="0 0 250 250" style={{fill:'#151513',color:'#fff',position:'absolute',top:0,left:0,border:0,transform:'scaleX(-1)'}} aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"/><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transformOrigin:'130px 106px'}} className="octo-arm"/><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"/></svg>
      </a>
      <style>{`.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}`}</style>
      {/* Banner Image */}
      <Image src="/Aya-Banner.png" alt="Aya-Yasmine Belloum Banner" width={600} height={180} className="mx-auto mt-[20px] mb-2 max-w-full h-auto rounded-lg" />
      {/* Subtitle */}
      <h2 className="text-xl font-quicksand font-semibold mb-8 text-white text-center">Computer science and AI student</h2>
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
