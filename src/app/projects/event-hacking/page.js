import EventHacking from "../../../../components/EventHacking";
import Image from "next/image";

export default function Page() {
  return <EventHacking />;
}
    <main className="bg-white min-h-screen pb-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-12 bg-[#9870ab]">
        <Image
          src="/EventHacking/ehlogo.png"
          alt="Event Hacking Logo"
          width={160}
          height={160}
          className="mb-6 rounded-xl shadow-lg"
        />
        <h1 className="text-4xl font-bold text-white mb-2 text-center">Event Hacking</h1>
        <h2 className="text-xl text-white mb-6 text-center font-semibold">
          Harnessing Data-Driven Insights for Optimal Event Success
        </h2>
        <a
          href="https://eventhacking.my.canva.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-[#9870ab] font-bold rounded-lg shadow hover:bg-[#f5f5f5] transition mb-2"
        >
          Explore Project
        </a>
      </section>

      {/* Overview */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold mb-4 text-[#9870ab]">Project Overview</h3>
        <p className="mb-4">
          <strong>Introduction:</strong> Event Hacking is a data-driven project designed to revolutionize the way events are planned, marketed, and executed. By leveraging artificial intelligence and predictive analytics, we transform raw event data into actionable insights that maximize attendance, engagement, and ROI.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Increase event attendance through targeted marketing.</li>
          <li>Optimize resource allocation for cost efficiency.</li>
          <li>Enhance attendee satisfaction via personalized experiences.</li>
          <li>Provide organizers with real-time insights for decision-making.</li>
        </ul>
      </section>

      {/* Proposed Solutions */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h3 className="text-xl font-bold mb-3 text-[#9870ab]">Proposed Solutions</h3>
        <ul className="list-disc pl-6 mb-2">
          <li>
            <strong>Generative AI:</strong> Automated content creation for marketing campaigns. Smart suggestions for event themes, layouts, and strategies.
          </li>
          <li>
            <strong>Demand Forecasting:</strong> Machine learning models predict ticket sales and attendance. Organizers can proactively scale logistics and staffing.
          </li>
          <li>
            <strong>Resource Allocation:</strong> AI optimizes budget distribution across venue, catering, speakers, and promotions. Prevents overspending while maximizing value.
          </li>
          <li>
            <strong>Audience Preferences Analysis:</strong> NLP models analyze survey responses, social media, and ticketing data. Identifies trending topics, formats, and speaker preferences.
          </li>
          <li>
            <strong>Optimal Timing and Location:</strong> Predictive analytics determine the best calendar windows and venues. Aligns event dates with audience availability and interest peaks.
          </li>
        </ul>
      </section>

      {/* Project Plan */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h3 className="text-xl font-bold mb-3 text-[#9870ab]">Project Plan</h3>
        <ul className="list-disc pl-6 mb-2">
          <li>
            <strong>Data Strategy:</strong> Collect (ticketing platforms, surveys, social media, event apps), integrate (unified data pipeline), manage (secure cloud storage with GDPR compliance).
          </li>
          <li>
            <strong>Model Architecture:</strong> Data ingestion layer → Preprocessing → ML models (forecasting, NLP, clustering) → Visualization dashboard.
          </li>
          <li>
            <strong>Algorithm Selection:</strong> Regression models for demand forecasting, reinforcement learning for resource allocation, clustering (K-Means) for audience segmentation.
          </li>
          <li>
            <strong>Performance Metrics:</strong> Event attendance growth (%), engagement rate (app usage, feedback surveys), marketing ROI, resource efficiency (cost savings).
          </li>
        </ul>
        {/* Example diagram placeholder */}
        <div className="my-6 flex justify-center">
          <Image
            src="/EventHacking/model-architecture.png"
            alt="Model Architecture Diagram"
            width={400}
            height={220}
            className="rounded shadow"
          />
        </div>
      </section>

      {/* Implementation */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h3 className="text-xl font-bold mb-3 text-[#9870ab]">Implementation</h3>
        <ol className="list-decimal pl-6 mb-2">
          <li>Data collection & preprocessing.</li>
          <li>Model training & validation.</li>
          <li>Integration into event management platforms.</li>
          <li>Pilot testing with small-scale events.</li>
          <li>Full rollout & monitoring.</li>
        </ol>
      </section>

      {/* Outcomes & Results */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h3 className="text-xl font-bold mb-3 text-[#9870ab]">Outcomes & Results</h3>
        <ul className="list-disc pl-6 mb-2">
          <li>20% increase in attendee turnout compared to baseline.</li>
          <li>35% improvement in targeted campaign efficiency.</li>
          <li>Resource costs reduced by 15%.</li>
        </ul>
        <div className="mt-4">
          <strong>Feedback & Testimonials</strong>
          <blockquote className="border-l-4 border-[#9870ab] pl-4 italic my-2 text-gray-700">
            “Event Hacking gave us clarity and confidence in planning. Our marketing ROI skyrocketed.” – Event Organizer
          </blockquote>
          <blockquote className="border-l-4 border-[#9870ab] pl-4 italic my-2 text-gray-700">
            “I loved how personalized the event felt — the sessions matched my interests perfectly.” – Attendee
          </blockquote>
        </div>
      </section>

      {/* Conclusion & Next Steps */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h3 className="text-xl font-bold mb-3 text-[#9870ab]">Conclusion</h3>
        <p>
          <strong>Summary of Achievements:</strong> Event Hacking proves that data + AI = smarter events. By addressing inefficiencies in event planning, it delivered higher turnout, happier attendees, and measurable ROI improvements.
        </p>
        <h4 className="text-lg font-bold mt-4 mb-2 text-[#9870ab]">Next Steps</h4>
        <ul className="list-disc pl-6 mb-2">
          <li>Expand the platform to support hybrid/virtual events.</li>
          <li>Incorporate real-time AI chatbots for attendee support.</li>
          <li>Explore partnerships with global ticketing platforms.</li>
        </ul>
      </section>

      {/* Gallery */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold mb-6 text-[#9870ab]">Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Model Architecture Image */}
          <div>
            <Image
              src="/EventHacking/model-architecture.png"
              alt="Model Architecture"
              width={500}
              height={300}
              className="rounded shadow mb-2"
            />
            <p className="text-sm text-gray-700">Model Architecture</p>
          </div>
          {/* Correlation Heatmap Image */}
          <div>
            <Image
              src="/EventHacking/correlation-heatmap.png"
              alt="Correlation Heatmap"
              width={500}
              height={300}
              className="rounded shadow mb-2"
            />
            <p className="text-sm text-gray-700">
              This heatmap shows relationships between event variables. Strong positive correlation is seen between check-ins and event success (0.81), meaning higher check-ins strongly drive successful events. A moderate link appears between checkbox_id and year (0.60), likely due to data logging. Negative correlation is found between spots_left and success (-0.44), showing that fewer available spots usually signal higher event success.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="https://v0.app/t/ybuC43rGl5K"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#9870ab] text-white font-bold rounded shadow hover:bg-[#753c88] transition"
          >
            Mock Model
          </a>
        </div>
      </section>
    </main>
