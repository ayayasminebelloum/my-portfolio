const resumeContent = {
  en: {
    title: "RESUME",
    download: "Download CV (PDF)",
  },
  // ...other languages...
};

const Resume = ({ lang }) => {
  const t = resumeContent[lang] || resumeContent.en;
  return (
    <section id="resume" className="w-full max-w-3xl mx-auto py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
      <a
        href="/Aya%20CV.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
      >
        {t.download}
      </a>
    </section>
  );
};
export default Resume;
