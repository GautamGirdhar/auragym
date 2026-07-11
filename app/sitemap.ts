import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://auragyms.com",
      priority: 1,
    },
    {
      url: "https://auragyms.com/gyminfo/about",
      priority: 0.8,
    },
    {
      url: "https://auragyms.com/gyminfo/schedule",
      priority: 0.8,
    },
    {
      url: "https://auragyms.com/gyminfo",
      priority: 0.8,
    },
    {
      url: "https://auragyms.com/locations",
      priority: 0.8,
    },
    {
      url: "https://auragyms.com/locations/32sector",
      priority: 0.8,
    },
    {
      url: "https://auragyms.com/locations/ansalplaza",
      priority: 0.8,
    },
    {
      url: "https://auragyms.com/locations/brsnagar",
      priority: 0.8,
    },
    {
      url: "https://auragyms.com/contact",
      priority: 0.8,
    },
  ];
}
