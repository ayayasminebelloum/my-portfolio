import { useState } from "react";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { internshipContent } from "../content/internshipDescriptions";
import NakilatDescription from "./experience/NakilatDescription";
import KongsbergDescription from "./experience/KongsbergDescription";

// UI translations for buttons and badges
const uiText = {
  en: { learnMore: "Learn More", comingSoon: "Coming Soon" },
  fr: { learnMore: "Voir plus", comingSoon: "Bientôt disponible" },
  es: { learnMore: "Ver más", comingSoon: "Próximamente" },
  ar: { learnMore: "المزيد", comingSoon: "قريباً" },
};

export default function Experience({ lang = "en" }) {
  const [showCompany, setShowCompany] = useState(null);
  const content = internshipContent[lang] || internshipContent.en;
  const text = uiText[lang] || uiText.en;

  const companies = [
    { ...content.nakilat, logo: "/nakilat.png", status: "active" },
    { ...content.kongsberg, logo: "/kongsberg.png", status: "coming-soon" }
  ];

  return (
    <section className="experience-section">
      <div className="experience-content">
        <VerticalTimeline>
          {companies.map((company, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element ${company.status}`}
              date={company.period}
              contentStyle={{
                background: "#f5f5f5",
                border: "2px dashed white",
                borderRadius: "8px",
                boxShadow: "0 0 6px rgba(0,0,0,0.2)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #f5f5f5" }}
              iconStyle={{ background: "white", color: "#fff" }}
              icon={
                <div className="company-logo-wrapper">
                  <Image
                    src={company.logo}
                    alt={company.company}
                    width={60}
                    height={60}
                    className="company-logo"
                  />
                </div>
              }
            >
              <div className="timeline-content">
                {company.status === "coming-soon" && (
                  <div className="coming-soon-badge">{text.comingSoon}</div>
                )}
                <h3 className="job-title">{company.title}</h3>
                <h4 className="company-name">{company.company}</h4>
                <div className="skills-container">
                  {company.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>

                <button
                  className="view-courses-btn"
                  onClick={() => setShowCompany(index)}
                >
                  {text.learnMore}
                </button>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {showCompany === 0 && (
        <NakilatDescription lang={lang} onClose={() => setShowCompany(null)} />
      )}
      {showCompany === 1 && (
        <KongsbergDescription lang={lang} onClose={() => setShowCompany(null)} />
      )}
    </section>
  );
}
