import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://auragym.in",
      priority: 1,
    },
    {
      url: "https://auragym.in/about",
      priority: 0.8,
    },
    {
      url: "https://auragym.in/contact",
      priority: 0.8,
    },
  ];
}
