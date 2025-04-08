
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Shield, Lock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-8 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-malware-grid bg-cover bg-center opacity-5 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-40"></div>
      
      {/* Digital circuit patterns */}
      <div className="absolute inset-0 z-0 opacity-5 circuit-pattern"></div>
      
      {/* Data particles */}
      <div className="data-packet absolute top-1/4 left-1/3" style={{ animationDelay: '0.2s' }}></div>
      <div className="data-packet absolute top-1/3 right-1/4" style={{ animationDelay: '0.8s' }}></div>
      <div className="data-packet absolute bottom-1/4 left-1/2" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo and info section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-8 border-b border-indigo-500/20">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="mr-4 relative group">
              {/* Logo with glow effect */}
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center animate-pulse-soft overflow-hidden">
                <Shield className="h-6 w-6 text-white" />
                <div className="absolute inset-0 bg-indigo-600/20 group-hover:bg-indigo-600/40 transition-colors duration-300 rounded-full blur-xl"></div>
              </div>
              {/* Digital scan line */}
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/30 to-transparent h-full w-full animate-scan-line"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">SecureCleanse</h3>
              <p className="text-xs text-indigo-300 font-mono">MALWARE REMOVAL EXPERTS</p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <a href="#" className="h-10 w-10 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="relative">
            {/* Cyber glow effect for this section */}
            <div className="absolute -z-10 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl -top-10 -left-10"></div>
            
            <h3 className="text-lg font-bold mb-6 relative inline-flex items-center">
              <span className="mr-2">Tentang Kami</span>
              <span className="h-1 w-1 rounded-full bg-indigo-500 animate-pulse"></span>
            </h3>
            <p className="text-gray-400 mb-6 font-mono text-sm leading-relaxed">
              Layanan profesional pembersihan malware dan pengamanan website yang terpercaya dengan garansi hasil maksimal.
            </p>
            <div className="inline-flex items-center bg-indigo-500/10 border border-indigo-500/20 rounded-md px-3 py-1.5 text-xs font-mono text-indigo-300">
              <Lock className="h-3 w-3 mr-1.5" />
              <span>Keamanan Terjamin 100%</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-flex items-center">
              <span className="mr-2">Tautan Cepat</span>
              <span className="h-1 w-1 rounded-full bg-indigo-500 animate-pulse"></span>
            </h3>
            <ul className="space-y-4 font-mono text-sm">
              <li className="transform hover:translate-x-1 transition-transform duration-300">
                <Link to="/" className="text-gray-400 hover:text-indigo-400 transition-colors inline-flex items-center">
                  <span className="h-0.5 w-2 bg-indigo-500/50 mr-2"></span>
                  Beranda
                </Link>
              </li>
              <li className="transform hover:translate-x-1 transition-transform duration-300">
                <Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors inline-flex items-center">
                  <span className="h-0.5 w-2 bg-indigo-500/50 mr-2"></span>
                  Layanan
                </Link>
              </li>
              <li className="transform hover:translate-x-1 transition-transform duration-300">
                <Link to="/process" className="text-gray-400 hover:text-indigo-400 transition-colors inline-flex items-center">
                  <span className="h-0.5 w-2 bg-indigo-500/50 mr-2"></span>
                  Proses Kerja
                </Link>
              </li>
              <li className="transform hover:translate-x-1 transition-transform duration-300">
                <Link to="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors inline-flex items-center">
                  <span className="h-0.5 w-2 bg-indigo-500/50 mr-2"></span>
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-flex items-center">
              <span className="mr-2">Layanan</span>
              <span className="h-1 w-1 rounded-full bg-indigo-500 animate-pulse"></span>
            </h3>
            <ul className="space-y-4 font-mono text-sm">
              <li className="transform hover:translate-x-1 transition-transform duration-300">
                <Link to="/services#basic" className="text-gray-400 hover:text-indigo-400 transition-colors inline-flex items-center">
                  <span className="h-0.5 w-2 bg-indigo-500/50 mr-2"></span>
                  Paket Basic
                </Link>
              </li>
              <li className="transform hover:translate-x-1 transition-transform duration-300">
                <Link to="/services#advanced" className="text-gray-400 hover:text-indigo-400 transition-colors inline-flex items-center">
                  <span className="h-0.5 w-2 bg-indigo-500/50 mr-2"></span>
                  Paket Advanced
                </Link>
              </li>
              <li className="transform hover:translate-x-1 transition-transform duration-300">
                <Link to="/services#premium" className="text-gray-400 hover:text-indigo-400 transition-colors inline-flex items-center">
                  <span className="h-0.5 w-2 bg-indigo-500/50 mr-2"></span>
                  Paket Premium
                </Link>
              </li>
              <li className="transform hover:translate-x-1 transition-transform duration-300">
                <Link to="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors inline-flex items-center">
                  <span className="h-0.5 w-2 bg-indigo-500/50 mr-2"></span>
                  Konsultasi Khusus
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="relative">
            {/* Cyber glow effect for this section */}
            <div className="absolute -z-10 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl -top-10 -right-10"></div>
            
            <h3 className="text-lg font-bold mb-6 relative inline-flex items-center">
              <span className="mr-2">Kontak</span>
              <span className="h-1 w-1 rounded-full bg-indigo-500 animate-pulse"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={16} className="mr-3 text-indigo-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400 font-mono text-sm">+62 812 3456 7890</span>
              </li>
              <li className="flex items-start">
                <Mail size={16} className="mr-3 text-indigo-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400 font-mono text-sm">info@securecleanse.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 text-indigo-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400 font-mono text-sm">
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with tech lines */}
        <div className="relative pt-8 border-t border-indigo-500/20 text-center">
          <div className="tech-line absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
          <div className="tech-line absolute -top-3 w-full h-px bg-gradient-to-r from-transparent via-indigo-700 to-transparent opacity-20"></div>
          
          <p className="text-sm text-gray-500 font-mono">
            &copy; {currentYear} SecureCleanse. Hak Cipta Dilindungi.
          </p>
          
          {/* Decorative tech elements */}
          <div className="absolute left-1/4 bottom-0 text-indigo-500/30 animate-float" style={{ animationDelay: '0.5s' }}>
            <Shield className="h-4 w-4" />
          </div>
          <div className="absolute right-1/4 bottom-2 text-indigo-500/20 animate-float" style={{ animationDelay: '1.2s' }}>
            <Lock className="h-3 w-3" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
