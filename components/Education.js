import { useState } from "react";
import Image from "next/image";
import GemsCoursework from "./coursework/GemsCoursework";
import IECoursework from "./coursework/IECoursework";

const educationContent = {
  en: {
    title: "Education",
    schools: [
      {
        logo: "/ie.png",
        name: "IE University",
        years: "2022 - 2026",
        location: "Madrid, Spain",
        program: "Bachelor's Program in Computer Science & Artificial Intelligence",
        buttonText: "View Key Coursework",
      },
      {
        logo: "/gems.png",
        name: "GEMS American Academy",
        location: "Doha, Qatar",
        years: "2020-2022",
        program: "High School: Grade 11 & 12",
        buttonText: "View AP Courses",
      },
    ],
  },
  fr: {
    title: "Formation",
    schools: [
      {
        logo: "/ie.png",
        name: "IE University",
        years: "2022 - 2026",
        location: "Madrid, Espagne",
        program: "Licence en Informatique et Intelligence Artificielle",
        buttonText: "Voir les cours",
      },
      {
        logo: "/gems.png",
        name: "GEMS American Academy",
        location: "Doha, Qatar",
        years: "2020-2022",
        program: "Lycée: Classes de Première et Terminale",
        buttonText: "Voir les cours AP",
      },
    ],
  },
  es: {
    title: "Educación",
    schools: [
      {
        logo: "/ie.png",
        name: "IE University",
        years: "2022 - 2026",
        location: "Madrid, España",
        program: "Grado en Informática e Inteligencia Artificial",
        buttonText: "Ver asignaturas",
      },
      {
        logo: "/gems.png",
        name: "GEMS American Academy",
        location: "Doha, Qatar",
        years: "2020-2022",
        program: "Bachillerato: Grados 11 y 12",
        buttonText: "Ver cursos AP",
      },
    ],
  },
  ar: {
    title: "التعليم",
    schools: [
      {
        logo: "/ie.png",
        name: "جامعة IE",
        years: "٢٠٢٢ - ٢٠٢٦",
        location: "مدريد، إسبانيا",
        program: "بكالوريوس في علوم الحاسوب والذكاء الاصطناعي",
        buttonText: "عرض المواد الدراسية",
      },
      {
        logo: "/gems.png",
        name: "أكاديمية جيمس الأمريكية",
        location: "الدوحة، قطر",
        years: "٢٠٢٠-٢٠٢٢",
        program: "المدرسة الثانوية: الصف ١١ و ١٢",
        buttonText: "عرض دورات AP",
      },
    ],
  },
};

const Education = ({ lang = "en" }) => {
  const [showCoursework, setShowCoursework] = useState(null);
  const content = educationContent[lang] || educationContent.en;

  return (
    <section className="education-section">
      <div className="education-content">
        {content.schools.map((school, index) => (
          <div key={index} className="education-patch fabric-patch">
            <div className="school-logo">
              <Image
                src={school.logo}
                alt={school.name}
                width={120}
                height={120}
                className="rounded-full bg-white p-2"
              />
            </div>
            <h3 className="school-name">{school.name}</h3>
            {school.location && (
              <p className="school-location">{school.location}</p>
            )}
            <p className="school-years">{school.years}</p>
            <p className="school-program text-center">{school.program}</p>
            <button
              className="view-courses-btn"
              onClick={() => setShowCoursework(index)}
            >
              {school.buttonText}
            </button>
          </div>
        ))}
      </div>

      {showCoursework === 1 && (
        <GemsCoursework lang={lang} onClose={() => setShowCoursework(null)} />
      )}
      {showCoursework === 0 && (
        <IECoursework lang={lang} onClose={() => setShowCoursework(null)} />
      )}
    </section>
  );
};

export default Education;

