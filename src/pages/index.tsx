// pages/index.tsx
import Head from 'next/head';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Testimonial from '@/components/Testimonial';
import Faq from '@/components/Faq';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Amanda Swire Photography</title>
        <meta name="description" content="Heartfelt lifestyle photography for families, couples, newborns, and individuals." />
        <link rel="canonical" href="https://amandaswire.com/" />
        <meta property="og:image" content="/images/amanda-1.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Amanda Swire Photography",
              "url": "https://amandaswire.com",
              "image": "https://amandaswire.com/images/amanda-1.jpg",
              "description": "Lifestyle photographer capturing newborn, family, and engagement sessions.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dallas Fort Worth",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://instagram.com/amandaswire",
                "https://facebook.com/amandaswire"
              ]
            })
          }}
        />
      </Head>
      <main className="bg-brand-white min-h-screen">
        <Hero />
        <About />
        <Testimonial />
        <Gallery />
        <Pricing />
        <Faq />
      </main>
      <motion.footer
        className="py-8 text-sm text-brand-black text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.instagram.com/amandaswire_photography"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-black hover:text-[#CBC0AD] transition"
            aria-label="Instagram"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/amanda.erickson.108889"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-black hover:text-[#CBC0AD] transition"
            aria-label="Facebook"
          >
            <FaFacebook size={30} />
          </a>
        </div>
        &copy; {new Date().getFullYear()} Amanda Swire Photography. All rights reserved.
      </motion.footer>
    </>
  );
}