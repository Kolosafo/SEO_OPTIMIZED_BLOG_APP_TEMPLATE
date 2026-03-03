import { SITE_CONFIG } from "@/constants/site";
import { getPosts } from "@/lib/marble/queries";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getPosts();

  const postPages: MetadataRoute.Sitemap =
    data?.posts?.map((post) => ({
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "weekly",
      priority: 0.8,
    })) ?? [];

  return [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_CONFIG.url}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_CONFIG.url}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_CONFIG.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...postPages,
  ];
}
