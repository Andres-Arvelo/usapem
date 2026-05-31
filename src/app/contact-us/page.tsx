import { SiteHeader } from "../components/SiteHeader";
import { ContactForm } from "./ContactForm";

export default function ContactUsPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/contact-us" />

      <section className="contact-page" aria-labelledby="contact-title">
        <h1 id="contact-title">CONTACT US</h1>

        <div className="contact-layout">
          <ContactForm />

          <div className="contact-info">
            <h2>CONTACT INFO</h2>
            <p>
              Our firm is conveniently based in Orlando, serving clients across
              the entire State of Florida. As a leading consulting civil
              engineering firm, we specialize in providing comprehensive
              solutions tailored to your needs.
            </p>
            <p>
              For more information about Professional Engineering Management
              and how we can assist with your projects, please feel free to
              contact us directly.
            </p>

            <h3>USAPEM</h3>
            <p>9582 Cypress Pine Street, Orlando, Florida 32827, United States</p>
            <p>
              Phone Number: <strong>407-832-1390</strong>
            </p>
            <p>
              Email: <strong>aarvelo@usapem.com</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
