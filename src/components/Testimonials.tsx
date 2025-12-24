import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Working with this team transformed our business. They delivered a scalable platform that handles millions of users without breaking a sweat.",
    name: "Sarah Chen",
    title: "CEO, TechStart Inc",
    rating: 5,
  },
  {
    quote: "Exceptional technical expertise combined with clear communication. They understood our vision and brought it to life beyond our expectations.",
    name: "Michael Rodriguez",
    title: "CTO, DataFlow Solutions",
    rating: 5,
  },
  {
    quote: "From concept to deployment, the process was seamless. Their attention to detail and commitment to quality is unmatched.",
    name: "Emily Watson",
    title: "Founder, CloudNest",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#111111] to-[#0a0a0a] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Founders & Teams
          </h2>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-2xl p-12 md:p-16">
            <div className="flex gap-1 mb-8 justify-center">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={20} fill="#3b82f6" className="text-blue-500" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center mb-8">
              "{testimonials[current].quote}"
            </blockquote>

            <div className="text-center">
              <div className="inline-flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-gray-700/20 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">
                    {testimonials[current].name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[current].title}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 hover:border-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all ${
                    index === current
                      ? 'w-8 h-2 bg-blue-500'
                      : 'w-2 h-2 bg-gray-700 hover:bg-gray-600'
                  } rounded-full`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 hover:border-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
