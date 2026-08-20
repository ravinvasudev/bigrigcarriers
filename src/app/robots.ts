import type { MetadataRoute } from "next";
import { company } from "@/components/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${company.siteUrl}/sitemap.xml`,
  };
}