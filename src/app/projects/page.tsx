import type { CSSProperties } from "react";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { projectDescription, projects } from "./project-data";

export default function ProjectsPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/projects" />

      <section className="projects-page" aria-labelledby="projects-title">
        <h1 id="projects-title">PROJECTS</h1>

        <div className="project-grid" aria-label="Featured projects">
          {projects.map((project, index) => (
            <Link
              className="project-card project-card-link"
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <article>
                <div
                  className="project-image"
                  aria-label={`${project.name} cover image`}
                  role="img"
                  style={
                    {
                      "--project-image": `url("${project.coverImage}")`,
                    } as CSSProperties
                  }
                >
                  Project {index + 1}
                </div>
                <div className="project-card-copy">
                  <h2>{project.name}</h2>
                  <p>{projectDescription}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
