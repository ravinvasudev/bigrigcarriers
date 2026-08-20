import type { MetadataRoute } from "next";
import { company } from "@/components/data/company";
import { services } from "@/components/data/services";

const routes = ["/", "/safety", "/policy", "/careers"];
const lastModified = new Date("2026-08-21");

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...services.map((service) => service.target)].map(
    (route) => ({
      url: `${company.siteUrl}${route}`,
      lastModified,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : route.startsWith("/services/") ? 0.8 : 0.7,
    }),
  );
}