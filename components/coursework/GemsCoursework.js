const GemsCoursework = ({ lang = 'en', onClose }) => {
  const content = {
    en: {
      title: "GEMS American Academy Coursework",
      scores: "AP Scores",
      sat: "SAT Score",
      courses: [
        { name: "AP Calculus AB", score: "5/5" },
        { name: "AP Chemistry", score: "3/5" },
        { name: "AP Computer Science", score: "5/5" },
        { name: "AP European History", score: "3/5" },
        { name: "AP French Language and Culture", score: "5/5" },
        { name: "AP Physics", score: "4/5" },
        { name: "AP Research", score: "4/5" },
        { name: "AP Statistics", score: "5/5" }
      ],
      satScore: "1560"
    },
    fr: {
      title: "Cours de GEMS American Academy",
      scores: "Notes AP",
      sat: "Score SAT",
      courses: [
        { name: "AP Calculus AB", score: "5/5" },
        { name: "AP Chimie", score: "3/5" },
        { name: "AP Informatique", score: "5/5" },
        { name: "AP Histoire Européenne", score: "3/5" },
        { name: "AP Langue et Culture Française", score: "5/5" },
        { name: "AP Physique", score: "4/5" },
        { name: "AP Recherche", score: "4/5" },
        { name: "AP Statistiques", score: "5/5" }
      ],
      satScore: "1560"
    },
    es: {
      title: "Cursos de GEMS American Academy",
      scores: "Calificaciones AP",
      sat: "Puntuación SAT",
      courses: [
        { name: "AP Cálculo AB", score: "5/5" },
        { name: "AP Química", score: "3/5" },
        { name: "AP Informática", score: "5/5" },
        { name: "AP Historia Europea", score: "3/5" },
        { name: "AP Lengua y Cultura Francesa", score: "5/5" },
        { name: "AP Física", score: "4/5" },
        { name: "AP Investigación", score: "4/5" },
        { name: "AP Estadística", score: "5/5" }
      ],
      satScore: "1560"
    },
    ar: {
      title: "المواد الدراسية في أكاديمية جيمس الأمريكية",
      scores: "درجات AP",
      sat: "درجة SAT",
      courses: [
        { name: "AP حساب التفاضل والتكامل AB", score: "٥/٥" },
        { name: "AP الكيمياء", score: "٣/٥" },
        { name: "AP علوم الحاسوب", score: "٥/٥" },
        { name: "AP التاريخ الأوروبي", score: "٣/٥" },
        { name: "AP اللغة والثقافة الفرنسية", score: "٥/٥" },
        { name: "AP الفيزياء", score: "٤/٥" },
        { name: "AP البحث", score: "٤/٥" },
        { name: "AP الإحصاء", score: "٥/٥" }
      ],
      satScore: "١٥٦٠"
    }
  };

  const t = content[lang] || content.en;

  return (
    <div className="coursework-modal">
      <div className="coursework-content">
        <button onClick={onClose} className="close-btn">&times;</button>
        <h2 className="text-center mb-6">{t.title}</h2>
        <h3 className="text-center mb-4">{t.scores}</h3>
        <div className="ap-scores grid grid-cols-2 gap-4">
          {t.courses.map((course, idx) => (
            <div key={idx} className="score-item">
              <h3>{course.name}</h3>
              <div className="score">Score: {course.score}</div>
            </div>
          ))}
        </div>
        <div className="sat-score text-center mt-8">
          <h3>{t.sat}</h3>
          <div className="score">{t.satScore}</div>
        </div>
      </div>
    </div>
  );
};

export default GemsCoursework;
