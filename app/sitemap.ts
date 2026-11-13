import type { MetadataRoute } from 'next';
import { PROGRAMMES, SERVICES, SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/services', '/programmes', '/eager-group', '/contact'];
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.8 })),
    ...SERVICES.map((s) => ({ url: `${SITE.url}/services/${s.slug}`, changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...PROGRAMMES.map((p) => ({ url: `${SITE.url}/programmes/${p.slug}`, changeFrequency: 'weekly' as const, priority: 0.7 })),
  ];
}
