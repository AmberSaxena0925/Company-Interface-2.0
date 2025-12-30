import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-radial from-blue-900/20 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-gray-800/20 to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-full px-4 py-2">
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                NEW
              </span>
              <span className="text-gray-300 text-sm">
                Now offering AI-powered digital solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Building Scalable
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
              <span className="block mt-2">That Drive Growth</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              We help startups and enterprises with web development, backend
              systems, SEO, cloud, and AI-powered solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-white hover:bg-gray-100 text-black font-medium px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2">
                Get a Free Consultation
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="group border border-gray-700 hover:border-gray-600 text-white font-medium px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2">
                <div className="bg-white rounded-full p-1.5">
                  <Play size={14} fill="black" className="text-black" />
                </div>
                View Our Work
              </button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute w-80 h-80 bg-gradient-to-br from-blue-500/20 to-gray-700/20 rounded-3xl rotate-12 blur-2xl"></div>
              <div className="absolute w-72 h-72 bg-gradient-to-br from-gray-700/30 to-blue-600/30 rounded-3xl -rotate-12 blur-xl"></div>

              <div className="relative grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-32 h-32 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-gray-800 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    style={{
                      animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-800">
          <p className="text-gray-500 text-sm text-center mb-8">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            <div className="text-gray-400 font-bold text-xl">Google</div>
            <div className="text-gray-400 font-bold text-xl">AWS</div>
            <div className="text-gray-400 font-bold text-xl">Shopify</div>
            <div className="text-gray-400 font-bold text-xl">Meta</div>
            <div className="text-gray-400 font-bold text-xl">Microsoft</div>
            <div className="text-gray-400 font-bold text-xl">Vercel</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}
