import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20  pb-26 px-4 text-center bg-white">
      <h2 className="text-4xl font-bold mb-4">About</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 pb-16">
        I'm Amanda, a lifestyle photographer capturing soft, natural, and heartfelt images. Whether it's a newborn yawn or a couple’s sunset embrace, I aim to preserve the warmth and light of your most meaningful moments.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <div className="w-100 h-100 relative rounded-xl overflow-hidden bg-gray-100">
          <Image src="/images/amanda-1.jpg" alt="Amanda Swire" fill className="object-cover" />
        </div>
        <div className="w-100 h-100 relative rounded-xl overflow-hidden bg-gray-100">
          <Image src="/images/amanda-2.jpg" alt="Amanda Swire with Camera" fill className="object-cover" />
        </div>
        <div className="w-100 h-100 relative rounded-xl overflow-hidden bg-gray-100">
          <Image src="/images/amanda-3.jpg" alt="Amanda Swire seated" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
