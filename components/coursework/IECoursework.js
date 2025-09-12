const IECoursework = ({ lang = 'en', onClose }) => {
  const content = {
    en: {
      title: "IE University Computer Science & AI Coursework",
      courses: [
        "History of Ideas and Innovation",
        "Discrete Mathematics",
        "Learning to Observe, Experiment and Survey",
        "Introduction to Business Management",
        "Fundamentals of Probability and Statistics",
        "Physics for Computer Science",
        "IE Humanities",
        "Fundamentals of Data Analysis",
        "Simulating and Modelling to Understand Change",
        "Principles of Programming",
        "Calculus for Computer Science",
        "Technology",
        "Algorithms & Data Structures",
        "Computer Programming I",
        "Designing and Using Databases",
        "Probability for Computing Science",
        "Computer Architecture, Network Technology & Operating",
        "Entrepreneurship",
        "Matrices & Linear Transformations",
        "AI: Machine Learning Foundations",
        "AI: Personality and Emotion for AI Design",
        "High Performance Computing",
        "Computer Programming II",
        "Software Development and DevOps",
        "AI: Reasoning & Problem Solving",
        "IE Challenge",
        "AI: Reinforcement Learning",
        "AI: Natural Language Processing & Semantic Analysis",
        "AI: Chatbots & Recommendation Engines",
        "Project Management and Innovation Methods",
        "AI: Computer Vision"
      ]
    },
    es: {
      title: "Trabajo de Curso de Ciencias de la Computación e IA de IE University",
      courses: [
        "Historia de Ideas e Innovaciones",
        "Matemáticas Discretas",
        "Aprendiendo a Observar, Experimentar y Encuestar",
        "Introducción a la Gestión Empresarial",
        "Fundamentos de Probabilidad y Estadística",
        "Física para Ciencias de la Computación",
        "Humanidades de IE",
        "Fundamentos del Análisis de Datos",
        "Simulación y Modelado para Entender el Cambio",
        "Principios de Programación",
        "Cálculo para Ciencias de la Computación",
        "Tecnología",
        "Algoritmos y Estructuras de Datos",
        "Programación de Computadoras I",
        "Diseño y Uso de Bases de Datos",
        "Probabilidad para Ciencias de la Computación",
        "Arquitectura de Computadoras, Tecnología de Redes y Sistemas Operativos",
        "Emprendimiento",
        "Matrices y Transformaciones Lineales",
        "IA: Fundamentos de Aprendizaje Automático",
        "IA: Personalidad y Emoción para el Diseño de IA",
        "Computación de Alto Rendimiento",
        "Programación de Computadoras II",
        "Desarrollo de Software y DevOps",
        "IA: Razonamiento y Resolución de Problemas",
        "Desafío IE",
        "IA: Aprendizaje por Refuerzo",
        "IA: Procesamiento de Lenguaje Natural y Análisis Semántico",
        "IA: Chatbots y Motores de Recomendación",
        "Gestión de Proyectos y Métodos de Innovación",
        "IA: Visión por Computadora"
      ]
    }
    // Add other languages...
  };

  const t = content[lang] || content.en;

  return (
    <div className="coursework-modal">
      <div className="coursework-content">
        <button onClick={onClose} className="close-btn">&times;</button>
        <h2 className="text-center mb-6">{t.title}</h2>
        <div className="courses-grid">
          {t.courses.map((course, idx) => (
            <div key={idx} className="course-item">
              {course}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IECoursework;
