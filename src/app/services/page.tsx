import { SiteHeader } from "../components/SiteHeader";

const services = [
  "Project planning",
  "Construction management",
  "Engineering support",
  "Site coordination",
  "Permitting assistance",
  "Quality review",
];

export default function ServicesPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/services" />

      <section className="page-hero">
        <p className="page-kicker">Services</p>
        <h1>Support for every stage of the project.</h1>
        <p>
          Organize your services here so visitors can quickly understand what
          PEM can handle and where your team adds the most value.
        </p>
      </section>

      <section className="service-grid" aria-label="PEM services">
        {services.map((service) => (
          <article className="service-card" key={service}>
            <h2>{service}</h2>
            <p>
              Add a short description for this service, including what the
              client receives and why it matters to their project.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
