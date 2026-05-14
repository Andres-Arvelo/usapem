import { SiteHeader } from "../components/SiteHeader";

export default function AboutUsPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/about-us" />

      <section className="about-title" aria-labelledby="about-title">
        <h1 id="about-title">ABOUT USAPEM</h1>
      </section>

      <section className="about-layout" aria-label="About USAPEM">
        <div className="about-copy">
          <h2>ABOUT US</h2>
          <h3>ABOUT US</h3>
          <p>
            Professional Engineering Management (PEM) offers comprehensive civil
            engineering services and construction management for commercial,
            residential, and industrial projects. Our services include planning,
            evaluation, design, permitting, and construction management of civil
            and environmental projects. Our team comprises licensed
            professionals with specialized engineering skills and extensive
            experience.
          </p>
          <p>
            PEM is committed to delivering our clients&apos; projects on time and
            within budget. Leveraging over 20 years of experience, we manage
            every phase of a project from planning through design and
            construction. Additionally, we collaborate with top-tier architects,
            planners, surveyors, and environmental and geotechnical consultants
            to ensure we have the full range of expertise required for
            successful project execution.
          </p>

          <h3>VISION</h3>
          <p>
            PEM&apos;s vision is to grow and be the company of choice by:
            <br />
            Being a recognized leader in the industry
            <br />
            Creating exceptional value for our clients
            <br />
            Building long-term relationships
            <br />
            Capitalizing on opportunities to strengthen the company
          </p>

          <h3>MISSION</h3>
          <p>
            PEM&apos;s mission is to deliver high-quality and efficient professional
            services in an environment of integrity, honesty, and respect.
            <br />
            Our professional staff is a key asset for both our company and our
            clients. Principal members of our firm bring over 20 years of
            experience in assisting with the design, permitting, and
            construction of multidisciplinary projects. We ensure that our
            services adhere to local, state, and federal regulations while
            focusing on cost-effective and maintainable construction features.
            Additionally, we are committed to addressing scheduling concerns and
            adhering strictly to budgetary constraints on all projects.
          </p>
        </div>

        <div
          className="about-image"
          role="img"
          aria-label="Construction professional wearing a hard hat"
        />
      </section>
    </main>
  );
}
