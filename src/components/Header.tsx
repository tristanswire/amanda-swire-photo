export default function Header() {
  return (
    <header
      className="relative h-70vh md:h-[20vh] md:h-[50vh] 2xl:h-[50vh] min-h-[400px] text-center text-white flex items-center justify-center bg-cover bg-top"
       style={{
      backgroundImage: `
        linear-gradient(to bottom, rgba(208, 171, 150, 0.55), rgba(208, 171, 150, 0.25)),
        url('/images/header-bg.jpg')
      `
    }}
    >
      <div className="bg-black/40 absolute inset-0" /> {/* dark overlay */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl font-semibold drop-shadow-md">Amanda Swire Photography</h1>
        <p className="italic mt-4 mb-6 text-lg sm:text-xl drop-shadow">Light. Love. Moments that last.</p>
       <a
          href="https://www.instagram.com/amandaswire_photography"
          target="_blank"
          className="inline-block bg-[#d0ab96] text-lg text-white px-10 py-4 rounded-full hover:opacity-90 transition mb-6"
        >
          Book a Session!
        </a>
      </div>
    </header>
  );
}
