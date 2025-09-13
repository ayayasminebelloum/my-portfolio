import { internshipContent } from "../../content/internshipDescriptions";

export default function NakilatDescription({ lang = "en", onClose }) {
  const content = internshipContent[lang] || internshipContent.en;
  const item = content.nakilat;

  return (
    <div className="coursework-modal">
      <div className="coursework-content">
        <button onClick={onClose} className="close-btn">&times;</button>
        <h2 className="text-center mb-4">{item.title}</h2>
        <p className="text-center mb-2">{item.company} — {item.period}</p>
        <div className="courses-list">
          <p>{item.details}</p>
        </div>
      </div>
    </div>
  );
}
