// ...existing imports...
import Hero from '../components/Hero';
// ...existing imports...

export default function Page() {
  return (
    <>
      {/* Render Hero full-bleed at top so it's not constrained by the page card */}
      <Hero lang="en" />

      {/* Main content container for the rest of the sections - centered card style */}
      <main className="max-w-4xl mx-auto px-6">
        {/* Example of sections using the new .card-section class to keep rounded card look */}
        <section className="card-section">
          {/* ...About component or content... */}
        </section>

        <section className="card-section">
          {/* ...Experience, Projects, etc... */}
        </section>

        {/* ...other sections ... */}
      </main>
    </>
  );
}
