"use client";
import Image from "next/image";

export default function SmartEle() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{
        backgroundImage: "url('/smartel.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#000",
        backgroundColor: "rgba(0,0,0,0.5)"
      }}
    >
      {/* Logo at the top */}
      <div className="flex justify-center pt-12">
        <Image
          src="/SmartEle/logo.png"
          alt="Smart Elevators Logo"
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
            color: "#000",
          }}
        >
          IE Supersmart Elevators<br />
          Optimizing campus mobility through intelligent elevator scheduling.
        </h2>
        <span
          className="px-12 py-6 font-bold rounded-lg shadow mb-2 text-2xl"
          style={{
            background: "#000",
            color: "#fff",
            display: "inline-block",
          }}
        >
          Code unavailable for viewing
        </span>
      </section>
      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-[2.5rem] font-bold mb-8" style={{ color: "#555555" }}>
          Overview
        </h3>
        <p className="text-[1.5rem] mb-8">
          Smart Elevators® is a scheduling and optimization system designed to reduce elevator congestion on university campuses. By predicting traffic, coordinating elevator operations, and offering real-time availability through a mobile app, the solution enhances punctuality, improves daily mobility, and makes commuting more efficient for students and faculty.
        </p>
      </section>
      {/* Problem & Motivation */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#555555" }}>
          Problem & Motivation
        </h3>
        <p className="text-[1.5rem] mb-8">
          At IE University, crowded elevators often cause delays, frustration, and lateness to class. Even students who arrive on time find themselves stuck in long elevator lines during peak hours. This issue highlights the need for an intelligent scheduling system that adapts to demand, reduces bottlenecks, and improves the overall student experience.
        </p>
      </section>
      {/* Research Insights */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#555555" }}>
          Research Insights
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>43.4% rated elevator efficiency as discrete (below average).</li>
          <li>91.7% reported experiencing congestion during peak hours.</li>
          <li>Preferred app interaction methods:</li>
          <ul className="list-disc pl-8 mt-2">
            <li>65.8% Mobile App</li>
            <li>21.9% QR Code</li>
            <li>Others: Blackboard (4.4%), Web (4.4%), All (3.5%)</li>
          </ul>
        </ul>
        <p className="text-[1.5rem] mb-8">
          These insights guided design decisions toward mobile-first solutions with simple, real-time access.
        </p>
      </section>
      {/* Objective & Value Proposition (NABC) */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#555555" }}>
          Objective & Value Proposition (NABC)
        </h3>
        <div className="mb-8 flex justify-center">
          <Image
            src="/SmartEle/nabc-table.png"
            alt="NABC Table"
            width={900}
            height={540}
            className="rounded shadow mb-8 mx-auto"
          />
        </div>
      </section>
      {/* User Personas */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#555555" }}>
          User Personas
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>
            <strong>Students:</strong> Need fast access to classes, clubs, events, and study spaces.
          </li>
          <li>
            <strong>Faculty:</strong> Professors heading to lectures, administrators moving between offices, and staff attending meetings.
          </li>
        </ul>
        <p className="text-[1.5rem] mb-8">
          Each group benefits from reduced delays and improved scheduling.
        </p>
      </section>
      {/* User Experience */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#555555" }}>
          User Experience
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Ease of Use: Intuitive, mobile-first interface for quick navigation.</li>
          <li>Performance: Responsive system with fast scheduling and minimal delays.</li>
          <li>Efficiency: Streamlined communication between app, scheduling algorithm, and elevator control system.</li>
        </ul>
      </section>
      {/* System Architecture */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#555555" }}>
          System Architecture
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Scheduling Algorithm – Assigns elevators dynamically to optimize flow.</li>
          <li>Mobile App & QR Interface – Provides real-time availability and user interaction.</li>
          <li>Database Schema – Stores schedule, usage, and movement data for analytics.</li>
          <li>Feedback Loop – Incorporates user input to refine scheduling efficiency.</li>
        </ul>
        <div className="mb-8 flex justify-center">
          <Image
            src="/SmartEle/system-flow.png"
            alt="System Flow"
            width={900}
            height={540}
            className="rounded shadow mb-8 mx-auto"
          />
        </div>
      </section>
      {/* Possible Improvements */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#555555" }}>
          Possible Improvements
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Personalized Data Collection: Capture usage patterns to predict congestion more accurately.</li>
          <li>Database Optimization: Implement scalable schemas for high-volume scheduling and mobility data.</li>
          <li>Scalability Beyond Campus: Expand system to commercial offices, hospitals, or high-rise buildings.</li>
        </ul>
      </section>
      {/* Prototype & Demo */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#555555" }}>
          Prototype & Demo
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Real-time elevator scheduling preview.</li>
          <li>Simulation of congestion reduction.</li>
          <li>Early-stage UI to showcase user interaction.</li>
        </ul>
      </section>
      {/* Challenges & Lessons */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#555555" }}>
          Challenges & Lessons
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Balancing algorithmic complexity with real-time responsiveness.</li>
          <li>Designing for multiple user personas (students vs. faculty).</li>
          <li>Creating a database schema that can scale to larger environments.</li>
        </ul>
        <p className="text-[1.5rem] mb-8">
          Lessons learned: user research drives design, and data-driven optimization outperforms static solutions.
        </p>
      </section>
      {/* Future Expansion */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#555555" }}>
          Future Expansion
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Multi-campus deployment for IE and beyond.</li>
          <li>Integration with building infrastructure (IoT sensors for elevator load).</li>
          <li>Cross-industry adoption in corporate offices, residential towers, and healthcare.</li>
          <li>AI-driven prediction models for traffic surges (exam days, events).</li>
        </ul>
      </section>
    </main>
  );
}

