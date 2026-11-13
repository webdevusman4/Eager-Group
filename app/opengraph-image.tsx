import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '@/lib/og';

export const alt = 'Eager Consulting & Training, led by Iftikhar Ahmed';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Eager Consulting & Training',
    title: 'Empowering people. Transforming businesses.',
    subtitle: 'Corporate training, business consultancy and executive programmes, led by Iftikhar Ahmed.',
  });
}
