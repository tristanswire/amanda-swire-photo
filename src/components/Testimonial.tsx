'use client';

import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonial() {
  return (
    <section id="testimonials" className="font-body py-14 xl:py-24 px-10 text-center bg-brand-tan text-brand-white font-semibold overflow-hidden">
      <motion.blockquote
        className="max-w-4xl mx-auto text-2xl xl:text-3xl italic font-normal leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        “Amanda made us feel completely at ease during our newborn session. She was gentle, patient, and captured the sweetest little details—tiny fingers, sleepy yawns, even our dog sneaking into the frame! We were blown away by how natural and timeless the photos felt. These images will be cherished forever.”
      </motion.blockquote>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Heart className="mx-auto mt-6 h-8 w-8 xl:h-12 xl:w-12" />
      </motion.div>
    </section>
  );
}
