"use client";
import Image from "next/image";

export default function Xlang() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{
        backgroundImage: "url('/xlangbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#fff",
      }}
    >
      {/* Logo at the top */}
      <div className="flex justify-center pt-12">
        <Image
          src="/Xlang/logo.png"
          alt="Xlang Logo"
          width={640}
          height={640}
          className="rounded-xl shadow-xl"
        />
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <a
          href="https://github.com/ayayasminebelloum/XLang"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 bg-[#cc007e] text-white font-bold rounded-lg shadow hover:bg-[#cc007e] transition mb-2 text-2xl"
        >
          Explore the Project’s code
        </a>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-[2.5rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Introduction
        </h3>
        <p className="text-[1.5rem] mb-8">
          XLANG is a programming language designed from the ground up to be simple, readable, and educational. Its goal is to lower the barrier to entry for coding beginners while reinforcing higher-level problem-solving concepts. By combining clear syntax with user-friendly error handling, XLANG makes learning to code more approachable for students and educators alike.
        </p>
      </section>

      {/* Motivation & Problem Context */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Motivation & Problem Context
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Only 23% of students report knowing at least one coding language.</li>
          <li>Among high schoolers, that number drops to 20%.</li>
          <li>74% of girls say they don’t consider a career in CS, largely due to lack of pre-college exposure.</li>
          <li>Parents and students alike recognize the importance of coding, but access to beginner-friendly platforms is still lacking. XLANG addresses this gap.</li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Target Audience
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>High School Students & Teachers — enrich math and STEM curricula with coding exercises.</li>
          <li>University Freshmen — provide an approachable first programming language.</li>
          <li>Beginner Coders of Any Age — gain confidence through a simple, guided learning experience.</li>
        </ul>
      </section>

      {/* Design Philosophy: Simplicity */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Design Philosophy: Simplicity
        </h3>
        <p className="text-[1.5rem] mb-8">
          XLANG’s core principle is simplicity. The syntax avoids jargon, using intuitive keywords and natural-language-like constructs. This reduces cognitive load for beginners and emphasizes concepts over memorization.
          Clear, beginner-focused error messages help learners debug without frustration, turning mistakes into learning opportunities.
        </p>
      </section>

      {/* Language Features */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Language Features
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li><strong>Assignment:</strong> Uses IS instead of = for assignments (e.g., X IS 5) to feel more intuitive.</li>
          <li><strong>Data Types:</strong> Supports NUMBER (INT), DECIMAL, TEXT, LETTER, and T/F (booleans).</li>
          <li><strong>Data Structures:</strong> LIST (like arrays), DICT (like dictionaries/maps), GROUP (for unions / class-like collections).</li>
          <li><strong>Operators:</strong> Arithmetic (ADD, SUB, MULT, DIV, AVG, MAX, MIN), Comparisons (EQUAL, NOT EQUAL, GREATER THAN, LESSER THAN, etc.).</li>
          <li><strong>Control Flow:</strong> IF / THEN for conditionals, FOR and WHILE loops for iteration.</li>
          <li><strong>I/O Functions:</strong> INPUT for user input, OUTPUT for results.</li>
        </ul>
        <p className="text-[1.5rem] mb-8">
          Together, these provide enough expressiveness for basic programs, problem-solving exercises, and math-related tasks, while avoiding overwhelming complexity.
        </p>
      </section>

      {/* Development Progress */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Development Progress
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Lexer & Parser: Completed</li>
          <li>Interpreter: In progress</li>
          <li>Error Handling: Implemented with detailed, beginner-friendly explanations</li>
        </ul>
        <p className="text-[1.5rem] mb-8">
          This foundation enables simple programs to be written, parsed, and debugged in XLANG’s syntax.
        </p>
      </section>

      {/* Error Handling */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Error Handling
        </h3>
        <p className="text-[1.5rem] mb-8">
          Unlike traditional compilers that produce cryptic errors, XLANG prioritizes lucid explanations. Example:
          Instead of SyntaxError: unexpected token, XLANG might say:
          “You forgot a keyword. Did you mean IS instead of =?”
          This design empowers learners to fix their own mistakes and better understand language rules.
        </p>
      </section>

      {/* Demo / Prototype */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Demo / Prototype
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Variable assignment with IS</li>
          <li>Basic math operations</li>
          <li>Control flow with conditionals and loops</li>
          <li>Error reporting with beginner-friendly messages</li>
        </ul>
      </section>

      {/* Resources & References */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Resources & References
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>GitHub projects on compiler and interpreter design</li>
          <li>Educational research on why kids should learn coding</li>
          <li>Tutorials on building interpreters and parsers</li>
          <li>eSchool News statistics on coding literacy</li>
        </ul>
      </section>
    </main>
  );
}
