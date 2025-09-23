"use client";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';

const contactContent = {
  en: {
    title: "Let's Connect",
    subtitle: "Find me on these platforms",
  },
  fr: {
    title: "Restons en Contact",
    subtitle: "Retrouvez-moi sur ces plateformes",
  },
  es: {
    title: "Conectémonos",
    subtitle: "Encuéntrame en estas plataformas",
  },
  ar: {
    title: "لنتواصل",
    subtitle: "تواصل معي عبر هذه المنصات",
  }
};

const Contact = ({ lang }) => {
  const t = contactContent[lang] || contactContent.en;
  const [showNotification, setShowNotification] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('belloumayayasmine@gmail.com');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 6000); // Hide after 2 seconds
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section 
      id="contact" 
      className="w-full"
      style={{
        backgroundImage: "url('/edubg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "950px",
        height: "950px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="w-full max-w-2xl mx-auto px-4"> {/* Increased from max-w-xl */}
        <div 
          className="bg-white/10 backdrop-blur-md rounded-2xl p-16 shadow-lg border border-white/20" /* Increased from p-12 */
          style={{
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        >
          <h2 className="text-4xl font-bold mb-4 text-black text-center"> {/* Increased from text-3xl */}
            {t.title}
          </h2>
          <p className="text-2xl text-black/90 mb-12 text-center"> {/* Increased from text base and mb-8 */}
            {t.subtitle}
          </p>
          
          <div className="flex justify-center gap-12"> {/* Increased gap from gap-8 */}
            <button 
              onClick={copyEmailToClipboard}
              className="transform transition-transform hover:scale-110"
              aria-label="Copy Email"
            >
              <MdEmail size={60} style={{ color: "#9870ab" }} /> {/* Increased from size={40} */}
            </button>
            <a 
              href="https://github.com/ayayasminebelloum"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={60} style={{ color: "#9870ab" }} /> {/* Increased from size={40} */}
            </a>
            <a 
              href="https://www.linkedin.com/in/aya-belloum-586499382/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={60} style={{ color: "#9870ab" }} /> {/* Increased from size={40} */}
            </a>
          </div>

          {/* Notification Popup */}
          {showNotification && (
            <div 
              className="fixed top-4 right-4 bg-[#9870ab] text-white px-6 py-3 rounded-lg shadow-lg transition-opacity"
              style={{ zIndex: 50 }}
            >
              Email copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
