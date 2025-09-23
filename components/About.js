import Image from 'next/image';

const aboutText = {
  en: {
    title: "About Me",
    body: `Computer Science and Artificial Intelligence student at IE University with extensive coursework and hands-on experience in Machine Learning, Deep Learning, NLP, Reinforcement Learning, Computer Vision, High Performance Computing, and Software Development. Skilled in designing and implementing intelligent systems, including AI- powered chatbots, recommendation engines, game-playing agents, and document automation solutions. Passionate about leveraging AI, robotics, and HPC to solve real-world problems with scalable and explainable solutions.`,
    download: "Download CV (PDF)"
  },
  fr: {
    title: "À propos",
    body: `Étudiante en Informatique et Intelligence Artificielle à IE University, avec de nombreux cours et une expérience pratique en Machine Learning, Deep Learning, NLP, Reinforcement Learning, Computer Vision, High Performance Computing et développement logiciel. Compétente dans la conception et l'implémentation de systèmes intelligents (chatbots IA, moteurs de recommandation, agents de jeu, automatisation documentaire). Passionnée par l'utilisation de l'IA, de la robotique et du HPC pour résoudre des problèmes réels via des solutions exploitables et explicables.`,
    download: "Télécharger CV (PDF)"
  },
  es: {
    title: "Sobre mí",
    body: `Estudiante de Ciencias de la Computación e Inteligencia Artificial en IE University con amplia formación y experiencia práctica en Machine Learning, Deep Learning, PLN, Reinforcement Learning, Visión por Computador, High Performance Computing y desarrollo de software. Hábil en diseñar e implementar sistemas inteligentes (chatbots IA, motores de recomendación, agentes de juego, automatización documental). Apasionada por aplicarIA, robótica y HPC para resolver problemas reales con soluciones escalables y explicables.`,
    download: "Descargar CV (PDF)"
  },
  ar: {
    title: "نبذة عني",
    body: `طالبة علوم الحاسوب والذكاء الاصطناعي في IE University مع دورات واسعة وخبرة عملية في التعلم الآلي،
التعلم العميق، معالجة اللغة الطبيعية، التعلم المعزز، رؤية الحاسوب، الحوسبة عالية الأداء وتطوير البرمجيات.
ماهرة في تصميم وتنفيذ الأنظمة الذكية مثل روبوتات الدردشة المدعومة بالذكاء الاصطناعي ومحركات التوصية ووكلاء اللعب
وحلول أتمتة المستندات. شغوفة باستخدام الذكاء الاصطناعي والروبوتات والحوسبة عالية الأداء لحل مشاكل العالم الحقيقي
بحلول قابلة للتطوير وقابلة للتفسير.`,
    download: "تحميل السيرة الذاتية (PDF)"
  }
};

export default function About({ lang = "en" }) {
  const content = aboutText[lang] || aboutText.en;
  const isRTL = lang === 'ar';

  return (
    <section id="about" className="about-section flex items-center justify-center w-full">
      <div className={`about-content flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-center gap-8`}>
        <div className="polaroid-wrapper">
          <div className="polaroid">
            <Image 
              src="/ayapic.jpg"
              alt="Aya-Yasmine Belloum"
              width={500}
              height={500}
              className="polaroid-img"
            />
            <div className="polaroid-caption">{content.title}</div>
          </div>
        </div>
        
        <div className="about-card max-w-2xl p-8 md:p-12 rounded-xl relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h2>
          <p className="about-body text-base md:text-lg leading-relaxed whitespace-pre-line">
            {content.body}
          </p>
          
          <a
            href="/Aya%20CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="cv-download-btn"
          >
            {content.download}
          </a>
        </div>
      </div>
    </section>
  );
}
