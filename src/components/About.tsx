'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 xl:pb-26 px-4 text-center bg-white overflow-hidden">
      <motion.h2
        className="text-6xl md:text-7xl mb-4 font-antro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>

      <motion.p
        className="max-w-lg lg:max-w-3xl mx-auto text-xl text-brand-black pb-16 font-body"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I&apos;m Amanda, a lifestyle photographer capturing soft, natural, and heartfelt images.
        Whether it&apos;s a newborn yawn or a couple&apos;s sunset embrace, I aim to preserve the
        warmth and light of your most meaningful moments.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {[1, 2, 3].map((num, index) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            viewport={{ once: true }}
            className="max-w-[40rem] w-[100%] h-160 lg:h-100 mx-auto relative rounded-xl overflow-hidden"
          >
            <Image
              src={`/images/amanda-${num}.jpg`}
              alt={`Amanda Swire ${num}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
