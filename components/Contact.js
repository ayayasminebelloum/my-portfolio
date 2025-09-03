const contactContent = {
  en: {
    title: "CONTACT",
    email: "belloumayayasmine@gmail.com",
    github: {
      label: "GitHub",
      url: "https://github.com/ayayasminebelloum"
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/aya-belloum-586499382/"
    }
  },
  // ...other languages...
};

const Contact = ({ lang }) => {
  const t = contactContent[lang] || contactContent.en;
  return (
    <section id="contact" className="w-full max-w-3xl mx-auto py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
      <div className="mb-2">
        <a href={`mailto:${t.email}`} className="text-blue-600 underline">{t.email}</a>
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <a href={t.github.url} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:underline">{t.github.label}</a>
        <a href={t.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">{t.linkedin.label}</a>
      </div>
    </section>
  );
};

export default Contact;
