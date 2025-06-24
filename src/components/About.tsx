import Image from 'next/image';

export default function About() {
  return (
    <section className="py-16 px-4 text-center">
        {/* Amanda Portrait */}
        <div className="flex justify-center text-center pb-8">
          <Image src="/images/amanda-headshot.jpeg" alt="Amanda shooting" width={400} height={400} className="rounded-xl object-cover" />
        </div>
      <p className="max-w-2xl mx-auto">
        Amanda is a natural light photographer who loves capturing genuine connections and beautiful moments.
        Her passion for storytelling is evident in every session.
      </p>
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <Image src="/images/image-1.jpeg" alt="Amanda shooting" width={400} height={400} className="rounded-xl object-cover" />
        <Image src="/images/image-2.jpeg" alt="Amanda smiling" width={400} height={400} className="rounded-xl object-cover" />
        <Image src="/images/image-3.jpeg" alt="Amanda smiling" width={400} height={400} className="rounded-xl object-cover" />
      </div>
    </section>
  );
}
