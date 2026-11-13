import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og';
import { PROGRAMMES, getProgramme } from '@/lib/site';

export const alt = 'Eager Consulting & Training programme';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return PROGRAMMES.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProgramme((await params).slug);
  return renderOgImage({
    eyebrow: p?.label ?? 'Programme',
    title: p?.title ?? 'Programmes',
    subtitle: p ? `${p.format} · ${p.enrolment}` : undefined,
  });
}
