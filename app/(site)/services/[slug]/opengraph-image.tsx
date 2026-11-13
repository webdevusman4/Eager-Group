import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og';
import { SERVICES, getService } from '@/lib/site';

export const alt = 'Eager Consulting & Training service';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  return renderOgImage({
    eyebrow: 'Service',
    title: s?.title ?? 'Services',
    subtitle: s?.summary,
  });
}
