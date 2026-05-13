import { SiteHeader } from "../components/SiteHeader";

export default function AboutUsPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/about-us" />

      <section className="page-hero">
        <p className="page-kicker">About Us</p>
        <h1>Engineering practical, dependable project solutions.</h1>
        <p>
          PEM supports construction and engineering work with clear planning,
          careful coordination, and a commitment to strong project delivery.
        </p>
      </section>

      <section className="content-section">
        <div>
          <h2>Who We Are</h2>
          <p>
            Add your company story here: when PEM started, what areas you serve,
            and what makes your team trusted by clients and partners.
          </p>
        </div>
        <div>
          <h2>Our Approach</h2>
          <p>
            Use this space to describe your process, safety standards, planning
            habits, and the values that guide each project.
          </p>
        </div>
      </section>
    </main>
  );
}
