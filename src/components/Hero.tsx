
import { ArrowRight, Shield, Zap, Award, Activity, Lock, BadgeCheck, Database, Layers, ServerCrash } from 'lucide-react';
import CTAButton from './CTAButton';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 before:content-[''] before:absolute before:inset-0 before:bg-malware-grid before:bg-cover before:bg-center before:opacity-10 before:z-0 hex-grid">
      {/* Dark overlay with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#0a192f]/95 to-background z-0"></div>
      
      {/* Scanner effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="scanner-line"></div>
      </div>
      
      {/* Matrix-style particle effects */}
      <div className="absolute inset-0 z-0">
        <div className="matrix-rain"></div>
      </div>
      
      {/* Circuit patterns */}
      <div className="absolute inset-0 z-0 opacity-10 circuit-pattern"></div>
      
      {/* Abstract background elements with improved colors */}
      <div className="absolute -z-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl top-20 -right-48 animate-pulse-soft"></div>
      <div className="absolute -z-10 w-96 h-96 bg-indigo-700/5 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      
      {/* Decorative data particles */}
      <div className="data-particle absolute top-1/4 left-1/3" style={{ animationDelay: '0.2s' }}></div>
      <div className="data-particle absolute top-1/3 right-1/4" style={{ animationDelay: '0.8s' }}></div>
      <div className="data-particle absolute bottom-1/4 left-1/2" style={{ animationDelay: '1.5s' }}></div>
      <div className="data-particle absolute top-2/3 right-1/3" style={{ animationDelay: '2.2s' }}></div>
      
      <div className="container max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-md bg-gradient-to-r from-indigo-600/80 to-indigo-500/80 text-white text-sm font-bold tracking-wide shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-soft relative overflow-hidden group font-mono">
              <span className="relative z-10">#1 Jasa Remove Malware Terpercaya</span>
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-white" style={{ animationDelay: '0.1s' }}>
              Bebaskan Website Anda <br/>Dari <span className="bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent">Malware</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in font-mono" style={{ animationDelay: '0.2s' }}>
              Kami menghilangkan malware dan mengamankan website Anda dengan cepat, efektif, dan disertai garansi 90 hari.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CTAButton to="/kontak" size="lg" className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 animate-glow">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </CTAButton>
              <Button variant="outline" size="lg" asChild className="border-indigo-500/50 bg-transparent text-white hover:bg-indigo-500/10 hover:text-indigo-300 transition-colors duration-300 backdrop-blur-sm">
                <a href="#layanan">Lihat Layanan</a>
              </Button>
            </div>
            
            {/* Decorative element */}
            <div className="absolute top-40 left-10 text-indigo-500/30 animate-float hidden lg:block">
              <Activity className="h-6 w-6" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative animate-fade-in-up">
            <div className="aspect-[4/3] bg-gradient-to-br from-black/90 to-[#0a192f]/80 rounded-md shadow-xl overflow-hidden glass-card p-8 md:p-10 backdrop-blur border border-indigo-500/20">
              {/* Fixed positioning for the guarantee badge */}
              <div className="absolute top-4 right-4 bg-[#0a192f]/70 text-indigo-400 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm font-mono z-10">
                Garansi 90 Hari
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 md:p-6 rounded-md bg-black/60 backdrop-blur-sm flex items-start animate-slide-in-left group hover:bg-indigo-500/10 transition-colors duration-300 border border-indigo-500/10" style={{ animationDelay: '0.4s' }}>
                  <Shield className="h-8 w-8 text-indigo-500 mr-4 flex-shrink-0 group-hover:text-indigo-400 transition-colors duration-300" />
                  <div>
                    <h3 className="font-semibold mb-2 group-hover:text-indigo-400 transition-colors duration-300 text-white">Perlindungan Total</h3>
                    <p className="text-sm text-gray-300 font-mono">Menghapus semua jenis malware dan memperkuat keamanan</p>
                  </div>
                </div>
                <div className="p-5 md:p-6 rounded-md bg-black/60 backdrop-blur-sm flex items-start animate-slide-in-right group hover:bg-indigo-500/10 transition-colors duration-300 border border-indigo-500/10" style={{ animationDelay: '0.5s' }}>
                  <Zap className="h-8 w-8 text-indigo-500 mr-4 flex-shrink-0 group-hover:text-indigo-400 transition-colors duration-300" />
                  <div>
                    <h3 className="font-semibold mb-2 group-hover:text-indigo-400 transition-colors duration-300 text-white">Respon Cepat</h3>
                    <p className="text-sm text-gray-300 font-mono">Penanganan dalam 24 jam dengan hasil maksimal</p>
                  </div>
                </div>
                <div className="p-5 md:p-6 rounded-md bg-black/60 backdrop-blur-sm flex items-start animate-slide-in-left group hover:bg-indigo-500/10 transition-colors duration-300 border border-indigo-500/10" style={{ animationDelay: '0.6s' }}>
                  <Award className="h-8 w-8 text-indigo-500 mr-4 flex-shrink-0 group-hover:text-indigo-400 transition-colors duration-300" />
                  <div>
                    <h3 className="font-semibold mb-2 group-hover:text-indigo-400 transition-colors duration-300 text-white">Tim Berpengalaman</h3>
                    <p className="text-sm text-gray-300 font-mono">Ditangani oleh ahli keamanan web profesional</p>
                  </div>
                </div>
                <div className="p-5 md:p-6 rounded-md bg-black/60 backdrop-blur-sm flex items-start animate-slide-in-right group hover:bg-indigo-500/10 transition-colors duration-300 border border-indigo-500/10" style={{ animationDelay: '0.7s' }}>
                  <BadgeCheck className="h-8 w-8 text-indigo-500 mr-4 flex-shrink-0 group-hover:text-indigo-400 transition-colors duration-300" />
                  <div>
                    <h3 className="font-semibold mb-2 group-hover:text-indigo-400 transition-colors duration-300 text-white">Harga Bersaing</h3>
                    <p className="text-sm text-gray-300 font-mono">Layanan premium dengan harga terjangkau</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl top-0 right-0 transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute -z-10 w-72 h-72 bg-indigo-700/10 rounded-full blur-3xl bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3"></div>
            
            {/* Additional decorative elements */}
            <div className="absolute bottom-12 right-8 text-indigo-500/40 animate-float" style={{ animationDelay: '0.5s' }}>
              <Lock className="h-5 w-5" />
            </div>
            <div className="absolute top-8 left-12 text-indigo-500/30 animate-float" style={{ animationDelay: '1.2s' }}>
              <Database className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Add some futuristic tech lines at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 z-10 overflow-hidden">
        <div className="tech-line absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70"></div>
        <div className="tech-line absolute bottom-3 w-full h-px bg-gradient-to-r from-transparent via-indigo-700 to-transparent opacity-50"></div>
        <div className="tech-line absolute bottom-6 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
      </div>
    </div>
  );
};

export default Hero;
