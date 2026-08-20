import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ChatWidget from "@/components/chat-widget";
import { company } from "@/components/data/company";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const leagueSpartan = localFont({
  src: "../../public/assets/LeagueSpartan.woff2",
  display: "swap",
  variable: "--font-league-spartan",
});

const siteUrl = company.siteUrl;
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: company.name,
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      foundingDate: company.founded,
      sameAs: [
        company.social.facebook,
        company.social.instagram,
        company.social.twitter,
        company.social.linkedin,
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#local-business`,
      name: company.name,
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      telephone: company.phone,
      parentOrganization: {
        "@id": `${siteUrl}/#organization`,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address[0],
        addressLocality: "Bolton",
        addressRegion: "Ontario",
        postalCode: "L7C 3A6",
        addressCountry: "CA",
      },
      openingHours: "Mo-Fr 09:00-17:00",
      areaServed: [
        {
          "@type": "Country",
          name: "Canada",
        },
        {
          "@type": "Country",
          name: "United States",
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: company.name,
  title: {
    default: company.name,
    template: company.metadata.titleTemplate,
  },
  description: company.description,
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "en_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: company.metadata.defaultOpenGraphAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={leagueSpartan.variable}>
        <SiteHeader />
        <main id="top">{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteFooter />
        <ChatWidget />
      </body>
    </html>
  );
}
