import type { CSSProperties } from "react";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

const slides = [
  {
    image: "/images/Home Page/Slideshow/Image 1.jpg",
    label: "Featured PEM project image 1",
  },
  {
    image: "/images/Home Page/Slideshow/Image 2.jpg",
    label: "Featured PEM project image 2",
  },
  {
    image: "/images/Home Page/Slideshow/Image 3.jpg",
    label: "Featured PEM project image 3",
  },
  {
    image: "/images/Home Page/Slideshow/Image 4.jpg",
    label: "Featured PEM project image 4",
  },
  {
    image: "/images/Home Page/Slideshow/Image 5.jpg",
    label: "Featured PEM project image 5",
  },
];

const services = [
  {
    title: "CIVIL ENGINEERING",
    image: "/images/Home Page/Our Services/AAEAAQAAAAAAAAtxAAAAJDk3YzY2Mzg0LTZkY2QtNDIwOC04Y2NjLWJjZjg2Nzg5NzlmMQ.gif.jpeg",
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
    title: "LICENSE AND CERTIFICATION",
    image: "/images/Home Page/Our Services/certif.jpg",
    label: "Professional license and certification meeting",
    href: "/services/license-certification",
    description:
      "Our team is fully licensed and certified in compliance with Florida state regulations, ensuring we meet the highest legal and professional standards. We are committed to excellence, and as part of this commitment, our team regularly participates in ongoing training and recertification programs. This allows us to stay up to date with changes in Florida state laws, industry standards, and emerging best practices, ensuring we consistently provide exceptional service to our clients.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/" />

      <section
        className="photo-slider"
        aria-label="Featured project photos"
        style={{ "--slide-count": slides.length } as CSSProperties}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className="slide"
            role="img"
            aria-label={slide.label}
            style={
              {
                "--slide-image": `url("${slide.image}")`,
                "--slide-index": index,
              } as CSSProperties
            }
          />
        ))}
      </section>

      <section className="reality-intro" aria-labelledby="reality-heading">
        <h1 id="reality-heading">MAKING PROJECTS A REALITY</h1>
        <div className="reality-copy">
          <h2>WHAT SETS US APART</h2>
          <p>
            At Professional Engineering Management (PEM), our success is
            intertwined with the success of our clients. Our exceptional service
            is built on the foundations of honesty, respect, and ethical
            practices.
          </p>
          <p>
            Our relentless enthusiasm and perseverance drive our commitment to
            advancing engineering projects. We ensure thorough coordination with
            permitting agencies, professional consultants, contractors, and
            suppliers. By leveraging the latest design and construction
            technologies, we combine innovation with our core professional
            principles to execute projects efficiently and effectively.
          </p>
        </div>
        <Link className="reality-button" href="/about-us">
          LEARN MORE
        </Link>
      </section>

      <section className="home-services" aria-labelledby="home-services-title">
        <h2 id="home-services-title">OUR SERVICES</h2>
        <div className="home-services-grid">
          {services.map((service) => (
            <article className="home-service-card" key={service.title}>
              <h3>{service.title}</h3>
              <div
                className="home-service-image"
                role="img"
                aria-label={service.label}
                style={
                  {
                    "--service-image": `url("${service.image}")`,
                  } as CSSProperties
                }
              />
              <p>{service.description}</p>
              <Link
                className="reality-button home-service-button"
                href={service.href}
              >
                LEARN MORE
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
