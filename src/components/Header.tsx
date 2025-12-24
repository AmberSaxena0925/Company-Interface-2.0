import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('services');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-white font-bold text-xl tracking-tight">
              FORGE SURGE
            </span>
          </div>

          {/* Center Navigation */}
          <div className="absolute left-1/2 hidden md:flex -translate-x-1/2 items-center gap-12">
            {[
              ['services', 'Services'],
              ['solutions', 'Solutions'],
              ['case-studies', 'Case Studies'],
              ['pricing', 'Pricing'],
              ['contact', 'Contact'],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActive(id)}
                className={`nav-link ${active === id ? 'active' : ''}`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition text-sm">
              Login
            </button>
            <button className="bg-[#1a1a1a] hover:bg-[#252525] text-white text-sm px-6 py-2 rounded-full border border-gray-700 transition">
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
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-800 pt-4">
            {[
              ['services', 'Services'],
              ['solutions', 'Solutions'],
              ['case-studies', 'Case Studies'],
              ['pricing', 'Pricing'],
              ['contact', 'Contact'],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => {
                  setActive(id);
                  setIsOpen(false);
                }}
                className={`mobile-link ${active === id ? 'active' : ''}`}
              >
                {label}
              </a>
            ))}

            <div className="pt-4 space-y-2">
              <button className="w-full text-left mobile-link px-4 py-2">
                Login
              </button>
              <button className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-white text-sm px-6 py-2 rounded-full border border-gray-700 transition">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          font-size: 0.875rem;
          color: #d1d5db;
          transition: color 0.25s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          transition: width 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #ffffff;
          text-shadow: 0 0 14px rgba(96, 165, 250, 0.9);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
          box-shadow: 0 0 12px rgba(96, 165, 250, 0.9);
        }

        .mobile-link {
          display: block;
          font-size: 0.875rem;
          color: #d1d5db;
          padding: 0.25rem 0;
          transition: color 0.25s ease;
        }

        .mobile-link.active,
        .mobile-link:hover {
          color: #ffffff;
          text-shadow: 0 0 10px rgba(96, 165, 250, 0.8);
        }
      `}</style>
    </nav>
  );
}
