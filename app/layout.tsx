import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vimal Code",
    template: "%s | Vimal Code",
  },
  description:
    "Vimal Code is the portfolio of Vimal Vidyadhaaran, a Software Engineer, AI Engineer, and Full Stack Developer building polished web experiences, intelligent products, and data-driven solutions.",
  metadataBase: new URL("https://vimalcode.me"),
  applicationName: "Vimal Code",
  keywords: [
    "Vimal Code",
    "Vimal Vidyadhaaran",
    "Software Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "Portfolio",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Vimal Vidyadhaaran" }],
  creator: "Vimal Vidyadhaaran",
  alternates: {
    canonical: "https://vimalcode.me",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vimalcode.me",
    siteName: "Vimal Code",
    title: "Vimal Code",
    description:
      "Vimal Code is the portfolio of Vimal Vidyadhaaran, a Software Engineer, AI Engineer, and Full Stack Developer building polished web experiences, intelligent products, and data-driven solutions.",
    images: [
      {
        url: "/vimal_code.png",
        width: 1200,
        height: 630,
        alt: "Vimal Code portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vimal Code",
    description:
      "Vimal Code is the portfolio of Vimal Vidyadhaaran, a Software Engineer, AI Engineer, and Full Stack Developer building polished web experiences, intelligent products, and data-driven solutions.",
    images: ["/vimal_code.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "replace-with-google-site-verification",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vimal Vidyadhaaran",
  alternateName: "Vimal Code",
  url: "https://vimalcode.me",
  image: "https://vimalcode.me/vimal_code.png",
  jobTitle: "Software Engineer",
  description:
    "Software Engineering, AI, Data Science, and Full Stack Development portfolio of Vimal Vidyadhaaran.",
  sameAs: [
    "https://vimalcode.me",
    "https://www.linkedin.com/in/vimalcode/",
    "https://x.com/Vimalcode",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        {children}
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
