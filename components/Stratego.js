"use client";
import Image from "next/image";

export default function Stratego() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{
        backgroundImage: "url('/stratbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#000",
      }}
    >
      {/* Logo at the top */}
      <div className="flex justify-center pt-12">
        <Image
          src="/Stratego/logo.png"
          alt="Stratego Logo"
          width={640}
          height={640}
          className="rounded-xl shadow-xl"
        />
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <a
          href="https://drive.google.com/file/d/1-xZIN-SjIgDVKiWPM2C2KxSSM4N-z84-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 bg-[#fff] text-black font-bold rounded-lg shadow hover:bg-[#c0f2dc] hover:text-[#fff] transition mb-2 text-2xl"
        >
          Explore the Project’s code
        </a>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-[2.5rem] font-bold mb-8" style={{ color: "#fff" }}>
          Overview
        </h3>
        <p className="text-[1.5rem] mb-8">
          Stratego is a game of imperfect information where each player commands an army of hidden pieces with varying ranks and abilities. The challenge lies in reasoning about unknown opponent pieces, protecting your flag, and uncovering the enemy’s strategy.
          Our AI was designed to handle these complexities by combining belief states, alpha–beta pruning, and custom heuristics. Together, these techniques allowed the AI to evaluate moves, manage uncertainty, and adapt its tactics dynamically throughout the game.
        </p>
      </section>

      {/* Algorithms and Methods */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#fff" }}>
          Algorithms and Methods
        </h3>
        <h4 className="text-xl font-bold mb-4" style={{ color: "#fff" }}>
          Belief States
        </h4>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Each possible piece was assigned a likelihood of being at a given position.</li>
          <li>Probabilities updated based on revealed moves and captures.</li>
          <li>Allowed the AI to reason about uncertainty instead of guessing blindly.</li>
        </ul>
        <h4 className="text-xl font-bold mb-4" style={{ color: "#fff" }}>
          Alpha–Beta Pruning with Minimax
        </h4>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Minimax assumes both players act optimally: one maximizes gains while the other minimizes them.</li>
          <li>Alpha (α) tracks the best score achievable for the maximizing player.</li>
          <li>Beta (β) tracks the best score achievable for the minimizing player.</li>
          <li>If at any point β ≤ α, further exploration of that branch is cut off, saving computation.</li>
          <li>This pruning drastically reduced the number of states explored while still guaranteeing optimal decisions within the search depth.</li>
        </ul>
        <Image
          src="/Stratego/minmax-alpha-beta.png"
          alt="Minimax to Alpha Beta Diagram"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
        <h4 className="text-xl font-bold mb-4" style={{ color: "#fff" }}>
          Heuristics
        </h4>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Piece Capture Incentives – Rewarded the AI for eliminating opponent pieces, scaled by their rank.</li>
          <li>Bomb Awareness – Penalized moves that blindly attacked bombs unless strategically necessary.</li>
          <li>Flag Proximity (Manhattan Distance) – Rewarded advancing stronger pieces toward the likely flag position.</li>
          <li>Scout and Spy Interaction – Bonuses for positioning strong pieces against known weak or vulnerable enemy types.</li>
          <li>Exploration vs. Aggression Balance – Encouraged exploratory moves when opponent information was scarce, shifting toward aggression once belief states were stronger.</li>
        </ul>
        <Image
          src="/Stratego/final-heuristic.png"
          alt="Final Heuristic"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
      </section>

      {/* Results */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#fff" }}>
          Results
        </h3>
        <p className="text-[1.5rem] mb-8">
          The AI demonstrated competitive play, particularly in mid- and late-game scenarios. By leveraging belief states and alpha–beta pruning, it could move beyond short-term tactics and execute longer strategic plans.
        </p>
      </section>
    </main>
  );
}
