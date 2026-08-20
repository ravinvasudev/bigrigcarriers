import type { Metadata } from "next";
import HeroSection from "@/components/sections/hero-section";
import CompanyCapabilitiesSection from "@/components/sections/company-capabilities-section";
import ServicesSection from "@/components/sections/services-section";
import IndustriesSection from "@/components/sections/industries-section";
import FleetSection from "@/components/sections/fleet-section";
import AboutSection from "@/components/sections/about-section";
import QuoteSection from "@/components/sections/quote-section";
import ContactSection from "@/components/sections/contact-section";
import { company } from "@/components/data/company";

const pageMetadata = company.metadata.pages.home;

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  keywords: [...pageMetadata.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: company.name,
    title: pageMetadata.title,
    description: pageMetadata.openGraphDescription,
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: pageMetadata.imageAlt,
      },
    ],
  },
  twitter: {
    title: pageMetadata.title,
    description: pageMetadata.twitterDescription,
    images: ["/twitter-image"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyCapabilitiesSection />
      <ServicesSection />
      <IndustriesSection />
      <FleetSection />
      <AboutSection />
      <QuoteSection />
      <ContactSection />
    </>
  );
}
