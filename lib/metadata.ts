import type { Metadata } from 'next';
import { SITE } from './site';

/**
 * Per-page metadata: title, description, canonical URL and matching
 * Open Graph / Twitter tags. (Next.js replaces, rather than merges, the
 * layout's openGraph object, so each page sets the full set here.)
 */
export function pageMetadata({
  title,
  description,
  path,
  ownImage = false,
}: {
  title?: string;
  description: string;
  path: string;
  /** True when the route has its own opengraph-image file, which must not be overridden. */
  ownImage?: boolean;
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.person}`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale: 'en_PK',
      url: path,
      title: fullTitle,
      description,
      // Site-wide image, unless the route generates its own.
      ...(ownImage
        ? {}
        : { images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${SITE.name}, led by ${SITE.person}` }] }),
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description },
  };
}
