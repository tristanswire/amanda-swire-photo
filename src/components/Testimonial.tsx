import { Heart } from 'lucide-react';

export default function Testimonial() {
  return (
    <section
      className="font-body py-20 xl:py-24 px-6 text-center bg-brand-black text-brand-white"
    >
      {/* <h2 className="text-4xl font-bold mb-8">Client Love</h2> */}
      <blockquote className="max-w-4xl mx-auto text-2xl xl:text-3xl italic font-light leading-relaxed">
        “Amanda made us feel completely at ease during our newborn session. She was gentle, patient, and captured the sweetest little details—tiny fingers, sleepy yawns, even our dog sneaking into the frame! We were blown away by how natural and timeless the photos felt. These images will be cherished forever.”
      </blockquote>
      <Heart className="mx-auto mt-6 h-8 w-8 xl:h-12 xl:w-12" />
    </section>
  );
}
