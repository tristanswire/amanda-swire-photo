import { useState } from 'react';
import { XIcon, MenuIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="relative w-full bg-brand-white text-brand-black py-4 border-b border-gray-300 font-body">
        <div className="relative max-w-8xl mx-auto flex items-center justify-center px-6">

          {/* Logo - left */}
          <Link href="/" className="text-2xl font-antro-bold">AS</Link>

          {/* Center navigation */}
          <ul className="hidden md:flex gap-10 text-lg tracking-wide mx-auto pl-24">
            <li><a href="#how-it-works" className="hover:text-gray-600">About</a></li>
            <li><a href="#membership" className="hover:text-gray-600">Testimonials</a></li>
            <li><a href="#pricing" className="hover:text-gray-600">Gallery</a></li>
            <li><a href="#addons" className="hover:text-gray-600">Pricing</a></li>
          </ul>

          {/* Right side - Book a Session */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/amandaswire_photography"
              target="_blank"
              className="button inline-block bg-brand-black text-brand-white text-md px-6 py-3 rounded-lg hover:opacity-90 transition font-body"
            >
              Book a Session
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden absolute right-6 text-brand-black"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-brand-white text-brand-black shadow-lg transform transition-transform duration-300 ease-in-out z-50 font-body ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
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
      </div>

      {/* Hero Section */}
      <div
        className="relative h-[50vh] sm:h-[50vh] text-center text-white flex items-center justify-center bg-cover bg-top"
         style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1520869309377-88c9274a27c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-black opacity-100 z-0" />

        <div className="relative z-10 px-4 mx-auto">
          <h1 className="text-3xl md:text-8xl/22 drop-shadow-md font-antro">
            Moments made Timeless.
          </h1>
          <p className="mb-6 text-md drop-shadow font-body mt-[-0.5rem] mb-10">
            Because memories fade — but photos last forever.
          </p>
          <a
            href="https://www.instagram.com/amandaswire_photography"
            target="_blank"
            className="button inline-block bg-brand-white text-xl text-brand-black px-10 py-4 rounded-lg hover:opacity-90 transition font-body"
          >
            Book a Session
          </a>
        </div>
      </div>
    </>
  );
}
