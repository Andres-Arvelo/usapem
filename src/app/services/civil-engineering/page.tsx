import type { CSSProperties } from "react";
import { SiteHeader } from "../../components/SiteHeader";

const civilEngineeringServices = [
  "Site Feasibility Studies",
  "Zoning and Land Use Review",
  "Master Planning, Planned Unit Developments (PUD), and Development of Regional Impact (DRI)",
  "Site Plan Design and Permitting for Residential, Commercial, Municipal, Institutional, and Industrial Projects",
  "Multifunctional Facilities Design",
  "Regulatory Permitting",
  "Maintenance of Traffic Plans (MOT)",
  "Landscaping and Irrigation System Design",
  "NPDES MS4 - Industrial and Construction",
  "Best Management Practices Development and Design",
];

export default function CivilEngineeringPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/services" />

      <section
        className="service-detail-page"
        aria-labelledby="civil-engineering-title"
      >
        <h1 id="civil-engineering-title">CIVIL ENGINEERING</h1>

        <div className="service-detail-layout">
          <div className="service-detail-copy">
            <h2>CIVIL ENGINEERING</h2>
            <ul>
              {civilEngineeringServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div
            className="service-detail-image"
            role="img"
            aria-label="Surveying equipment on a construction site"
            style={
              {
                "--detail-image": `url("/images/Home Page/Our Services/AAEAAQAAAAAAAAtxAAAAJDk3YzY2Mzg0LTZkY2QtNDIwOC04Y2NjLWJjZjg2Nzg5NzlmMQ.gif.jpeg")`,
              } as CSSProperties
            }
          />
        </div>
      </section>
    </main>
  );
}
