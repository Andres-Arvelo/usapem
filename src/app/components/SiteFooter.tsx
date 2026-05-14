import Image from "next/image";

const contactItems = [
  {
    icon: "ig",
    label: "@usapem",
    href: "https://www.instagram.com/alejandroarvelousa/",
  },
  {
    icon: "pin",
    label: "P.E.M. \u2022 Orlando, FL",
  },
  {
    icon: "fb",
    label: "@usapem",
    href: "https://www.facebook.com/alejandro.arvelo.18",
  },
  {
    icon: "in",
    label: "Engineering Management Services",
    href: "https://www.linkedin.com/in/alejandro-arvelo-96867b17/",
  },
];

function FooterIcon({ icon }: { icon: string }) {
  if (icon === "ig") {
    return (
      <svg
        className="footer-icon footer-icon-instagram"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle className="footer-icon-dot" cx="17.1" cy="6.9" r="1.2" />
      </svg>
    );
  }

  if (icon === "fb") {
    return (
      <svg
        className="footer-icon footer-icon-facebook"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M20.2 2.8H3.8c-.6 0-1 .4-1 1v16.4c0 .6.4 1 1 1h8.8v-6.9h-2.3v-2.7h2.3v-2c0-2.3 1.4-3.6 3.5-3.6 1 0 1.9.1 2.1.1v2.5h-1.5c-1.1 0-1.3.5-1.3 1.3v1.7h2.7l-.4 2.7h-2.3v6.9h4.8c.6 0 1-.4 1-1V3.8c0-.6-.4-1-1-1Z" />
      </svg>
    );
  }

  if (icon === "pin") {
    return (
      <svg className="footer-icon" aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
      </svg>
    );
  }

  return <span className={`footer-social footer-social-${icon}`}>{icon}</span>;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand" aria-label="PEM">
          <Image
            className="footer-logo-image"
            src="/images/PEM logo.png"
            alt="PEM"
            width={237}
            height={122}
          />
          <span className="footer-brand-name">
            Professional
            <br />
            Engineering Management
          </span>
        </div>

        <div className="footer-contact" aria-label="PEM contact links">
          {contactItems.map((item) => (
            <div
              className="footer-contact-item"
              key={`${item.icon}-${item.label}`}
            >
              <FooterIcon icon={item.icon} />
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="footer-copyright">
        Copyright &copy; 2026 USAPEM - All Rights Reserved.
      </p>
    </footer>
  );
}
