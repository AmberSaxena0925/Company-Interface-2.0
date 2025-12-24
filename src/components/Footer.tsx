import { ArrowRight, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gradient-to-b from-[#111111] to-[#0a0a0a] border-t border-gray-800 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 text-[20vw] font-bold text-gray-900/20 text-center whitespace-nowrap pointer-events-none">
        FORGESURGE
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-white font-bold text-2xl mb-4">FORGE SURGE</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building scalable digital solutions that drive growth. We turn your vision into reality with cutting-edge technology and proven expertise.
            </p>
            <button className="group bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition-all flex items-center gap-2">
              Book a Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  SaaS Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Cloud & DevOps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © 2024 NexaTech. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:hello@nexatech.com"
              className="bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
