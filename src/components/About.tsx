import Image from 'next/image';

export default function About() {
  return (
    <section className="py-10 pb-14 xl:py-20 xl:pb-26 px-4 text-center bg-white">
      <h2 className="text-7xl mb-4 font-antro">About</h2>
      <p className="max-w-lg lg:max-w-3xl mx-auto text-xl text-gray-700 pb-16 font-body">
        I&apos;m Amanda, a lifestyle photographer capturing soft, natural, and heartfelt images. Whether it&apos;s a newborn yawn or a couple&apos;s sunset embrace, I aim to preserve the warmth and light of your most meaningful moments.
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
