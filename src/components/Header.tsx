'use client';

import { useState } from 'react';
import { XIcon, MenuIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative w-full bg-brand-white text-brand-black py-4 font-body z-50"
      >
        <div className="relative max-w-8xl mx-auto flex items-center justify-left lg:justify-center px-6">
          <Link href="/" className="position lg:absolute lg:left-[1rem] lg:top-0 text-xl lg:text-2xl font-antro-bold">AS</Link>
          <ul className="hidden md:flex gap-10 text-lg tracking-wide mx-auto">
            <li><a href="#about" className="hover:text-brand-tan-dark duration-350 transition-all">About</a></li>
            <li><a href="#testimonials" className="hover:text-brand-tan-dark duration-350 transition-all">Testimonials</a></li>
            <li><a href="#gallery" className="hover:text-brand-tan-dark duration-350 transition-all">Gallery</a></li>
            <li><a href="#pricing" className="hover:text-brand-tan-dark duration-350 transition-all">Pricing</a></li>
          </ul>
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden absolute right-6 text-brand-black"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide-Out Menu with Animation */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-full bg-brand-white text-brand-black shadow-lg z-50 font-body overflow-hidden"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
              <Link href="/" className="text-2xl font-antro-bold">AS</Link>
              <button onClick={() => setIsOpen(false)}>
                <XIcon className="cursor-pointer h-6 w-6 text-brand-black" />
              </button>
            </div>
            <ul className="flex flex-col p-6 space-y-4 text-lg font-normal">
              <li><a href="#about" onClick={() => setIsOpen(false)}>How it works</a></li>
              <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Membership</a></li>
              <li><a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
              <li><a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a></li>
              <li>
                <a
                  href="#pricing"
                  className="inline-block mt-4 bg-brand-tan-dark text-brand-white hover:bg-brand-white hover:text-brand-tan font-normal px-8 py-4 rounded-lg"
                >
                  Book a Session
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
