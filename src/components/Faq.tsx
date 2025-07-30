'use client';

import { motion } from "framer-motion";

export default function Faq() {
  const faqs = [
    {
      q: "What if I need help choosing a color scheme for my photos?",
      a: "Answer Goes Here"
    },
    {
      q: "Is there a curated closet I can pick outfits from?",
      a: "Answer Goes Here"
    },
    {
      q: "Are my pets allowed to be in my photos?",
      a: "Answer Goes Here"
    },
    {
      q: "What about live events or engagements?",
      a: "Answer Goes Here"
    },
    {
      q: "How far are you willing to travel?",
      a: "Answer Goes Here"
    },
    {
      q: "Do you have a package that includes color and black/white photos?",
      a: "Answer Goes Here"
    }
  ];

  return (
    <section id="faq" className="bg-brand-tan text-brand-black py-30 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-sans text-6xl md:text-8xl font-antro text-center mb-14 text-brand-white"
      >
        Questions
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto space-y-6 font-body"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {faqs.map(({ q, a }, i) => (
          <motion.details
            key={i}
            className="border-b pb-4 text-brand-white font-body"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <summary className="font-sans cursor-pointer ml-2 text-lg mb-1 text-brand-white">
              {q}
            </summary>
            <p className="font-sans text-md mt-1 text-brand-white pl-6 pt-2">{a}</p>
          </motion.details>
        ))}
      </motion.div>
    </section>
  );
}
