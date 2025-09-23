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
			{ name: "Smart Recommendations", slug: "recommendation-system" },
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

const introSentences = {
	en: "Here are the projects I worked on to date. Click on each to explore the project.",
	fr: "Voici les projets sur lesquels j'ai travaillé à ce jour. Cliquez sur chacun pour explorer le projet.",
	es: "Aquí están los proyectos en los que he trabajado hasta la fecha. Haz clic en cada uno para explorar el proyecto.",
	ar: "هذه هي المشاريع التي عملت عليها حتى الآن. انقر على كل مشروع لاستكشافه."
};

const Projects = ({ lang }) => {
	// Use Next.js router for navigation
	const router = useRouter();
	const intro = introSentences[lang] || introSentences.en;

	return (
		<section
			id="projects"
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
			<div className="max-w-6xl mx-auto w-full px-4">
				<h2 className="text-4xl font-bold mb-10 text-white text-center">
					PROJECTS
				</h2>
				<p
					className="text-2xl font-bold text-center mb-8 max-w-2xl mx-auto"
					style={{ color: "#171717" }}
				>
					{intro}
				</p>
				{/* Category Squares */}
				<div className="flex flex-wrap justify-center gap-8 mb-12">
					{categories.map((cat) => (
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
									minHeight: 420, // restored to previous value
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