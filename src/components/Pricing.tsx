'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const packages = [
  {
    title: 'Mini Session',
    price: '$275',
    description: [
      'Up to 30 minutes of photography at a location of your choice',
      'Minimum 15 high-resolution edited images',
      'Digital gallery for easy download and sharing',
      'Advanced retouching on all selected images',
      'Perfect for quick family updates, couples, or maternity'
    ],
    image: '/images/pricing-1.jpg',
    alt: 'a female author blowing confetti in to the air'
  },
  {
    title: 'Full Session',
    price: '$400',
    description: [
      'Up to 60 minutes at one or two nearby locations', 
      'Minimum 25 high-resolution edited images', 
      'Personalized online gallery with full download rights', 
      'Advanced retouching and light styling guidance',
      'Great for families, engagements, seniors, or maternity with outfit changes'
    ],
    image: '/images/pricing-2.jpg',
    alt: 'black and white photo of a family of 6 laying on the sitting smiling together'
  },
  {
    title: 'Newborn Session',
    price: '$500',
    description: [
      'Up to 90 minutes in-home or studio-style session',
      'Minimum 30 high-resolution edited images',
      'Includes family and sibling shots with gentle posing',
      'Advanced newborn-safe retouching (skin, color, details)',
      'A relaxed, baby-led experience with plenty of time for feeding and soothing'
    ],
    image: '/images/pricing-3.jpg',
    alt: 'a beautiful newborn boy laying on his fathers forearm'
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 px-6 lg:py-24 lg:pb-12 text-center bg-brand-white overflow-hidden">
      <motion.h2
        className="text-6xl md:text-7xl mb-16 font-antro text-brand-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Pricing
      </motion.h2>

      <motion.div
        className="grid gap-6 lg:grid-cols-3 max-w-[90rem] mx-auto text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {packages.map(({ title, price, description, image, alt }) => (
          <motion.div
            key={title}
            className="relative max-w-[34rem] w-[100%] mx-auto bg-brand-tan/10 text-brand-black rounded-xl p-6 pb-24"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="relative w-full h-110 rounded-lg overflow-hidden mb-4">
              <Image src={image} alt={alt} fill className="object-cover" />
            </div>
            <h3 className="text-lg lg:text-xl font-body">{title}</h3>
            <p className="text-6xl font-bold pb-2 mb-6">{price}</p>
            <ul className="mt-2 text-lg space-y-1 pb-8 pl-3 font-body">
              {description.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
            <motion.a
              href="https://www.instagram.com/amandaswire_photography"
              target="_blank"
              className="absolute duration-350 transition bottom-0 left-10 right-10 my-6 bg-brand-tan-dark text-brand-white px-12 py-4 text-center max-w-2xl text-xl rounded-lg border-2 border-brand-tan-dark hover:bg-brand-white hover:text-brand-tan-dark hover:border-brand-tan-dark"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Book a {title}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="mt-2 mb-4 text-xs text-brand-black/80 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Travel fees may apply for locations outside the DFW area.
      </motion.p>
    </section>

  );
}
