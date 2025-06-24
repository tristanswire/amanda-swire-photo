import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6">Ready to Book?</h2>
      <p className="mb-6 text-sm sm:text-base">
        Let’s capture your beautiful moments. Reach out today to schedule your session.
      </p>
      <a
        href="mailto:hello@amandaswire.com"
        className="inline-block bg-[#d0ab96] text-white px-6 py-3 rounded-full hover:opacity-90 transition mb-6"
      >
        Contact Amanda
      </a>

     <div className="flex justify-center gap-6">
      <a
        href="https://www.instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#d0ab96] hover:text-[#a98570] transition"
        aria-label="Instagram"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.facebook.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#d0ab96] hover:text-[#a98570] transition"
        aria-label="Facebook"
      >
        <FaFacebook size={30} />
      </a>
    </div>

    </section>
  );
}
