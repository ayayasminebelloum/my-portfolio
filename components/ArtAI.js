"use client";
import Image from "next/image";

export default function ArtAI() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{
        backgroundImage: "url('/artbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Logo at the top */}
      <div className="flex justify-center pt-12">
        <Image
          src="/ArtAI/logo.png"
          alt="ArtAI Logo"
          width={320}
          height={320}
          className="rounded-xl shadow-xl"
        />
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <h2
          className="mb-10 font-normal max-w-4xl mx-auto"
          style={{
            fontSize: "1.5rem",
            fontFamily: "'Times New Roman', Times, serif",
            color: "#fff",
          }}
        >
          An Interactive Artist-Centered Chatbot<br />
          Immersing learners in art history through AI-powered conversations.
        </h2>
        <a
          href="https://github.com/ayayasminebelloum/ArtAI"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 bg-[#ff6600] text-white font-bold rounded-lg shadow hover:bg-[#ff6600] transition mb-2 text-2xl"
        >
          Explore the Project’s code
        </a>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-[2.5rem] font-bold mb-8" style={{ color: "#ff6600" }}>
          Overview
        </h3>
        <p className="text-[1.5rem] mb-8">
          ArtifAI is a conversational QA chatbot designed to make art history engaging, accessible, and memorable. By simulating the voices and personalities of 15 iconic artists, the system allows users to explore history through immersive, interactive dialogue. Rather than passively reading facts, learners can “converse” with artists and experience art history in a personal way.
        </p>
      </section>

      {/* Motivation & Value Proposition */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#ff6600" }}>
          Motivation & Value Proposition
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Immersive, interactive dialogue with famous artists.</li>
          <li>Deeper art appreciation through storytelling and contextual answers.</li>
          <li>Rich artist profiles blending factual accuracy with authentic personality traits.</li>
        </ul>
        <p className="text-[1.5rem] mb-8">
          This makes art exploration engaging, human-like, and personalized.
        </p>
      </section>

      {/* Literature Inspiration */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#ff6600" }}>
          Literature Inspiration
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>“PersonaLLM” (Jiang et al.) — LLMs can simulate human personality traits.</li>
          <li>Scatoliga (Bias in AI) — Risks of cultural bias in AI, focus on fair and inclusive artist modeling.</li>
          <li>UCLM (2023) — NLP chatbots enhance historical analysis and education, inspiring similar methods in art history.</li>
        </ul>
      </section>

      {/* Frontend */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#ff6600" }}>
          Frontend
        </h3>
        <Image
          src="/ArtAI/app-ui.png"
          alt="ArtAI App UI"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
      </section>

      {/* App Functionality */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#ff6600" }}>
          App Functionality
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Choose an artist persona.</li>
          <li>Ask a question.</li>
          <li>Receive contextualized answers in the artist’s “voice.”</li>
          <li>Continue the dialogue, switch artists, or end the session.</li>
        </ul>
        <p className="text-[1.5rem] mb-8">
          This creates a seamless, interactive learning experience.
        </p>
        <Image
          src="/ArtAI/app-flow.png"
          alt="ArtAI App Flow"
          width={600}
          height={360}
          className="rounded shadow mb-8 mx-auto"
        />
      </section>

      {/* Backend Pipeline & Architecture */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#ff6600" }}>
          Backend Pipeline & Architecture
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>
            <strong>Data Collection:</strong> Wikipedia, Wikidata, Wikiquote; summaries and biographies into structured CSVs.
          </li>
          <li>
            <strong>Preprocessing:</strong> Unicode normalization, punctuation stripping, whitespace cleanup, tokenization & lemmatization (spaCy), NER for names/movements.
          </li>
          <li>
            <strong>Feature Engineering & Embeddings:</strong> TF-IDF, GloVe, MiniLM-L6-v2 for semantic embeddings; FAISS index for fast retrieval.
          </li>
          <li>
            <strong>Model Training & Fine-Tuning:</strong> GPT-2 fine-tuned on prompt–response pairs; outputs serialized for serving.
          </li>
          <li>
            <strong>Serving Layer:</strong> Flask backend with /chat API; web UI with artist selector, avatars, chat bubbles.
          </li>
        </ul>
        <div className="mb-8">
          <h4 className="text-xl font-bold mb-2" style={{ color: "#ff6600" }}>
            Dataset Screenshot
          </h4>
          <Image
            src="/ArtAI/dataset.png"
            alt="ArtAI Dataset"
            width={900}
            height={540}
            className="rounded shadow mb-8 mx-auto"
          />
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-bold mb-2" style={{ color: "#ff6600" }}>
            Artist Bio Embeddings Visualization
          </h4>
          <Image
            src="/ArtAI/artist-bio-embeddings.png"
            alt="Artist Bio Embeddings"
            width={900}
            height={540}
            className="rounded shadow mb-8 mx-auto"
          />
        </div>
      </section>

      {/* Evaluation */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#ff6600" }}>
          Evaluation
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li><strong>Strengths:</strong> Relevant, contextual information retrieval. Efficient response time (~23ms/token). No hallucination in controlled queries.</li>
          <li><strong>Weaknesses:</strong> Limited data diversity for some artists. Generalization challenges with open-ended queries.</li>
        </ul>
      </section>

      {/* Future Improvements */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#ff6600" }}>
          Future Improvements
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Multimodal inputs/outputs (images + text).</li>
          <li>Continual learning via user feedback.</li>
          <li>Long-term memory for conversational context.</li>
          <li>Expanded artist roster and multilingual support.</li>
        </ul>
      </section>
    </main>
  );
}
