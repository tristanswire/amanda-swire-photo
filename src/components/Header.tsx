export default function Header() {
  return (
    <header
      className="relative h-[70vh] min-h-[400px] text-center text-white flex items-center justify-center bg-cover bg-top"
      style={{ backgroundImage: "url('/images/header-bg.jpg')", backgroundPosition: "50% 40%" }}
    >
      <div className="bg-black/40 absolute inset-0" /> {/* dark overlay */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl font-semibold drop-shadow-md">Amanda Swire Photography</h1>
        <p className="italic mt-2 text-lg sm:text-xl drop-shadow">Light. Love. Moments that last.</p>
        <button className="mt-6 bg-[#d0ab96] text-white px-6 py-2 rounded-full hover:opacity-90 transition">
          Book a Session
        </button>
      </div>
    </header>
  );
}
