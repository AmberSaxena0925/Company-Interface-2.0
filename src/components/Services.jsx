import { Code2, Server, TrendingUp, Cloud, Sparkles, Settings } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'React, Next.js, UI/UX - Beautiful, responsive interfaces that users love.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'APIs, Databases, Microservices - Robust, scalable server-side solutions.',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Performance Optimization',
    description:
      'Boost rankings and speed with technical SEO and optimization strategies.',
  },
  {
    icon: Cloud,
    title: 'SaaS Development',
    description:
      'End-to-end SaaS platforms with subscription management and scalability.',
  },
  {
    icon: Sparkles,
    title: 'AI & Automation Solutions',
    description:
      'Leverage AI and machine learning to automate and enhance workflows.',
  },
  {
    icon: Settings,
    title: 'Cloud & DevOps',
    description:
      'AWS, CI/CD pipelines - Reliable infrastructure and deployment systems.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            End-to-End Technology Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From idea to launch and beyond, we build reliable, high-performance
            digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="relative">
                  <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <Icon size={28} className="text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
