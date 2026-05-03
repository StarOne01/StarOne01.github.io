import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://starone01.github.io',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ];
}