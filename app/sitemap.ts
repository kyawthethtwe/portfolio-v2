import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

// Single-page site, so one entry. lastModified is the build date.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.websiteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
