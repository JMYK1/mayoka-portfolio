import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mayoka.dev';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/writeups/xss-basics`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/writeups/secure-apis`,
      lastModified: new Date('2024-11-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/writeups/ctf-hidden-admin`,
      lastModified: new Date('2024-10-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/writeups/react-performance`,
      lastModified: new Date('2024-09-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/writeups/threat-modeling`,
      lastModified: new Date('2024-08-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/writeups/docker-security`,
      lastModified: new Date('2024-07-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
