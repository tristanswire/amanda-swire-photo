'use client';

import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

export default function CustomGallery() {
  const images = [
    { src: '/images/gallery-1.jpg', width: 874, height: 578 },
    { src: '/images/gallery-2.jpg', width: 878, height: 585 },
    { src: '/images/gallery-3.jpg', width: 867, height: 579 },
    { src: '/images/gallery-4.jpg', width: 1313, height: 1750 },
    { src: '/images/gallery-5.jpg', width: 1365, height: 1820 },
    { src: '/images/gallery-6.jpg', width: 998, height: 1247 },
    { src: '/images/gallery-7.jpg', width: 997, height: 1246 },
    { src: '/images/gallery-8.jpg', width: 997, height: 1221 },
    { src: '/images/gallery-9.jpg', width: 997, height: 1246 },
  ];

  return (
    <section className="py-12 lg:py-24 px-6 bg-white">
      <h2 className="text-4xl font-bold mb-8">Captured Moments</h2>
      <Gallery>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {images.map(({ src, width, height }, i) => (
            <Item key={i} original={src} thumbnail={src} width={width} height={height}>
              {({ ref, open }) => (
                <div
                  ref={ref}
                  onClick={open}
                  className="relative w-full h-100 sm:h-70 lg:h-120 overflow-hidden rounded-xl cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </Item>
          ))}
        </div>
      </Gallery>
    </section>
  );
}
