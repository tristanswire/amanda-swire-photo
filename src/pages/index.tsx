// pages/index.tsx
import Head from 'next/head';
import Header from '@/components/Header';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';
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
      <main className="font-serif text-center text-gray-700 bg-[#f3e8e2] min-h-screen">
        <Header />
        <About />
        <Testimonial />
        <Gallery />
        <Pricing />
        <Contact />
      </main>
      <footer className="py-8 text-sm text-gray-500 text-center">

        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.instagram.com/amandaswire_photography"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d0ab96] hover:text-[#a98570] transition"
            aria-label="Instagram"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/amanda.erickson.108889"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d0ab96] hover:text-[#a98570] transition"
            aria-label="Facebook"
          >
            <FaFacebook size={30} />
          </a>
        </div>
        &copy; {new Date().getFullYear()} Amanda Swire Photography. All rights reserved.
      </footer>
    </>
  );
}