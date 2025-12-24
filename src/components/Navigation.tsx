import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-white font-bold text-xl tracking-tight">NEXATECH</div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Services</a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors text-sm">Solutions</a>
              <a href="#case-studies" className="text-gray-300 hover:text-white transition-colors text-sm">Case Studies</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition-colors text-sm px-4 py-2">
              Login
            </button>
            <button className="bg-[#1a1a1a] hover:bg-[#252525] text-white text-sm px-6 py-2 rounded-full transition-colors border border-gray-700">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#services" className="block text-gray-300 hover:text-white transition-colors text-sm">Services</a>
            <a href="#solutions" className="block text-gray-300 hover:text-white transition-colors text-sm">Solutions</a>
            <a href="#case-studies" className="block text-gray-300 hover:text-white transition-colors text-sm">Case Studies</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors text-sm">Pricing</a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors text-sm">Contact</a>
            <div className="pt-3 space-y-2">
              <button className="w-full text-left text-gray-300 hover:text-white transition-colors text-sm px-4 py-2">
                Login
              </button>
              <button className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-white text-sm px-6 py-2 rounded-full transition-colors border border-gray-700">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
