const papersContent = {
  en: {
    title: "Research & Academic Projects",
    intro: `As part of my Computer Science and Artificial Intelligence degree, I have contributed to several research-driven projects that combine theory with practical application. Below are three highlights that showcase my ability to apply advanced computational techniques to real-world challenges.`,
    items: [
      {
        name: "ArtifAI: Conversational Chatbot for Artists",
        link: "Blog/NLP_Course_Project.pdf",
        description: `ArtifAI is an educational chatbot that enables users to converse with AI-powered personae of famous painters. The system integrates retrieval-augmented generation (RAG) techniques, combining a curated artist dataset with Wikipedia, processed through spaCy, MiniLM embeddings, and FAISS indexing, and connected to a fine-tuned GPT-2 model for fluent, context-aware responses.`,
        achievements: [
          "Delivered historically accurate, engaging conversations with virtually no hallucinations.",
          "Achieved real-time interaction speeds (≈1.7s per 75-token reply) on consumer hardware.",
          "Designed a lightweight, deployable pipeline suitable for classrooms and educational tools.",
          "Future directions include multimodal capabilities (e.g., image-based queries), multilingual support, and persistent conversational memory."
        ]
      },
      {
        name: "Bayesian Network for Adolescent Psychological Distress",
        link: "Blog/Probability_Project_Documentation.pdf",
        description: `This project developed a Bayesian network prototype to model the complex interplay of factors contributing to psychological distress in teenagers. Variables such as peer pressure, academic stress, family conflicts, household income, physical health, cyber strife, and social connectedness were systematically defined with probabilistic states.`,
        achievements: [
          "Built a network of Conditional Probability Tables (CPTs) grounded in published research and domain knowledge.",
          "Identified social connectedness and reduced cyber strife as critical protective factors against distress.",
          "Showcased how Bayesian networks can be used to query conditional probabilities, offering actionable insights into mental health research.",
          "The prototype demonstrates how probabilistic modeling can provide a data-driven lens for understanding adolescent well-being, supporting applications in psychology and education."
        ]
      },
      {
        name: "Quaternion Transformations and Applications",
        link: "Blog/Quaternion.pdf",
        description: `This paper explores quaternion mathematics as a superior alternative to Euler angles for representing 3D spatial rotations in robotics, computer graphics, and physics simulations. By avoiding gimbal lock and enabling efficient computation, quaternions represent a paradigm shift in spatial orientation control.`,
        achievements: [
          "Explained quaternion foundations: rectangular & polar forms, multiplication rules, conjugates, and inverses.",
          "Applied quaternions to robotics (precision arm control), computer graphics (realistic animation), and physics simulations (efficient matrix representations).",
          "Highlighted versatility: quaternions can encode multiple orientations and even store extra data in resource-limited systems.",
          "Looking ahead, quaternion transformations are set to power emerging technologies in VR, aerospace, autonomous vehicles, and medical robotics—fields where precision and efficiency are indispensable."
        ]
      }
    ],
    btn: "Take a look"
  },
  fr: {
    title: "Projets de recherche & académiques",
    intro: `Dans le cadre de mon cursus en informatique et intelligence artificielle, j'ai contribué à plusieurs projets de recherche alliant théorie et application pratique. Voici trois exemples illustrant ma capacité à appliquer des techniques computationnelles avancées à des problématiques réelles.`,
    items: [
      {
        name: "ArtifAI : Chatbot conversationnel pour artistes",
        link: "Blog/NLP_Course_Project.pdf",
        description: `ArtifAI est un chatbot éducatif permettant de dialoguer avec des personnalités artistiques célèbres simulées par IA. Le système utilise des techniques RAG, un dataset d'artistes enrichi par Wikipedia, spaCy, MiniLM, FAISS et un GPT-2 fine-tuné pour des réponses contextuelles et précises.`,
        achievements: [
          "Conversations historiques précises et engageantes, sans hallucinations.",
          "Réponses en temps réel (≈1,7s pour 75 tokens) sur matériel grand public.",
          "Pipeline léger et déployable pour l'éducation.",
          "Perspectives : multimodalité, multilingue, mémoire conversationnelle persistante."
        ]
      },
      {
        name: "Réseau bayésien pour la détresse psychologique des adolescents",
        link: "Blog/Probability_Project_Documentation.pdf",
        description: `Prototype de réseau bayésien modélisant les facteurs de détresse chez les adolescents (pression sociale, stress scolaire, conflits familiaux, revenu, santé, cyberharcèlement, lien social) avec états probabilistes.`,
        achievements: [
          "Réseau de CPT basé sur la recherche et l'expertise.",
          "Lien social et cyberharcèlement réduits identifiés comme facteurs protecteurs.",
          "Démonstration de l'intérêt des réseaux bayésiens pour la recherche en santé mentale.",
          "Modélisation probabiliste pour comprendre le bien-être adolescent en psychologie et éducation."
        ]
      },
      {
        name: "Transformations et applications des quaternions",
        link: "Blog/Quaternion.pdf",
        description: `Exploration des quaternions comme alternative aux angles d'Euler pour la rotation 3D en robotique, graphisme et simulation physique. Les quaternions évitent le gimbal lock et permettent des calculs efficaces.`,
        achievements: [
          "Fondements des quaternions : formes, règles de multiplication, conjugués, inverses.",
          "Applications en robotique, graphisme, simulation physique.",
          "Polyvalence : encodage de multiples orientations et stockage de données.",
          "Avenir : VR, aérospatial, véhicules autonomes, robotique médicale."
        ]
      }
    ],
    btn: "Voir le projet"
  },
  es: {
    title: "Investigación y proyectos académicos",
    intro: `Como parte de mi grado en informática e inteligencia artificial, he contribuido a varios proyectos de investigación que combinan teoría y práctica. Aquí tres ejemplos que muestran mi capacidad para aplicar técnicas computacionales avanzadas a desafíos reales.`,
    items: [
      {
        name: "ArtifAI: Chatbot conversacional para artistas",
        link: "Blog/NLP_Course_Project.pdf",
        description: `ArtifAI es un chatbot educativo que permite conversar con personalidades artísticas simuladas por IA. Integra RAG, dataset de artistas y Wikipedia, spaCy, MiniLM, FAISS y GPT-2 ajustado para respuestas contextuales y precisas.`,
        achievements: [
          "Conversaciones históricas precisas y atractivas, sin alucinaciones.",
          "Interacción en tiempo real (≈1,7s por respuesta de 75 tokens) en hardware doméstico.",
          "Pipeline ligero y desplegable para educación.",
          "Futuro: capacidades multimodales, soporte multilingüe y memoria persistente."
        ]
      },
      {
        name: "Red bayesiana para el malestar psicológico adolescente",
        link: "Blog/Probability_Project_Documentation.pdf",
        description: `Red bayesiana prototipo para modelar factores de malestar adolescente (presión social, estrés académico, conflictos familiares, ingresos, salud, ciberacoso, conexión social) con estados probabilísticos.`,
        achievements: [
          "Red de CPT basada en investigación y conocimiento experto.",
          "Conexión social y menor ciberacoso como factores protectores.",
          "Demostración del uso de redes bayesianas en investigación de salud mental.",
          "Modelado probabilístico para comprender el bienestar adolescente en psicología y educación."
        ]
      },
      {
        name: "Transformaciones y aplicaciones de cuaterniones",
        link: "Blog/Quaternion.pdf",
        description: `Explora los cuaterniones como alternativa a los ángulos de Euler para rotaciones 3D en robótica, gráficos y simulaciones físicas. Evitan el gimbal lock y permiten cálculos eficientes.`,
        achievements: [
          "Fundamentos de cuaterniones: formas, reglas de multiplicación, conjugados, inversos.",
          "Aplicaciones en robótica, gráficos y simulaciones.",
          "Versatilidad: codificación de múltiples orientaciones y almacenamiento de datos.",
          "Futuro: VR, aeroespacial, vehículos autónomos, robótica médica."
        ]
      }
    ],
    btn: "Ver el paper"
  },
  ar: {
    title: "مشاريع بحثية وأكاديمية",
    intro: `كجزء من دراستي لعلوم الحاسوب والذكاء الاصطناعي، شاركت في عدة مشاريع بحثية تجمع بين النظرية والتطبيق العملي. فيما يلي ثلاثة أمثلة تبرز قدرتي على تطبيق تقنيات حسابية متقدمة على تحديات واقعية.`,
    items: [
      {
        name: "ArtifAI: روبوت دردشة للفنانين",
        link: "Blog/NLP_Course_Project.pdf",
        description: `ArtifAI هو روبوت دردشة تعليمي يتيح للمستخدمين التحدث مع شخصيات فنية مشهورة مدعومة بالذكاء الاصطناعي. يستخدم تقنيات RAG، مجموعة بيانات للفنانين وويكيبيديا، spaCy، MiniLM، FAISS ونموذج GPT-2 معدل لإجابات دقيقة وسياقية.`,
        achievements: [
          "حوارات دقيقة وتاريخية بدون هلوسة.",
          "سرعة تفاعل فورية (≈1.7 ثانية لكل 75 رمز) على أجهزة منزلية.",
          "تصميم خفيف وقابل للنشر في التعليم.",
          "خطط مستقبلية: دعم متعدد الوسائط، لغات متعددة، ذاكرة محادثة دائمة."
        ]
      },
      {
        name: "شبكة بايزية للضغوط النفسية لدى المراهقين",
        link: "Blog/Probability_Project_Documentation.pdf",
        description: `تم تطوير نموذج شبكة بايزية لعوامل الضغوط النفسية لدى المراهقين (الضغط الاجتماعي، الإجهاد الأكاديمي، الصراعات الأسرية، الدخل، الصحة، الصراعات الإلكترونية، الترابط الاجتماعي) مع حالات احتمالية.`,
        achievements: [
          "شبكة CPT مبنية على أبحاث منشورة وخبرة ميدانية.",
          "الترابط الاجتماعي وتقليل الصراعات الإلكترونية عوامل حماية مهمة.",
          "إظهار كيف يمكن استخدام الشبكات البايزية للاستفسار عن الاحتمالات الشرطية.",
          "النموذج يوضح كيف يمكن للنمذجة الاحتمالية دعم أبحاث الصحة النفسية والتعليم."
        ]
      },
      {
        name: "تحويلات وتطبيقات الكواتيرنيون",
        link: "Blog/Quaternion.pdf",
        description: `تستكشف الورقة رياضيات الكواتيرنيون كبديل متفوق لزوايا أويلر في تمثيل الدوران ثلاثي الأبعاد في الروبوتات، الرسومات الحاسوبية والمحاكاة الفيزيائية. الكواتيرنيون يتجنب مشاكل gimbal lock ويوفر حسابات فعالة.`,
        achievements: [
          "شرح أساسيات الكواتيرنيون: الأشكال، قواعد الضرب، المرافق، المعكوس.",
          "تطبيقات في الروبوتات، الرسومات، والمحاكاة الفيزيائية.",
          "المرونة: ترميز اتجاهات متعددة وتخزين بيانات إضافية.",
          "المستقبل: الواقع الافتراضي، الطيران، المركبات الذاتية، الروبوتات الطبية."
        ]
      }
    ],
    btn: "اطلع على الورقة"
  }
};

const Papers = ({ lang = "en" }) => {
  const t = papersContent[lang] || papersContent.en;
  const isRTL = lang === "ar";

  return (
    <section
      id="papers"
      className="w-full py-8"
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        backgroundImage: "url('/edubg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        minHeight: "100vh"
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "#9870ab" }}
        >
          {t.title}
        </h2>
        <p className="mb-8 text-base md:text-lg">{t.intro}</p>
        <div className="flex flex-col gap-8">
          {t.items.map((item, idx) => (
            <div key={idx} className="bg-white/30 backdrop-blur-lg shadow-lg rounded-xl border border-white/40 p-6">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="mb-2">{item.description}</p>
              <ul className="list-disc list-inside mb-4">
                {item.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-[#9870ab] text-white font-semibold hover:bg-[#7a598c] transition"
              >
                {t.btn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Papers;
