import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PEM",
  description: "PEM home page",
  icons: {
    icon: "/pem-favicon.svg",
    shortcut: "/pem-favicon.svg",
    apple: "/pem-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
