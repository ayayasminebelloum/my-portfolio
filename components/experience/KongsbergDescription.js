import { internshipContent } from "../../content/internshipDescriptions";

// UI translations
const uiText = {
  en: { close: "Close" },
  fr: { close: "Fermer" },
  es: { close: "Cerrar" },
  ar: { close: "إغلاق" },
};

export default function KongsbergDescription({ lang = "en", onClose }) {
  const content = internshipContent[lang] || internshipContent.en;
  const item = content.kongsberg;
  const text = uiText[lang] || uiText.en;

  return (
    <div className="coursework-modal">
      <div className="coursework-content">
        <button onClick={onClose} className="close-btn" aria-label={text.close}>
          &times;
        </button>
        <h2 className="text-center mb-4">{item.title}</h2>
        <p className="text-center mb-2">{item.company} — {item.period}</p>
        <div className="courses-list">
          <p>{item.details}</p>
        </div>
      </div>
    </div>
  );
}
