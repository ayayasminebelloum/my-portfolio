const aboutContent = {
  en: {
    name: "AYA-YASMINE BELLOUM",
    locations: ["Madrid, Spain", "Doha, Qatar"],
    email: "belloumayayasmine@gmail.com",
    title: "ABOUT ME",
    description: `Computer Science and Artificial Intelligence student at IE University with extensive coursework and hands-on experience in Machine Learning, Deep Learning, NLP, Reinforcement Learning, Computer Vision, High Performance Computing, and Software Development. Skilled in designing and implementing intelligent systems, including AI-powered chatbots, recommendation engines, game-playing agents, and document automation solutions. Passionate about leveraging AI, robotics, and HPC to solve real-world problems with scalable and explainable solutions.`,
  },
  // Add other languages here
};

const About = ({ lang }) => {
  const t = aboutContent[lang] || aboutContent.en;
  return (
    <section id="about" className="w-full max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
      <div className="mb-2 font-semibold">{t.name}</div>
      <div className="mb-2">{t.locations.join(" | ")}</div>
      <div className="mb-2">
        <a href={`mailto:${t.email}`} className="text-blue-600 underline">{t.email}</a>
      </div>
      <p className="mt-4">{t.description}</p>
    </section>
  );
};
export default About;
