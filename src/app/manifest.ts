import type { MetadataRoute } from "next";
import { company } from "@/components/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.shortName,
    description: company.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#f26722",
    categories: [
      "business",
      "transportation",
      "trucking",
      "logistics",
      "freight",
      "shipping",
      "delivery",
      "refrigerated",
      "dry van",
      "flatbed",
      "intermodal",
    ],
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
