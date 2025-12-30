import { TrendingUp, CheckCircle, Activity, Calendar } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '200%+',
    label: 'Growth for Clients',
    description: 'Average revenue increase',
  },
  {
    icon: CheckCircle,
    value: '50+',
    label: 'Projects Delivered',
    description: 'Successfully completed',
  },
  {
    icon: Activity,
    value: '99.9%',
    label: 'System Uptime',
    description: 'Reliable infrastructure',
  },
  {
    icon: Calendar,
    value: '5+',
    label: 'Years Industry Experience',
    description: 'Proven track record',
  },
];

export default function Results() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-blue-900/10 to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Results That Speak for Themselves
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don’t just deliver code — we deliver measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="relative">
                  <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <Icon size={24} className="text-blue-400" />
                  </div>

                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {metric.value}
                  </div>

                  <div className="text-lg font-semibold text-gray-300 mb-2">
                    {metric.label}
                  </div>

                  <div className="text-sm text-gray-500">
                    {metric.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
