import { motion } from 'framer-motion';

export default function Hero() {

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-[75vh] lg:h-[60vh] text-center text-white flex items-center justify-center bg-cover bg-top pt-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1528259695299-c262955de4f6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-tan opacity-80 z-0" />

        <div className="relative z-10 px-4 mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-7xl md:text-8xl/22 drop-shadow-md font-antro"
          >
            Moments made Timeless.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="italic mb-6 text-lg drop-shadow font-body mt-[-0.5rem] mb-10"
          >
            Because memories fade — but photos last forever.
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
            href="#pricing"
            className="inline-block text-lg md:text-xl border-2 duration-350 transition font-normal border-brand-white bg-brand-white text-brand-black/60 px-8 py-4 md:px-10 rounded-md hover:opacity-90 font-body hover:border-brand-white hover:bg-[#8E8571] hover:text-brand-white"
          >
            Book a Session
          </motion.a>
        </div>
      </div>
    </>
  );
}
