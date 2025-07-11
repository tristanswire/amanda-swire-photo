export default function Header() {
  return (
    <header
      className="relative h-[70vh] sm:h-[70vh] text-center text-white flex items-center justify-center bg-cover bg-no-repeat bg-top"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, 
        rgba(208, 171, 150, 0.5) 0%, 
        rgba(208, 171, 150, 0.5) 25%, 
        rgba(54, 65, 83, 0.5) 70%),
          url('/images/header-bg.jpg')
        `
      }}
    >
      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-semibold drop-shadow-md">Amanda Swire Photography</h1>
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
