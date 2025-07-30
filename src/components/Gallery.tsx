'use client';

import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

export default function CustomGallery() {
  const images = [
    { src: '/images/gallery-1.jpg', width: 1320, height: 1760, alt: 'a mother with her newborn son by a window' },
    { src: '/images/gallery-2.jpg', width: 1365, height: 2048, alt: 'a father holding his toddler son over his shoulder' },
    { src: '/images/gallery-3.jpg', width: 1320, height: 1649, alt: 'a black and white photo of a husband and wife holding their newborn' },
    { src: '/images/gallery-4.jpg', width: 878, height: 584, alt: 'a family with their 2 toddler boys and newborn boy on a blanket with a white backdrop' },
    { src: '/images/gallery-5.jpg', width: 1313, height: 1750, alt: 'a family of 5 under a tree in a field of tall grass' },
    { src: '/images/gallery-6.jpg', width: 1320, height: 1760, alt: 'a head shot of a female author that is laughing' },
    { src: '/images/gallery-7.jpg', width: 1365, height: 2048, alt: 'a family of four on a bench in a photography studio' },
    { src: '/images/gallery-8.jpg', width: 1320, height: 1760, alt: 'a doctor with her hand in her pocket in a beautiful field' },
    { src: '/images/gallery-9.jpg', width: 867, height: 579, alt: 'three young toddlers together in a field of grass' },
  ];

  return (
    <section className="py-12 px-6 lg:py-24 lg:pb-0">
      <h2 className="text-8xl mb-16 font-antro">Gallery</h2>
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
