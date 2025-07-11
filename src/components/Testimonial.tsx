import { Heart } from 'lucide-react';

export default function Testimonial() {
  return (
    <section
      className="py-20 xl:py-24 px-6 bg-[#f3e8e2] text-center bg-cover bg-no-repeat bg-bottom"
      style={{
        backgroundImage: `
          linear-gradient( rgba(243, 232, 226, 0.7), rgba(243, 232, 226, 0.7)),
          
          url('/images/header-bg.jpg')
        `
      }}
    >
      {/* <h2 className="text-4xl font-bold mb-8">Client Love</h2> */}
      <blockquote className="max-w-4xl mx-auto text-2xl xl:text-3xl italic font-light leading-relaxed text-gray-700">
        “Amanda made us feel completely at ease during our newborn session. She was gentle, patient, and captured the sweetest little details—tiny fingers, sleepy yawns, even our dog sneaking into the frame! We were blown away by how natural and timeless the photos felt. These images will be cherished forever.”
      </blockquote>
      <Heart className="mx-auto mt-6 h-8 w-8 xl:h-12 xl:w-12 text-gray-700" />
    </section>
  );
}
