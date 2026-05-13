import { SiteHeader } from "../components/SiteHeader";

export default function ContactUsPage() {
  return (
    <main className="site-shell">
      <SiteHeader activePath="/contact-us" />

      <section className="page-hero">
        <p className="page-kicker">Contact Us</p>
        <h1>Let&apos;s talk about your next project.</h1>
        <p>
          Replace the placeholders below with your phone number, email, office
          location, and preferred contact details.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-panel">
          <h2>Contact Details</h2>
          <p><strong>Phone:</strong> (000) 000-0000</p>
          <p><strong>Email:</strong> info@usapem.com</p>
          <p><strong>Location:</strong> City, State</p>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} />
          </label>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </section>
    </main>
  );
}
