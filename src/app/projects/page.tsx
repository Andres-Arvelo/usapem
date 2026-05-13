import { SiteHeader } from "../components/SiteHeader";

const projects = [
  "Commercial build-out",
  "Residential development",
  "Infrastructure improvement",
];

export default function ProjectsPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/projects" />

      <section className="page-hero">
        <p className="page-kicker">Projects</p>
        <h1>A place to showcase completed and current work.</h1>
        <p>
          Add your project photos, names, locations, and descriptions here as
          the portfolio grows.
        </p>
      </section>

      <section className="project-grid" aria-label="Featured projects">
        {projects.map((project, index) => (
          <article className="project-card" key={project}>
            <div className="project-image">Project {index + 1}</div>
            <div>
              <h2>{project}</h2>
              <p>
                Add a brief project summary, scope, timeline, and any standout
                details you want visitors to notice.
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
