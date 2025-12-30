import { Search, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Strategy',
    description:
      'We analyze your goals, audience, and technical requirements to build a solid foundation.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design & Architecture',
    description:
      'Creating intuitive UX/UI designs and scalable system architectures.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Development & Testing',
    description:
      'Building with best practices, conducting rigorous testing, and ensuring quality.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Scaling',
    description:
      'Smooth deployment, monitoring, and continuous optimization for growth.',
  },
];

export default function Process() {
  return (
    <section className="relative bg-gradient-to-b from-[#0a0a0a] to-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Proven Development Workflow
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-800 to-transparent transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-blue-400" />
                      </div>
                      <div className="text-3xl font-bold text-gray-700">
                        {step.number}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-800 transform -translate-y-1/2"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
