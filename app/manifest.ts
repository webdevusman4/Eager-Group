import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Eager Consulting & Training',
    short_name: 'Eager',
    description: 'Corporate training, business consultancy and executive programmes led by Iftikhar Ahmed.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F3F4FB',
    theme_color: '#0A1260',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
