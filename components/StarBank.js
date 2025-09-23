"use client";
import Image from "next/image";

export default function StarBank() {
  return (
    <main
      className="min-h-screen pb-16"
      style={{
        backgroundImage: "url('/starbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#000",
      }}
    >
      {/* Logo at the top */}
      <div className="flex justify-center pt-12">
        <Image
          src="/StarBank/logo.png"
          alt="Star Bank Logo"
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
          A secure, scalable, and modern online banking platform built with cloud-first architecture.
        </h2>
        <a
          href="https://github.com/Star-Bank-Project"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 bg-[#823ca6] text-white font-bold rounded-lg shadow hover:bg-[#823ca6] transition mb-2 text-2xl"
        >
          Explore the Project's code
        </a>
      </section>

      {/* Project Vision */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-[2.5rem] font-bold mb-8" style={{ color: "#6299ba" }}>
          Project Vision
        </h3>
        <p className="text-[1.5rem] mb-8">
          The STAR BANK project was developed to reimagine how digital banking platforms can deliver simplicity, security, and scalability.
          The goal was to create a seamless online banking experience that allows users to:
        </p>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Effortlessly manage their finances</li>
          <li>Carry out global transactions in multiple currencies</li>
          <li>Enjoy top-level security while reducing reliance on physical bank branches</li>
        </ul>
      </section>

      {/* Infrastructure Architecture */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#6299ba" }}>
          Infrastructure Architecture
        </h3>
        <div className="mb-8">
          <h4 className="text-xl font-bold mb-4" style={{ color: "#6299ba" }}>
            Infrastructure Diagram
          </h4>
          <Image
            src="/StarBank/infrastructure-diagram.png"
            alt="Infrastructure Diagram"
            width={900}
            height={540}
            className="rounded shadow mb-8 mx-auto"
          />
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-bold mb-4" style={{ color: "#6299ba" }}>
            Data Flow
          </h4>
          <Image
            src="/StarBank/data-flow.png"
            alt="Data Flow"
            width={900}
            height={540}
            className="rounded shadow mb-8 mx-auto"
          />
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-bold mb-4" style={{ color: "#6299ba" }}>
            Entity Relationship Diagram
          </h4>
          <Image
            src="/StarBank/entity-relationship.png"
            alt="Entity Relationship Diagram"
            width={900}
            height={540}
            className="rounded shadow mb-8 mx-auto"
          />
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-bold mb-4" style={{ color: "#6299ba" }}>
            Infrastructure Architecture in Action
          </h4>
          <Image
            src="/StarBank/infrastructure-action.png"
            alt="Infrastructure Architecture in Action"
            width={900}
            height={540}
            className="rounded shadow mb-8 mx-auto"
          />
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#6299ba" }}>
          Technical Implementation
        </h3>
        <h4 className="text-xl font-bold mb-4" style={{ color: "#6299ba" }}>
          Stack Overview
        </h4>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>Frontend: Responsive web app deployed via Azure Static Web Apps</li>
          <li>Backend: Docker-enabled Azure App Service for Containers (microservices)</li>
          <li>Database: PostgreSQL (Azure PaaS) with modularized Bicep templates for deployment</li>
          <li>Infrastructure as Code (IaC): Azure Bicep modules for reproducible and scalable deployments</li>
          <li>Monitoring: Azure Application Insights + Log Analytics Workspace</li>
        </ul>
      </section>

      {/* Service Level Targets */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#6299ba" }}>
          Service Level Targets
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>99% Uptime – Monthly uptime for frontend & backend services</li>
          <li>95% Account Access Success – Ensures users rarely face login errors</li>
          <li>99% Transactions &lt;2s – Fast global payment handling</li>
          <li>99.9% Login Success – Robust authentication with minimal disruptions</li>
          <li>99.99% Transaction Accuracy – Ensures error-free fund transfers</li>
        </ul>
      </section>

      {/* Roadmap */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#6299ba" }}>
          Roadmap
        </h3>
        <ul className="list-disc pl-8 mb-8 text-[1.5rem]">
          <li>AI-powered Fraud Detection – Machine learning models for suspicious activity</li>
          <li>Expanded Currency Support – Support for crypto and more fiat currencies</li>
          <li>Mobile App – iOS/Android apps for global accessibility</li>
          <li>Open Banking APIs – Enable third-party integrations securely</li>
        </ul>
      </section>
    </main>
  );
}
