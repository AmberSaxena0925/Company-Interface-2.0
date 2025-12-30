import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Ideal for startups',
    features: [
      'Fixed pricing',
      'Small-scope projects',
      'Up to 3 revisions',
      '4-week delivery',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    description: 'Monthly retainer',
    badge: 'Recommended',
    features: [
      'Dedicated team',
      'Unlimited revisions',
      'Priority support',
      'Ongoing development',
      'Weekly check-ins',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions',
    features: [
      'Long-term partnership',
      'SLA support',
      'Custom architecture',
      'Scalability planning',
      '24/7 monitoring',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Flexible Engagement Models
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'border-2 border-blue-500 shadow-2xl shadow-blue-500/20 scale-105'
                  : 'border border-gray-800 hover:border-gray-700'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-blue-500/10 rounded-full p-1 mt-0.5">
                      <Check size={14} className="text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-full font-medium transition-all flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-[#1a1a1a] hover:bg-[#252525] text-white border border-gray-700'
                }`}
              >
                Schedule a Call
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
