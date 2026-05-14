import type { CSSProperties } from "react";
import { SiteHeader } from "../../components/SiteHeader";

const waterResourcesServices = [
  "Stormwater Master Planning",
  "Stormwater Retrofit & Drainage Design",
  "Stormwater Pond/Facility Inspection, Maintenance Management & Certification",
  "Community Redevelopment & Revitalization",
  "Flood Plain Determination",
  "Modeling",
  "NPDES Permitting",
  "Dewatering Design",
  "Hydrologic and Hydraulic Analyses",
  "Erosion Control & Storm Water Pollution Prevention Plans",
];

export default function WaterResourcesPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/services" />

      <section
        className="service-detail-page"
        aria-labelledby="water-resources-title"
      >
        <h1 id="water-resources-title">WATER RESOURCES</h1>

        <div className="service-detail-layout">
          <div className="service-detail-copy">
            <h2>WATER RESOURCES</h2>
            <ul>
              {waterResourcesServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div
            className="service-detail-image"
            role="img"
            aria-label="Stormwater and water resource infrastructure"
            style={
              {
                "--detail-image": `url("/images/Home Page/Our Services/npdes.jpg")`,
              } as CSSProperties
            }
          />
        </div>
      </section>
    </main>
  );
}
