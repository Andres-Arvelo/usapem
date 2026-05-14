import type { CSSProperties } from "react";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

const services = [
  {
    title: "CIVIL ENGINEERING",
    image:
      "/images/Home Page/Our Services/AAEAAQAAAAAAAAtxAAAAJDk3YzY2Mzg0LTZkY2QtNDIwOC04Y2NjLWJjZjg2Nzg5NzlmMQ.gif.jpeg",
    label: "Surveying equipment on a construction site",
    href: "/services/civil-engineering",
    description:
      "Our civil engineering design services leverage proven experience to enhance project efficiency while ensuring compliance with governmental regulations and local permitting requirements. We transform our client's visions into reality.",
  },
  {
    title: "UTILITY",
    image: "/images/Home Page/Our Services/WasteWaterTreatment_2-1.jpg",
    label: "Water and wastewater utility treatment infrastructure",
    href: "/services/utility",
    description:
      "Our utility design services offer comprehensive engineering solutions for both water supply and wastewater management. We provide detailed designs for the supply of raw and potable water, as well as the collection, treatment, and environmentally responsible disposal of wastewater, ensuring efficient and sustainable systems.",
  },
  {
    title: "CONSTRUCTION MANAGEMENT",
    image: "/images/Home Page/Our Services/contruction.jpg",
    label: "Construction managers reviewing a project site",
    href: "/services/construction-management",
    description:
      "Our construction management services provide comprehensive oversight, ensuring seamless planning, coordination, and control from project inception through to completion.",
  },
  {
    title: "WATER RESOURCES",
    image: "/images/Home Page/Our Services/npdes.jpg",
    label: "Stormwater and water resource infrastructure",
    href: "/services/water-resources",
    description:
      "Our experienced team leverages cutting-edge computer technology to deliver highly efficient stormwater engineering services. From the design and development of stormwater management systems to the inspection and retrofitting of existing infrastructure, we ensure comprehensive and innovative solutions tailored to meet modern environmental standards.",
  },
  {
    title: "LICENSE & CERTIFICATION",
    image: "/images/Home Page/Our Services/certif.jpg",
    label: "Professional license and certification meeting",
    href: "/services/license-certification",
    description:
      "Our team is fully licensed and certified in compliance with Florida state regulations, ensuring we meet the highest legal and professional standards. We are committed to excellence, and as part of this commitment, our team regularly participates in ongoing training and recertification programs. This allows us to stay up to date with changes in Florida state laws, industry standards, and emerging best practices, ensuring we consistently provide exceptional service to our clients.",
  },
];

export default function ServicesPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/services" />

      <section className="services-page" aria-labelledby="services-title">
        <h1 id="services-title">SERVICES</h1>

        <div className="services-showcase">
          {services.map((service, index) => (
            <article
              className={`service-feature${
                index % 2 === 1 ? " service-feature-reversed" : ""
              }`}
              key={service.title}
            >
              <div
                className="service-feature-image"
                role="img"
                aria-label={service.label}
                style={
                  {
                    "--feature-image": `url("${service.image}")`,
                  } as CSSProperties
                }
              />

              <div className="service-feature-copy">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <Link className="reality-button" href={service.href}>
                  LEARN MORE
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
