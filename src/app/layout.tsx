import type { Metadata } from "next";
import { SiteFooter } from "./components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "PEM",
  description: "PEM home page",
  icons: {
    icon: "/images/PEM logo.jpg",
    shortcut: "/images/PEM logo.jpg",
    apple: "/images/PEM logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
