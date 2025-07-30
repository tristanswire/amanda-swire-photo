'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const packages = [
  {
    title: 'Mini Session',
    price: '$150',
    description: ['Up to 30 Minutes', '15 Edited Photos', 'Basic Retouching'],
    image: '/images/pricing-1.jpg',
    alt: 'a female author blowing confetti in to the air'
  },
  {
    title: 'Full Session',
    price: '$250',
    description: ['Up to 60 Minutes', '25 Edited Photos', 'Advanced Retouching'],
    image: '/images/pricing-2.jpg',
    alt: 'black and white photo of a family of 6 laying on the sitting smiling together'
  },
  {
    title: 'Newborn Session',
    price: '$300',
    description: ['Up to 90 Minutes', '30 Edited Photos', 'Advanced Retouching', 'At Home or Studio'],
    image: '/images/pricing-3.jpg',
    alt: 'a beautiful newborn boy laying on his fathers forearm'
  },
];

export default function Pricing() {
  return (
    <section className="py-12 lg:py-24 px-6 text-center bg-white overflow-hidden">
      <motion.h2
        className="text-6xl md:text-8xl mb-16 font-antro text-brand-black"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Pricing
      </motion.h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto text-left"
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
            className="bg-brand-black/65 text-brand-white rounded-xl hover:shadow-md transition p-6"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <motion.div
              className="relative w-full h-100 rounded-lg overflow-hidden mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={image} alt={alt} fill className="object-cover" />
            </motion.div>
            <h3 className="text-lg font-body">{title}</h3>
            <p className="text-6xl font-bold pb-2 mb-6">{price}</p>
            <ul className="mt-2 text-lg space-y-1 pb-10 pl-3 font-body">
              {description.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="mt-3 mb-10 text-sm text-brand-black italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Travel fees may apply for locations outside the DFW area.
      </motion.p>

      <motion.a
        href="https://www.instagram.com/amandaswire_photography"
        target="_blank"
        className="inline-block mt-4 bg-brand-black text-brand-white px-12 py-4 text-xl rounded-lg hover:opacity-90 transition"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Book a Session
      </motion.a>
    </section>
  );
}
