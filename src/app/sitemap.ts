import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/burger-king',
    '/california-burrito',
    '/dominoes',
    '/generic',
    '/mcd',
    '/starbucks',
    '/subway',
    '/taco-bell',
    '/pizza-hut',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}