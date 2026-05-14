import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { projectDescription, projects } from "../project-data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function getProjectImages(folder: string) {
  const projectDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "Projects",
    folder,
  );

  function readImages(directory: string): string[] {
    return fs
      .readdirSync(directory, { withFileTypes: true })
      .flatMap((entry) => {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
          return readImages(fullPath);
        }

        const extension = path.extname(entry.name).toLowerCase();
        const isLogo = entry.name.toLowerCase().includes("logo");

        if (!imageExtensions.has(extension) || isLogo) {
          return [];
        }

        const relativePath = path
          .relative(path.join(process.cwd(), "public"), fullPath)
          .split(path.sep)
          .join("/");

        return [`/${relativePath}`];
      });
  }

  return readImages(projectDirectory);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const images = getProjectImages(project.folder);

  return (
    <main className="site-shell">
      <SiteHeader activePath="/projects" />

      <section className="project-detail-page" aria-labelledby="project-title">
        <h1 id="project-title">{project.name}</h1>
        <p className="project-detail-description">{projectDescription}</p>

        <div className="project-gallery" aria-label={`${project.name} images`}>
          {images.map((image, index) => (
            <figure className="project-gallery-item" key={image}>
              <img src={image} alt={`${project.name} image ${index + 1}`} />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
