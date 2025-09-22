"use client";
import Image from "next/image";

export default function EventHacking() {
	return (
		<main
			className="min-h-screen pb-16"
			style={{
				backgroundImage: "url('/bluebg.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				fontFamily: "'Times New Roman', Times, serif",
			}}
		>
			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center py-20">
				<Image
					src="/EventHacking/ehlogo.png"
					alt="Event Hacking Logo"
					width={640}
					height={640}
					className="mb-12 rounded-xl shadow-xl"
				/>
				{/* Removed Event Hacking text */}
				<h2
					className="mb-10 text-center font-semibold"
					style={{
						fontSize: "1.5rem",
						fontFamily: "'Times New Roman', Times, serif",
						color: "#fff",
					}}
				>
					Harnessing Data-Driven Insights for Optimal Event Success
				</h2>
				<a
					href="https://eventhacking.my.canva.site/"
					target="_blank"
					rel="noopener noreferrer"
					className="px-12 py-6 bg-black text-white font-bold rounded-lg shadow hover:bg-[#222] transition mb-2 text-2xl"
				>
					Explore Project
				</a>
			</section>

			{/* Project Overview */}
			<section className="max-w-4xl mx-auto px-4 py-16">
				<h3 className="text-[2.5rem] font-bold mb-8" style={{ color: "#000" }}>
					Project Overview
				</h3>
				<p className="mb-8 text-white text-[1.5rem]">
					<strong>Introduction:</strong> Event Hacking is a data-driven project
					designed to revolutionize the way events are planned, marketed, and
					executed. By leveraging artificial intelligence and predictive analytics,
					we transform raw event data into actionable insights that maximize
					attendance, engagement, and ROI.
				</p>
				<h4 className="text-[2rem] font-semibold mb-4" style={{ color: "#000" }}>
					Purpose and Goals
				</h4>
				<ul className="list-disc pl-8 mb-8 text-white text-[1.5rem]">
					<li>Increase event attendance through targeted marketing.</li>
					<li>Optimize resource allocation for cost efficiency.</li>
					<li>Enhance attendee satisfaction via personalized experiences.</li>
					<li>Provide organizers with real-time insights for decision-making.</li>
				</ul>
			</section>

			{/* Proposed Solutions */}
			<section className="max-w-4xl mx-auto px-4 py-12">
				<h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#000" }}>
					Proposed Solutions
				</h3>
				<ul className="list-disc pl-8 mb-8 text-white text-[1.5rem]">
					<li>
						<span className="font-bold" style={{ color: "#000" }}>Generative AI:</span> Automated content creation for marketing campaigns. Smart suggestions for event themes, layouts, and strategies.
					</li>
					<li>
						<span className="font-bold" style={{ color: "#000" }}>Demand Forecasting:</span> Machine learning models predict ticket sales and attendance. Organizers can proactively scale logistics and staffing.
					</li>
					<li>
						<span className="font-bold" style={{ color: "#000" }}>Resource Allocation:</span> AI optimizes budget distribution across venue, catering, speakers, and promotions. Prevents overspending while maximizing value.
					</li>
					<li>
						<span className="font-bold" style={{ color: "#000" }}>Audience Preferences Analysis:</span> NLP models analyze survey responses, social media, and ticketing data. Identifies trending topics, formats, and speaker preferences.
					</li>
					<li>
						<span className="font-bold" style={{ color: "#000" }}>Optimal Timing and Location:</span> Predictive analytics determine the best calendar windows and venues. Aligns event dates with audience availability and interest peaks.
					</li>
				</ul>
			</section>

			{/* Project Plan */}
			<section className="max-w-4xl mx-auto px-4 py-12">
				<h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#000" }}>
					Project Plan
				</h3>
				<h4 className="text-[2rem] font-semibold mb-4" style={{ color: "#000" }}>
					Data Strategy
				</h4>
				<ul className="list-disc pl-8 mb-8 text-white text-[1.5rem]">
					<li>Collect: Ticketing platforms, surveys, social media, event apps.</li>
					<li>Integrate: Unified data pipeline.</li>
					<li>Manage: Secure cloud storage with GDPR compliance.</li>
				</ul>
				<h4 className="text-[2rem] font-semibold mb-4" style={{ color: "#000" }}>
					Model Architecture
				</h4>
				<p className="text-white text-[1.5rem] mb-8">
					Data ingestion layer → Preprocessing → ML models (forecasting, NLP, clustering) → Visualization dashboard.
				</p>
				<div className="my-10 flex justify-center">
					<Image
						src="/EventHacking/model-architecture.png"
						alt="Model Architecture Diagram"
						width={500}
						height={300}
						className="rounded shadow"
					/>
				</div>
				<h4 className="text-[2rem] font-semibold mb-4" style={{ color: "#000" }}>
					Algorithm Selection
				</h4>
				<ul className="list-disc pl-8 mb-8 text-white text-[1.5rem]">
					<li>Regression models for demand forecasting.</li>
					<li>Reinforcement learning for resource allocation.</li>
					<li>Clustering (K-Means) for audience segmentation.</li>
				</ul>
				<h4 className="text-[2rem] font-semibold mb-4" style={{ color: "#000" }}>
					Performance Metrics
				</h4>
				<ul className="list-disc pl-8 mb-8 text-white text-[1.5rem]">
					<li>Event attendance growth (%).</li>
					<li>Engagement rate (app usage, feedback surveys).</li>
					<li>Marketing ROI.</li>
					<li>Resource efficiency (cost savings).</li>
				</ul>
			</section>

			{/* Implementation */}
			<section className="max-w-4xl mx-auto px-4 py-12">
				<h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#000" }}>
					Implementation
				</h3>
				<h4 className="text-[2rem] font-semibold mb-4" style={{ color: "#000" }}>
					Step-by-Step Process
				</h4>
				<ol className="list-decimal pl-8 mb-8 text-white text-[1.5rem]">
					<li>Data collection & preprocessing.</li>
					<li>Model training & validation.</li>
					<li>Integration into event management platforms.</li>
					<li>Pilot testing with small-scale events.</li>
					<li>Full rollout & monitoring.</li>
				</ol>
			</section>

			{/* Outcomes & Results */}
			<section className="max-w-4xl mx-auto px-4 py-12">
				<h3 className="text-[2.2rem] font-bold mb-8" style={{ color: "#000" }}>
					Outcomes & Results
				</h3>
				<h4 className="text-[2rem] font-semibold mb-4" style={{ color: "#000" }}>
					Post-Event Engagement
				</h4>
				<ul className="list-disc pl-8 mb-8 text-white text-[1.5rem]">
					<li>20% increase in attendee turnout compared to baseline.</li>
					<li>35% improvement in targeted campaign efficiency.</li>
					<li>Resource costs reduced by 15%.</li>
				</ul>
			</section>

			{/* Next Steps only (Conclusion removed) */}
			<section className="max-w-4xl mx-auto px-4 py-12">
				<h4 className="text-[2rem] font-bold mt-4 mb-4" style={{ color: "#000" }}>
					Next Steps
				</h4>
				<ul className="list-disc pl-8 mb-8 text-white text-[1.5rem]">
					<li>Expand the platform to support hybrid/virtual events.</li>
					<li>Incorporate real-time AI chatbots for attendee support.</li>
					<li>Explore partnerships with global ticketing platforms.</li>
				</ul>
			</section>

			{/* Gallery */}
			<section className="max-w-6xl mx-auto px-4 py-16">
				<h3 className="text-[2.5rem] font-bold mb-12" style={{ color: "#000" }}>
					Gallery
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Model Architecture Image */}
					<div>
						<Image
							src="/EventHacking/model-architecture.png"
							alt="Model Architecture"
							width={600}
							height={360}
							className="rounded shadow mb-4"
						/>
						<p className="text-white text-[1.25rem]">Model Architecture</p>
					</div>
					{/* Correlation Heatmap Image */}
					<div>
						<Image
							src="/EventHacking/correlation-heatmap.png"
							alt="Correlation Heatmap"
							width={600}
							height={360}
							className="rounded shadow mb-4"
						/>
						<p className="text-white text-[1.25rem]">
							This heatmap shows relationships between event variables. Strong positive correlation is seen between check-ins and event success (0.81), meaning higher check-ins strongly drive successful events. A moderate link appears between checkbox_id and year (0.60), likely due to data logging. Negative correlation is found between spots_left and success (-0.44), showing that fewer available spots usually signal higher event success.
						</p>
					</div>
				</div>
				<div className="mt-16 flex justify-center">
					<a
						href="https://v0.app/t/ybuC43rGl5K"
						target="_blank"
						rel="noopener noreferrer"
						className="px-16 py-8 bg-black text-white font-bold rounded-2xl shadow-lg hover:bg-[#222] transition text-3xl"
					>
						Mock Model
					</a>
				</div>
			</section>
		</main>
	);
}