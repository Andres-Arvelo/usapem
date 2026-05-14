import type { CSSProperties } from "react";
import { SiteHeader } from "../../components/SiteHeader";

const licenseCertificationServices = [
  "Florida Professional Engineer Certification",
  "Orange County Minority Business",
  "FDOT CEI Certification",
  "Asphalt Paving Level I",
  "Asphalt Paving Level II",
  "Earthwork Construction Inspection Level I",
  "Earthwork Construction Inspection Level II",
  "ACI Concrete Field Inspector",
  "FDOT Concrete Field Inspector",
  "MOT",
];

export default function LicenseCertificationPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/services" />

      <section
        className="service-detail-page"
        aria-labelledby="license-certification-title"
      >
        <h1 id="license-certification-title">LICENSE AND CERTIFICATION</h1>

        <div className="service-detail-layout">
          <div className="service-detail-copy">
            <h2>LICENSE & CERTIFICATION</h2>
            <ul>
              {licenseCertificationServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div
            className="service-detail-image"
            role="img"
            aria-label="Professional license and certification meeting"
            style={
              {
                "--detail-image": `url("/images/Home Page/Our Services/certif.jpg")`,
              } as CSSProperties
            }
          />
        </div>
      </section>
    </main>
  );
}
