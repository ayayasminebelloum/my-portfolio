"use client";
import Image from "next/image";

export default function Brisca() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#000",
      }}
    >
      {/* Logo at the top */}
      <div className="flex justify-center pt-12">
        <Image
          src="/Brisca/logo.png"
          alt="Brisca Logo"
          width={640}
          height={640}
          className="rounded-xl shadow-xl"
        />
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <a
          href="https://colab.research.google.com/drive/15gGy4wblJ0AIXyWBisrULgOThalaUuPh?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 bg-[#cc007e] text-white font-bold rounded-lg shadow hover:bg-[#cc007e] transition mb-2 text-2xl"
        >
          Explore the Project’s code
        </a>
      </section>

      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-[2.5rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Overview
        </h3>
        <p className="text-[1.5rem] mb-8">
          Brisca is a traditional Spanish trick-taking card game where strategy lies in managing uncertainty: players must maximize point captures while inferring what the opponent might hold. Since players don’t have perfect information, the challenge is to evaluate risks and make the best decision given incomplete knowledge.
          Our AI agent for Brisca was built around Monte Carlo simulations supported by tailored heuristics. This hybrid design allowed the system to combine raw probabilistic exploration with domain-specific insights, producing decisions that balanced tactical advantage and long-term planning.
        </p>
      </section>

      {/* Strategy Overview */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Strategy Overview
        </h3>
        <Image
          src="/Brisca/strategy-overview.png"
          alt="Strategy Overview"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
      </section>

      {/* Algorithms and Methods */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Algorithms and Methods
        </h3>
        <h4 className="text-xl font-bold mb-4" style={{ color: "#cc007e" }}>
          Monte Carlo Simulation
        </h4>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Play Candidate Card – The AI selects one card from its hand to test.</li>
          <li>Simulate Random Outcomes – Remaining rounds are played out thousands of times with randomized assumptions about unknown cards.</li>
          <li>Evaluate Final Score – For each simulation, the AI scores the outcome based on points won.</li>
          <li>Aggregate Results – The average outcome across all simulations becomes the “expected value” of the tested card.</li>
          <li>Select Best Move – The card with the highest expected value is chosen.</li>
        </ul>
        <Image
          src="/Brisca/monte-carlo-diagram.png"
          alt="Monte Carlo Diagram"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
        <p className="text-[1.5rem] mb-8">
          This method provides statistical grounding to decision-making, allowing the AI to weigh not only immediate gains but also long-term payoffs under uncertainty.
        </p>
        <h4 className="text-xl font-bold mb-4" style={{ color: "#cc007e" }}>
          Search Depth and Iteration Control
        </h4>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>The number of simulated games per card was adjusted dynamically depending on how many cards remained in play.</li>
          <li>More simulations were allocated in the late game, when fewer unknowns made simulations more accurate.</li>
          <li>Early game simulations were broader but faster, providing reasonable estimates without consuming unnecessary computation.</li>
        </ul>
      </section>

      {/* Heuristics */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Heuristics
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li><strong>Trump Card Bonus:</strong> Trump cards are the most powerful suit. The AI assigned them higher baseline values. In decisive late rounds, trump cards gained an even stronger multiplier.</li>
          <li><strong>Opponent Blocking Reward:</strong> If playing a certain card could prevent the opponent from winning a high-value round, the move received a bonus.</li>
          <li><strong>Suit Matching Bonus:</strong> Encouraged following the led suit when beneficial.</li>
          <li><strong>Late-Game Boost:</strong> As the deck ran out, the evaluation of high-value cards (e.g., Ace, Three) increased.</li>
          <li><strong>Penalty for Early Use of High-Value Cards:</strong> Discouraged wasting Aces or Threes in early rounds unless strategically unavoidable.</li>
          <li><strong>Remaining Card Count Adjustment:</strong> Adjusted evaluations based on total cards left. Early game: promoted conservative play. Endgame: rewarded bold, decisive moves when outcomes could be locked in.</li>
        </ul>
        <Image
          src="/Brisca/final-heuristic-diagram.png"
          alt="Final Heuristic Diagram"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
      </section>

      {/* Example of Evaluation Flow */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Example of Evaluation Flow
        </h3>
        <p className="text-[1.5rem] mb-8">
          Suppose the AI has three candidate plays: a trump Seven, a mid-value card that matches the led suit, a low-value discard.
          Monte Carlo simulations might show the trump Seven leading to the best average outcome. But if the game is early and wasting a trump is strategically weak, the heuristic layer penalizes that option, shifting preference toward the mid-value play. This integration of statistics + heuristics made the agent’s choices both grounded in probability and reflective of human strategy.
        </p>
        <Image
          src="/Brisca/alpha-beta-diagram.png"
          alt="Alpha Beta Diagram"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
      </section>

      {/* Results */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Results
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>In the early game, it conserved resources and avoided unnecessary risks.</li>
          <li>In the midgame, it balanced blocking the opponent with capturing valuable tricks.</li>
          <li>In the endgame, it executed aggressive, decisive plays, leveraging trumps and high-value cards at the optimal time.</li>
          <li>The combination of Monte Carlo rollouts and heuristic refinements consistently produced competitive play that could challenge human players.</li>
        </ul>
      </section>
    </main>
  );
}
