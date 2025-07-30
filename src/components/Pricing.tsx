import Image from 'next/image';

const packages = [
  {
    title: 'Mini Session',
    price: '$150',
    description: ['Up to 30 Minutes', '15 Edited Photos', 'Basic Retouching'],
    image: '/images/pricing-1.jpg',
    alt: 'a female author blowing confetti in to the air'
  },
  {
    title: 'Full Session',
    price: '$250',
    description: ['Up to 60 Minutes', '25 Edited Photos', 'Advanced Retouching'],
    image: '/images/pricing-2.jpg',
    alt: 'black and white photo of a family of 6 laying on the sitting smiling together'
  },
  {
    title: 'Newborn Session',
    price: '$300',
    description: ['Up to 90 Minutes', '30 Edited Photos', 'Advanced Retouching', 'At Home or Studio'],
    image: '/images/pricing-3.jpg',
    alt: 'a beautiful newborn boy laying on his fathers forearm'
  },
];

export default function Pricing() {
  return (
    <section className="py-12 lg:py-24 lg:pb-4 px-6 text-center bg-brand-black">
      <h2 className="text-5xl text-brand-white font-bold mb-10">Pricing</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto text-left">
        {packages.map(({ title, price, description, image }) => (
          <div key={title} className="bg-white rounded-xl hover:shadow-md transition p-6">
            <div className="relative w-full h-100 rounded-lg overflow-hidden mb-4">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-5xl font-bold text-brand-black mt-2 pb-2">{price}</p>
            <ul className="mt-2 text-md text-gray-600 space-y-1 pb-10 pl-3">
              { description.map((item, i) => (
                <li key={i}>• {item}</li>
              )) }
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-3 mb-10 text-sm text-brand-whiteitalic">
        Travel fees may apply for locations outside the DFW area.
      </p>
    </section>
  );
}
