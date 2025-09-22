"use client";  
import { useRouter } from "next/navigation";

const categories = [
	{
		name: "Machine Learning / AI",
		color: "#9870ab",
		projects: [
			{ name: "Event Hacking", slug: "event-hacking" },
			{ name: "DocSavvy", slug: "docsavvy" },
			{ name: "Looklytics", slug: "looklytics" },
			{ name: "Smart Elevators", slug: "smart-elevators" },
			{ name: "Recommendation System", slug: "recommendation-system" },
		],
	},
	{
		name: "Games / Game AI",
		color: "#e9cae9",
		projects: [
			{ name: "Brisca", slug: "brisca" },
			{ name: "Stratego", slug: "stratego" },
			{ name: "Minesweeper", slug: "minesweeper" },
		],
	},
	{
		name: "Chatbots / Conversational AI",
		color: "#bfa7d7",
		projects: [{ name: "ArtAI", slug: "artai" }],
	},
	{
		name: "Systems / Software Engineering",
		color: "#753c88",
		projects: [
			{ name: "CookWise", slug: "cookwise" },
			{ name: "Xlang", slug: "xlang" },
			{ name: "Sushi Girls", slug: "sushi-girls" },
			{ name: "Star Bank", slug: "star-bank" },
		],
	},
];

const Projects = ({ lang }) => {
	// Use Next.js router for navigation
	const router = useRouter();

	return (
		<section
			id="projects"
			className="w-full py-16 px-4"
			style={{
				backgroundImage: "url('/edubg.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				minHeight: "665px",
			}}
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold mb-10 text-white text-center">
					PROJECTS
				</h2>
				{/* Category Squares */}
				<div className="flex flex-wrap justify-center gap-8 mb-12">
					{categories.map((cat, idx) => (
						<div
							key={cat.name}
							className="flex flex-col items-center"
							style={{ minWidth: 160 }}
						>
							{/* Square container */}
							<div
								className="flex flex-col items-center justify-start"
								style={{
									width: 270,
									minHeight: 420,
									background: "#9870ab",
									borderRadius: 24,
									boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
									padding: "32px 0 0 0",
									position: "relative",
								}}
							>
								{/* Category Circle */}
								<div
									className="rounded-full flex items-center justify-center mb-6"
									style={{
										width: 88,
										height: 88,
										background: cat.color,
										color: "#fff",
										fontWeight: 700,
										fontSize: "0.85rem",
										boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
										textAlign: "center",
										padding: "0 8px",
										lineHeight: 1.1,
										overflow: "hidden",
										whiteSpace: "pre-line",
									}}
								>
									<span style={{ textAlign: "center", fontSize: "0.85rem", fontWeight: 700 }}>
										{cat.name}
									</span>
								</div>
								{/* Project List */}
								<ul className="flex flex-col gap-3 items-center w-full">
									{cat.projects.map((proj) => (
										<li key={proj.slug} className="w-full flex justify-center">
											<button
												className="rounded bg-white font-semibold shadow hover:bg-[#f5f5f5] transition"
												onClick={() =>
													router.push(`/projects/${proj.slug}`)
												}
												style={{
													width: 180,
													height: 42,
													color: cat.color,
													fontSize: "1rem",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
												}}
											>
												{proj.name}
											</button>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
