import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RESUME_DATA } from "@/data/resume-data";
import Script from "next/script";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,

  openGraph: {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
    url: "https://cv.adeayomide.me",
    siteName: "Adelaja Ayomide Resume",
    images: [
      {
        url: RESUME_DATA.avatarUrl,
        alt: RESUME_DATA.name,
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "http://www.schema.org",
    "@type": "Person",
    "@id": "https://adeayomide.me",
    name: "Adelaja Ayomide Ifeoluwa Joshua",
    alternateName: "Adelaja Ayomide",
    nationality: "Nigerian",
    birthPlace: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sagamu",
        addressRegion: "Ogun State",
        addressCountry: "Nigeria",
      },
    },
    affiliation: [
      {
        "@type": "Organization",
        name: "Culrica",
        sameAs: [
          "https://twitter.com/culrica_ng",
          "https://culrica.com",
          "https://culrica.vercel.app",
        ],
      },
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Olabisi Onabanjo University",
        sameAs: "https://oouagoiwoye.edu.ng/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University of Ibadan",
        sameAs: "https://www.ui.edu.ng/",
      },
    ],
    gender: "Male",
    Description: RESUME_DATA.about,
    disambiguatingDescription: "Founder of Culrica" + RESUME_DATA.summary,
    jobTitle: "Creative Frontend Developer",
    worksFor: [
      {
        "@type": "Organization",
        name: "NexaScale.",
        sameAs: [
          "https://twitter.com/nexascale",
          "https://www.facebook.com/nexascale",
          "https://nexascale.org",
        ],
      },
    ],
    url: RESUME_DATA.personalWebsiteUrl,
    image: RESUME_DATA.avatarUrl,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Lagos",
      addressCountry: "Nigeria",
    },
    sameAs: [
      "https://twitter.com/_hiflex",
      "https://twitter.com/1hiflex",
      "https://instagram.com/h_ife_",
      "https://linkedin.com/in/adeayomide112",
      "https://plus.google.com/+JayHoltslander",
      "https://www.youtube.com/user/_hiflex",
      "https://github.com/ifeoluwaayo",
    ],
  };

  return (
    <html lang="en" className={inter.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}

        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
