// pages/index.tsx
import Head from 'next/head';
import Header from '@/components/Header';
import About from '@/components/About';
import Sessions from '@/components/Sessions';
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
        <meta name="description" content="Light. Love. Moments that last." />
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