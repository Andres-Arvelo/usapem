import type { CSSProperties } from "react";
import { SiteHeader } from "../../components/SiteHeader";

const constructionManagementServices = [
  "Due Diligence",
  "Project Planning",
  "Design Coordination",
  "Resident Engineering",
  "Construction Engineering",
  "Engineering Cost Estimates",
  "Procurement Analysis",
  "Project Scheduling",
  "Construction Progress Inspections",
  "QA/QC and Code Compliance Inspections",
  "Final Site Walk Through and Final Punch List",
  "As-built Drawing Preparation",
  "As-built Certifications",
  "Construction Engineering Inspection (CEI)",
];

export default function ConstructionManagementPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/services" />

      <section
        className="service-detail-page"
        aria-labelledby="construction-management-title"
      >
        <h1 id="construction-management-title">CONSTRUCTION MANAGEMENT</h1>

        <div className="service-detail-layout">
          <div className="service-detail-copy">
            <h2>CONSTRUCTION MANAGEMENT</h2>
            <ul>
              {constructionManagementServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div
            className="service-detail-image"
            role="img"
            aria-label="Construction managers reviewing a project site"
            style={
              {
                "--detail-image": `url("/images/Home Page/Our Services/contruction.jpg")`,
              } as CSSProperties
            }
          />
        </div>
      </section>
    </main>
  );
}
