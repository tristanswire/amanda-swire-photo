'use client';

import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

export default function CustomGallery() {
  const images = [
    { src: '/images/gallery-1.jpg', width: 1600, height: 1067 },
    { src: '/images/gallery-2.jpg', width: 1600, height: 1067 },
    { src: '/images/gallery-3.jpg', width: 1600, height: 1067 },
    { src: '/images/gallery-4.jpg', width: 1600, height: 1067 },
    { src: '/images/gallery-5.jpg', width: 1600, height: 1067 },
    { src: '/images/gallery-6.jpg', width: 1600, height: 1067 },
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold mb-8">Gallery</h2>
      <Gallery>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map(({ src, width, height }, i) => (
            <Item key={i} original={src} thumbnail={src} width={width} height={height}>
              {({ ref, open }) => (
                <div
                  ref={ref}
                  onClick={open}
                  className="relative w-full h-48 sm:h-60 md:h-72 overflow-hidden rounded-xl cursor-pointer"
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
