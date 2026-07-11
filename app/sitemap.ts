import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://auragyms.com",
      priority: 1,
    },
    {
      url: "https://auragyms.com/about",
      priority: 0.8,
    },
    {
      url: "https://auragyms.com/contact",
      priority: 0.8,
    },
  ];
}
