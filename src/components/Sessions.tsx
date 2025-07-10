import { Users, Baby, Heart } from 'lucide-react';

const sessions = [
  {
    icon: Users,
    title: 'Family Sessions',
    description: 'Capture the love and laughter of your family.',
  },
  {
    icon: Baby,
    title: 'Newborn Sessions',
    description: 'Celebrate your newest arrival with soft, sweet moments.',
  },
  {
    icon: Heart,
    title: 'Engagements',
    description: 'Document the joy and connection before your big day.',
  },
];

export default function Sessions() {
  return (
    <section className="py-24 px-6 pb-12">
      <h2 className="text-4xl font-bold mb-8">Sessions</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {sessions.map(({ icon: Icon, title, description }) => (
          <div key={title} className="p-10 bg-[#fef9f6] rounded-xl shadow hover:shadow-lg transition text-center">
            <Icon className="mx-auto mb-3 h-8 w-8 text-[#e5c0aa]" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        ))}
      </div>
      <a
        href="mailto:hello@amandaswire.com"
        className="inline-block bg-[#d0ab96] text-lg text-white mt-20 px-10 py-4 rounded-full hover:opacity-90 transition mb-6"
      >
        Book a Session!
      </a>
    </section>
  );
}
