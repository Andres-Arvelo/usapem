import { SiteHeader } from "../components/SiteHeader";

export default function ContactUsPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/contact-us" />

      <section className="contact-page" aria-labelledby="contact-title">
        <h1 id="contact-title">CONTACT US</h1>

        <div className="contact-layout">
          <form className="contact-form">
            <h2>Drop us a line!</h2>

            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email*" required />
            <textarea name="message" rows={7} placeholder="Message" />

            <button type="submit">SEND</button>

            <p className="contact-recaptcha">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="https://policies.google.com/privacy">Privacy Policy</a>{" "}
              and{" "}
              <a href="https://policies.google.com/terms">Terms of Service</a>{" "}
              apply.
            </p>
          </form>

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
