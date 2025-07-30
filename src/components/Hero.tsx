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
        className="relative w-full bg-brand-white text-brand-black py-4 border-b border-gray-300 font-body z-50"
      >
        <div className="relative max-w-8xl mx-auto flex items-center justify-center px-6">
          <Link href="/" className="text-2xl font-antro-bold">AS</Link>
          <ul className="hidden md:flex gap-10 text-lg tracking-wide mx-auto">
            <li><a href="#about" className="hover:text-brand-tan-dark duration-350 transition-all">About</a></li>
            <li><a href="#testimonials" className="hover:text-brand-tan-dark duration-350 transition-all">Testimonials</a></li>
            <li><a href="#gallery" className="hover:text-brand-tan-dark duration-350 transition-all">Gallery</a></li>
            <li><a href="#pricing" className="hover:text-brand-tan-dark duration-350 transition-all">Pricing</a></li>
            <li><a href="#faq" className="hover:text-brand-tan-dark duration-350 transition-all">Questions</a></li>
          </ul>
          <div className="hidden md:flex items-center gap-4">
            {/* <a
              href="https://www.instagram.com/amandaswire_photography"
              target="_blank"
              className="button inline-block bg-brand-black text-brand-white text-md px-6 py-3 rounded-lg hover:opacity-90 transition font-body"
            >
              Book a Session
            </a> */}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden absolute right-6 text-brand-black"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide-Out Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-64 bg-brand-white text-brand-black shadow-lg z-50 font-body"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
              <span className="font-semibold text-lg">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <XIcon className="h-6 w-6 text-brand-black" />
              </button>
            </div>
            <ul className="flex flex-col p-6 space-y-4 text-sm font-medium">
              <li><a href="#how-it-works" onClick={() => setIsOpen(false)}>How it works</a></li>
              <li><a href="#membership" onClick={() => setIsOpen(false)}>Membership</a></li>
              <li><a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a></li>
              <li><a href="#addons" onClick={() => setIsOpen(false)}>Add-ons</a></li>
              <li><a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a></li>
              <li>
                <a
                  href="https://www.instagram.com/amandaswire_photography"
                  target="_blank"
                  className="inline-block mt-4 bg-brand-black text-brand-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                >
                  Book a Session
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div
        className="relative h-[60vh] sm:h-[60vh] text-center text-white flex items-center justify-center bg-cover bg-top pt-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1520869309377-88c9274a27c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-tan opacity-100 z-0" />

        <div className="relative z-10 px-4 mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-6xl md:text-8xl/22 drop-shadow-md font-antro"
          >
            Moments made Timeless.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mb-6 text-md drop-shadow font-body mt-[-0.5rem] mb-10"
          >
            Because memories fade — but photos last forever.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
            href="https://www.instagram.com/amandaswire_photography"
            target="_blank"
            className="inline-block text-xl bg-brand-white text-brand-tan-dark px-10 py-4 rounded-lg hover:opacity-90 transition font-body duration-500 hover:bg-brand-tan-dark hover:text-brand-white"
          >
            Book a Session
          </motion.a>
        </div>
      </div>
    </>
  );
}
