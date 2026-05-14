import type { CSSProperties } from "react";
import { SiteHeader } from "../../components/SiteHeader";

const utilityServices = [
  "Wastewater Collection Systems",
  "Water Main, Force Main, and Reclaimed Water Collection Systems",
  "Pump Station Design",
  "Septic Tank and Drain Field Facilities Design",
  "Rehabilitation Design for Existing Infrastructure",
  "Hydraulic and System Modeling",
  "Permitting and Regulatory Compliance",
];

export default function UtilityPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/services" />

      <section className="service-detail-page" aria-labelledby="utility-title">
        <h1 id="utility-title">UTILITY</h1>

        <div className="service-detail-layout">
          <div className="service-detail-copy">
            <h2>UTILITY</h2>
            <ul>
              {utilityServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div
            className="service-detail-image"
            role="img"
            aria-label="Water and wastewater utility treatment infrastructure"
            style={
              {
                "--detail-image": `url("/images/Home Page/Our Services/WasteWaterTreatment_2-1.jpg")`,
              } as CSSProperties
            }
          />
        </div>
      </section>
    </main>
  );
}
