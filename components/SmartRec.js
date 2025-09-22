"use client";
import Image from "next/image";

export default function SmartRec() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{
        backgroundImage: "url('/smartrec.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#fff",
      }}
    >
      {/* Logo at the top */}
      <div className="flex justify-center pt-12">
        <Image
          src="/SmartRec/logo.png"
          alt="Smart Recommendations Logo"
          width={640}
          height={640}
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
          Hybrid Recommendation System<br />
          Where Data Meets Customer Delight
        </h2>
        <a
          href="https://colab.research.google.com/drive/1NqAM2p-C0IDuQQoPQxgkv4BPYj-qv1Fl?usp=sharing"
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
          In digital marketplaces, recommendation systems are a key driver of engagement, conversions, and customer satisfaction. The issue I identified was that the existing system displayed products at random, resulting in low engagement, weak conversions, and poor user satisfaction.
          My goal was to design and implement a smarter recommendation engine that not only personalizes results but also introduces products aligned with user preferences. By combining multiple recommendation strategies — from demographic filtering to hybrid ensemble methods — I built a system that adapts to different user types and interaction histories.
        </p>
      </section>

      {/* Datasets */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Datasets
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Users: 14,306,064</li>
          <li>Games: 14,306,064</li>
          <li>Reviews: 14,306,064</li>
        </ul>
        <p className="text-[1.5rem] mb-8">
          I also worked with a metadata JSON containing tags, game features, and textual descriptions. To make the data usable for recommendation algorithms, I performed several preprocessing steps:
        </p>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Filtered out users with fewer than 100 reviews to ensure high-quality training data.</li>
          <li>Transformed tag lists into multiple rows (one tag per row) for granularity.</li>
          <li>Normalized numeric attributes and one-hot encoded categorical fields.</li>
          <li>Binarized tags with a MultiLabelBinarizer, keeping only popular ones (appearing more than 20 times).</li>
          <li>Vectorized game descriptions and titles using BERT-based embeddings to capture semantic meaning.</li>
        </ul>
        <div className="mb-8 flex flex-col items-center gap-8">
          <Image
            src="/SmartRec/users-dataset.png"
            alt="Users Dataset"
            width={900}
            height={540}
            className="rounded shadow mb-4"
          />
          <Image
            src="/SmartRec/games-dataset.png"
            alt="Games Dataset"
            width={900}
            height={540}
            className="rounded shadow mb-4"
          />
          <Image
            src="/SmartRec/reviews-dataset.png"
            alt="Reviews Dataset"
            width={900}
            height={540}
            className="rounded shadow mb-4"
          />
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Approach
        </h3>
        <Image
          src="/SmartRec/approach.png"
          alt="Recommendation Approach"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
      </section>

      {/* Recommendation Approaches */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Recommendation Approaches
        </h3>
        <h4 className="text-xl font-bold mb-4" style={{ color: "#cc007e" }}>
          1. Non-Personalized: Demographic Filtering
        </h4>
        <p className="text-[1.5rem] mb-8">
          As a baseline, I implemented a non-personalized system that recommends the most popular games overall. Ranking was based on playtime and review volume. A minimum of 50 reviews ensured only meaningful items were recommended. This method was useful for cold-start users but lacked personalization.
        </p>
        <Image
          src="/SmartRec/demographic-results.png"
          alt="Demographic Filtering Results"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />

        <h4 className="text-xl font-bold mb-4" style={{ color: "#cc007e" }}>
          2. Content-Based Filtering
        </h4>
        <p className="text-[1.5rem] mb-8">
          Content-based filtering recommends items based on their similarity to games the user has already enjoyed. I engineered three types of features: numerical, categorical, and textual (BERT embeddings). Games are encoded into feature vectors, similarity scores are computed, and the most similar games are recommended.
        </p>
        <Image
          src="/SmartRec/content-based-results.png"
          alt="Content-Based Filtering Results"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />

        <h4 className="text-xl font-bold mb-4" style={{ color: "#cc007e" }}>
          3. Collaborative Filtering (Item-Based)
        </h4>
        <p className="text-[1.5rem] mb-8">
          Item-based collaborative filtering leverages user behavior to recommend items. A user–item interaction matrix is built, item–item similarity is computed, and personalized top-N recommendations are generated for each user.
        </p>
        <Image
          src="/SmartRec/collaborative-results.png"
          alt="Collaborative Filtering Results"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
      </section>

      {/* Hybrid Models */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Hybrid Models
        </h3>
        <h4 className="text-xl font-bold mb-4" style={{ color: "#cc007e" }}>
          Hybrid 1: Weighted
        </h4>
        <p className="text-[1.5rem] mb-8">
          Combines collaborative filtering and content-based scores using a weighted sum. Optimal balance: α = 0.6, giving 60% weight to CF. Works well for warm users.
        </p>
        <Image
          src="/SmartRec/hybrid-weighted-results.png"
          alt="Hybrid Weighted Results"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />

        <h4 className="text-xl font-bold mb-4" style={{ color: "#cc007e" }}>
          Hybrid 2: Cascade
        </h4>
        <p className="text-[1.5rem] mb-8">
          A sequential multi-stage filter: popularity filter, content reranking, collaborative filtering. Improves efficiency while retaining personalization.
        </p>
        <Image
          src="/SmartRec/hybrid-cascade-results.png"
          alt="Hybrid Cascade Results"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />

        <h4 className="text-xl font-bold mb-4" style={{ color: "#cc007e" }}>
          Hybrid 3: Switching (Final Model)
        </h4>
        <p className="text-[1.5rem] mb-8">
          Dynamically adapts to user type: cold users get popularity-based, semi-warm get content-based, warm get collaborative filtering. Ensures every user segment receives meaningful recommendations.
        </p>
        <Image
          src="/SmartRec/hybrid-switching-results.png"
          alt="Hybrid Switching Results"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
      </section>

      {/* Overall Results */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Overall Results
        </h3>
        <Image
          src="/SmartRec/overall-results.png"
          alt="Overall Results"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
      </section>

      {/* Precision vs Recall vs F1 */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Precision vs Recall vs F1 (All Recommenders)
        </h3>
        <Image
          src="/SmartRec/precision-recall-f1.png"
          alt="Precision vs Recall vs F1"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
      </section>

      {/* Heatmap of All Evaluation Metrics */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Heatmap of All Evaluation Metrics
        </h3>
        <Image
          src="/SmartRec/evaluation-heatmap.png"
          alt="Evaluation Metrics Heatmap"
          width={900}
          height={540}
          className="rounded shadow mb-8 mx-auto"
        />
      </section>

      {/* Business Impact */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Business Impact
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Enhanced User Engagement: More relevant recommendations improved browsing sessions.</li>
          <li>Revenue Growth: Personalized suggestions increased the probability of conversions.</li>
          <li>Competitive Advantage: Advanced hybrid approaches created differentiation from basic recommendation systems.</li>
          <li>Sustainable Framework: A modular architecture allows continued improvement and scaling.</li>
        </ul>
      </section>

      {/* Beyond the Algorithm */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Beyond the Algorithm
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Filter Bubbles: Ensuring diversity in recommendations.</li>
          <li>Bias and Fairness: Preventing overrepresentation of already popular titles.</li>
          <li>Data Privacy: Responsible handling of user interaction data.</li>
          <li>Cold Start: Providing meaningful recommendations for brand-new users.</li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#cc007e" }}>
          Next Steps
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Build a real-time feedback loop to adjust recommendations dynamically.</li>
          <li>Improve metadata quality and enrich review signals.</li>
          <li>Run A/B tests in live environments to measure engagement and conversion impact.</li>
        </ul>
      </section>
    </main>
  );
}
