// pages/index.tsx
import Head from 'next/head';
import Header from '@/components/Header';
import About from '@/components/About';
import Sessions from '@/components/Sessions';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Amanda Swire Photography</title>
        <meta name="description" content="Light. Love. Moments that last." />
      </Head>
      <main className="font-serif text-center text-gray-700 bg-[#faf1eb] min-h-screen">
        <Header />
        <About />
        <Sessions />
        <Gallery />
        <Pricing />
        <Testimonial />
        <Contact />
      </main>
      <footer className="py-8 text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} Amanda Swire Photography. All rights reserved.
      </footer>
    </>
  );
}