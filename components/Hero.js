"use client";

import { Icon } from '@iconify/react';

const heroContent = {
  en: {
    name: "Aya-Yasmine Belloum",
    tagline: "Computer Science & AI Student | Document Intelligence & Explainable Machine Learning",
    description:
      "I’m passionate about building AI solutions that are accurate, explainable, and impactful. Through my internships at Nakilat and Kongsberg, I gained hands-on experience in document AI, NLP, and machine learning for real-world data. I also enjoy developing AI chatbots, building ML-powered apps, and competing in hackathons.",
    icons: {
      about: "About Me",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      techStack: "Tech Stack",
      skills: "Skills",
      interests: "Interests",
      languages: "Languages",
      contact: "Contact"
    }
  },
  fr: {
    name: "Aya-Yasmine Belloum",
    tagline: "Étudiante en informatique & IA | Intelligence documentaire & Machine Learning explicable",
    description:
      "Je suis passionnée par la création de solutions d'IA précises, explicables et à fort impact. Mes stages chez Nakilat et Kongsberg m'ont permis d'acquérir une expérience pratique en IA documentaire, NLP et machine learning sur des données réelles. J'aime aussi développer des chatbots IA, créer des applications ML et participer à des hackathons.",
    icons: {
      about: "À propos",
      education: "Formation",
      experience: "Expérience",
      projects: "Projets",
      techStack: "Technologies",
      skills: "Compétences",
      interests: "Intérêts",
      languages: "Langues",
      contact: "Contact"
    }
  },
  es: {
    name: "Aya-Yasmine Belloum",
    tagline: "Estudiante de Informática e IA | Inteligencia Documental & Machine Learning Explicable",
    description:
      "Me apasiona construir soluciones de IA precisas, explicables e impactantes. Gracias a mis prácticas en Nakilat y Kongsberg, obtuve experiencia práctica en IA documental, PLN y machine learning para datos reales. También disfruto desarrollando chatbots de IA, apps con ML y compitiendo en hackathons.",
    icons: {
      about: "Sobre mí",
      education: "Educación",
      experience: "Experiencia",
      projects: "Proyectos",
      techStack: "Tecnologías",
      skills: "Habilidades",
      interests: "Intereses",
      languages: "Idiomas",
      contact: "Contacto"
    }
  },
  ar: {
    name: "آية-ياسمين بلوم",
    tagline: "طالبة علوم الحاسوب والذكاء الاصطناعي | ذكاء المستندات وتعلم الآلة القابل للتفسير",
    description:
      "أنا شغفوبة ببناء حلول ذكاء اصطناعي دقيقة وقابلة للتفسير وذات تأثير. من خلال تدريبي في ناقلات وكونغسبيرغ، اكتسبت خبرة عملية في ذكاء المستندات ومعالجة اللغة الطبيعية وتعلم الآلة للبيانات الواقعية. كما أستمتع بتطوير روبوتات الدردشة الذكية، وبناء تطبيقات مدعومة بتعلم الآلة، والمشاركة في مسابقات البرمجة.",
    icons: {
      about: "نبذة عني",
      education: "التعليم",
      experience: "الخبرة",
      projects: "المشاريع",
      techStack: "التقنيات",
      skills: "المهارات",
      interests: "الاهتمامات",
      languages: "اللغات",
      contact: "اتصل بي"
    }
  }
};

const links = {
  github: "https://github.com/ayayasminebelloum",
};

const Hero = ({ lang = 'en', setLang = (v) => {}, translations = {} }) => {
  const isRTL = lang === 'ar';
  // pick localized content (fallback to English)
  const content = heroContent[lang] || heroContent.en;
  // subtitle: take text before '|' and normalize '&' to 'and'
  const subtitle = (content.tagline || "").split("|")[0].replace("&", "and").trim();

  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // optionally set focus for accessibility (plain JS, no TS cast)
      try {
        if (typeof el.focus === "function") el.focus();
      } catch (e) {
        // ignore focus errors
      }
    }
  };

  return (
    <section
      id="hero"
      className={`py-12 text-center flex flex-col items-center justify-center hero-section ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: 0,
        boxShadow: 'none',
        margin: 0,
        padding: '3rem 0',
      }}
    >
      {/* Language switcher integrated into hero (top-right) */}
      <div className="absolute top-4 right-4 flex gap-2 z-20">
        {Object.keys(translations).map((lng) => (
          <button
            key={lng}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              lang === lng ? 'bg-blue-600 text-white' : 'bg-white/30 text-white/90'
            }`}
            onClick={() => setLang(lng)}
            aria-label={`Switch language to ${translations[lng]?.language || lng}`}
          >
            {translations[lng]?.language || lng}
          </button>
        ))}
      </div>

      {/* GitHub Corner */}
      <a href={links.github} className="github-corner" aria-label="View source on GitHub" style={{ position: 'absolute', top: 0, left: 0 }}>
       <svg width="80" height="80" viewBox="0 0 250 250" style={{ fill: '#151513', color: '#fff', position: 'absolute', top: 0, left: 0, border: 0, transform: 'scaleX(-1)' }} aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" /><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: '130px 106px' }} className="octo-arm" /><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body" /></svg>
      </a>
      <style>{`.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}`}</style>

      {/* Centered name rectangle on top of the background (glass) */}
      <div className="hero-name-box" role="heading" aria-level="1">
        <h1>{content.name}</h1>
        <p className="hero-subtitle">{subtitle}</p>
      </div>

      {/* Bottom icons bar: absolute, full-width, icons spaced to page borders */}
      <div className={`absolute left-0 hero-icons ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className="hero-icon-cell" onClick={() => handleNavClick('about')} role="button" tabIndex={0}>
          <Icon icon="mdi:account" width="36" height="36" />
          <span className="text-xs font-quicksand mt-1">{content.icons.about}</span>
        </div>
        <div className="hero-icon-cell" onClick={() => handleNavClick('education')} role="button" tabIndex={0}>
          <Icon icon="mdi:school" width="36" height="36" />
          <span className="text-xs font-quicksand mt-1">{content.icons.education}</span>
        </div>
        <div className="hero-icon-cell" onClick={() => handleNavClick('experience')} role="button" tabIndex={0}>
          <Icon icon="mdi:briefcase" width="36" height="36" />
          <span className="text-xs font-quicksand mt-1">{content.icons.experience}</span>
        </div>
        <div className="hero-icon-cell" onClick={() => handleNavClick('projects')} role="button" tabIndex={0}>
          <Icon icon="mdi:folder" width="36" height="36" />
          <span className="text-xs font-quicksand mt-1">{content.icons.projects}</span>
        </div>
        {/* Achievements icon */}
        <div className="hero-icon-cell" onClick={() => handleNavClick('achievements')} role="button" tabIndex={0}>
          <Icon icon="mdi:trophy" width="36" height="36" />
          <span className="text-xs font-quicksand mt-1">Achievements</span>
        </div>
        {/* Papers icon */}
        <div className="hero-icon-cell" onClick={() => handleNavClick('papers')} role="button" tabIndex={0}>
          <Icon icon="mdi:file-document" width="36" height="36" />
          <span className="text-xs font-quicksand mt-1">Papers</span>
        </div>
        <div className="hero-icon-cell" onClick={() => handleNavClick('techStack')} role="button" tabIndex={0}>
          <Icon icon="mdi:tools" width="36" height="36" />
          <span className="text-xs font-quicksand mt-1">{content.icons.techStack}</span>
        </div>
        <div className="hero-icon-cell" onClick={() => handleNavClick('skills')} role="button" tabIndex={0}>
          <Icon icon="mdi:star" width="36" height="36" />
          <span className="text-xs font-quicksand mt-1">{content.icons.skills}</span>
        </div>
        <div className="hero-icon-cell" onClick={() => handleNavClick('interests')} role="button" tabIndex={0}>
          <Icon icon="mdi:heart" width="36" height="36" />
          <span className="text-xs font-quicksand mt-1">{content.icons.interests}</span>
        </div>
        <div className="hero-icon-cell" onClick={() => handleNavClick('languages')} role="button" tabIndex={0}>
          <Icon icon="mdi:translate" width="36" height="36" />
          <span className="text-xs font-quicksand mt-1">{content.icons.languages}</span>
        </div>
        <div className="hero-icon-cell" onClick={() => handleNavClick('contact')} role="button" tabIndex={0}>
          <Icon icon="mdi:email" width="36" height="36" />
          <span className="text-xs font-quicksand mt-1">{content.icons.contact}</span>
        </div>
      </div>
     </section>
   );
 };
 
 export default Hero;
