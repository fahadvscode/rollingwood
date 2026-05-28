import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

const floorPlanSlugs = [
  "haven",
  "laguna-b",
  "crown-b",
  "everwood",
  "laguna-a",
  "crown-a",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/floor-plans`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...floorPlanSlugs.map((slug) => ({
      url: `${siteUrl}/floor-plans/${slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/location`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/neighbourhood`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/register`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}
