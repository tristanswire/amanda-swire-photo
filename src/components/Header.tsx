export default function Header() {
  return (
    <header className="bg-white py-6 px-0 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-left italic text-sm sm:text-base">
          Light. Love. Moments that last.
        </div>
        <div className="flex-1 text-center text-3xl font-bold">Amanda Swire</div>
        <div className="flex-1 text-right">
          <button className="bg-[#e5c0aa] text-white px-4 py-2 rounded-full hover:opacity-90 transition text-sm">
            Book a Session
          </button>
        </div>
      </nav>
    </header>
  );
}
