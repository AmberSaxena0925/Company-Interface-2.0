import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer comprehensive digital services including frontend and backend development, SaaS development, SEO optimization, AI and automation solutions, cloud infrastructure, and DevOps. We handle everything from initial concept to deployment and ongoing maintenance.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Project timelines vary based on scope and complexity. A typical website takes 4–6 weeks, while a custom SaaS platform may take 3–6 months. We provide detailed timelines during the discovery phase and keep you updated throughout the process.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Yes, we offer comprehensive post-launch support including bug fixes, performance monitoring, feature updates, and technical assistance. We have flexible support packages ranging from basic email support to 24/7 monitoring with SLA guarantees.',
  },
  {
    question: 'Can you scale existing products?',
    answer:
      'Absolutely. We specialize in scaling existing applications and systems. Whether you need to optimize performance, migrate to cloud infrastructure, implement microservices architecture, or add new features, we can help take your product to the next level.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Getting started is simple. Schedule a free consultation call where we discuss your goals, challenges, and requirements. We then provide a detailed proposal with timeline and pricing. Once approved, we begin the discovery phase and kick off development.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#0a0a0a] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'border-blue-500/50 bg-blue-500/5'
                  : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>

                <div className="flex-shrink-0 bg-blue-500/10 w-8 h-8 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus size={18} className="text-blue-400" />
                  ) : (
                    <Plus size={18} className="text-blue-400" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
