import Link from "next/link";

type SiteHeaderProps = {
  activePath: string;
};

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT US", href: "/contact-us" },
];

export function SiteHeader({ activePath }: SiteHeaderProps) {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <Link className="logo" href="/" aria-label="PEM home">
        <span className="logo-text">PE</span>
        <span className="logo-mark">M</span>
      </Link>

      <nav className="main-nav">
        {navItems.map((item) => (
          <Link
            key={item.href}
            className={`nav-link${activePath === item.href ? " active" : ""}`}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
