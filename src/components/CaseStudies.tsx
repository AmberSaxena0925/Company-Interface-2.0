import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    name: 'E-Commerce Platform Redesign',
    techStack: 'Next.js, Stripe, Tailwind CSS',
    result: '3× Conversion Rate',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'SaaS Analytics Dashboard',
    techStack: 'React, Node.js, PostgreSQL',
    result: '50% Faster Load Times',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    name: 'Healthcare Mobile App',
    techStack: 'React Native, Firebase',
    result: '100K+ Active Users',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative bg-gradient-to-b from-[#111111] to-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Case Studies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Projects. Real Impact.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

              <div className="relative">
                <div className="h-40 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl"></div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {study.name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.techStack.split(', ').map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Key Result</div>
                    <div className="text-lg font-bold text-white">
                      {study.result}
                    </div>
                  </div>

                  <button className="group/btn text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                    <span className="text-sm font-medium">View</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
