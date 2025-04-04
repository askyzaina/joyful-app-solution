
import { ArrowRight, Shield, Zap, Award, Sparkles, Lock, BadgeCheck } from 'lucide-react';
import CTAButton from './CTAButton';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 before:content-[''] before:absolute before:inset-0 before:bg-malware-grid before:bg-cover before:bg-center before:opacity-90 before:z-0">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background z-0"></div>
      
      {/* Matrix-style particle effects */}
      <div className="absolute inset-0 z-0">
        <div className="matrix-rain"></div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute -z-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 -right-48 animate-pulse-soft"></div>
      <div className="absolute -z-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      
      {/* Decorative cosmic particles */}
      <div className="cosmic-particle absolute top-1/4 left-1/3" style={{ animationDelay: '0.2s' }}></div>
      <div className="cosmic-particle absolute top-1/3 right-1/4" style={{ animationDelay: '0.8s' }}></div>
      <div className="cosmic-particle absolute bottom-1/4 left-1/2" style={{ animationDelay: '1.5s' }}></div>
      <div className="cosmic-particle absolute top-2/3 right-1/3" style={{ animationDelay: '2.2s' }}></div>
      
      <div className="container max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500 via-primary to-purple-700 text-white text-sm font-bold tracking-wide shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-soft relative overflow-hidden group font-mono">
              <span className="relative z-10">#1 Jasa Remove Malware Terpercaya</span>
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-white" style={{ animationDelay: '0.1s' }}>
              Bebaskan Website Anda <br/>Dari <span className="text-purple-400">Malware</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in font-mono" style={{ animationDelay: '0.2s' }}>
              Kami menghilangkan malware dan mengamankan website Anda dengan cepat, efektif, dan disertai garansi 90 hari.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CTAButton to="/kontak" size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 animate-glow">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </CTAButton>
              <Button variant="outline" size="lg" asChild className="border-purple-300 bg-transparent text-white hover:bg-purple-900/50 hover:text-purple-200 transition-colors duration-300 backdrop-blur-sm">
                <a href="#layanan">Lihat Layanan</a>
              </Button>
            </div>
            
            {/* Decorative element */}
            <div className="absolute top-40 left-10 text-purple-400/30 animate-float hidden lg:block">
              <Sparkles className="h-6 w-6" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative animate-fade-in-up">
            <div className="aspect-[4/3] bg-black/70 rounded-2xl shadow-xl overflow-hidden glass-card p-6 md:p-8 backdrop-blur border border-purple-500/20">
              <div className="absolute top-4 right-4 bg-purple-900/70 text-purple-200 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm font-mono">
                Garansi 90 Hari
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-black/50 backdrop-blur-sm flex items-start animate-slide-in-left group hover:bg-purple-900/30 transition-colors duration-300 border border-purple-500/10" style={{ animationDelay: '0.4s' }}>
                  <Shield className="h-8 w-8 text-purple-400 mr-4 flex-shrink-0 group-hover:text-purple-300 transition-colors duration-300" />
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-purple-300 transition-colors duration-300 text-white">Perlindungan Total</h3>
                    <p className="text-sm text-gray-300 font-mono">Menghapus semua jenis malware dan memperkuat keamanan</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-black/50 backdrop-blur-sm flex items-start animate-slide-in-right group hover:bg-purple-900/30 transition-colors duration-300 border border-purple-500/10" style={{ animationDelay: '0.5s' }}>
                  <Zap className="h-8 w-8 text-purple-400 mr-4 flex-shrink-0 group-hover:text-purple-300 transition-colors duration-300" />
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-purple-300 transition-colors duration-300 text-white">Respon Cepat</h3>
                    <p className="text-sm text-gray-300 font-mono">Penanganan dalam 24 jam dengan hasil maksimal</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-black/50 backdrop-blur-sm flex items-start animate-slide-in-left group hover:bg-purple-900/30 transition-colors duration-300 border border-purple-500/10" style={{ animationDelay: '0.6s' }}>
                  <Award className="h-8 w-8 text-purple-400 mr-4 flex-shrink-0 group-hover:text-purple-300 transition-colors duration-300" />
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-purple-300 transition-colors duration-300 text-white">Tim Berpengalaman</h3>
                    <p className="text-sm text-gray-300 font-mono">Ditangani oleh ahli keamanan web profesional</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-black/50 backdrop-blur-sm flex items-start animate-slide-in-right group hover:bg-purple-900/30 transition-colors duration-300 border border-purple-500/10" style={{ animationDelay: '0.7s' }}>
                  <BadgeCheck className="h-8 w-8 text-purple-400 mr-4 flex-shrink-0 group-hover:text-purple-300 transition-colors duration-300" />
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-purple-300 transition-colors duration-300 text-white">Harga Bersaing</h3>
                    <p className="text-sm text-gray-300 font-mono">Layanan premium dengan harga terjangkau</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl top-0 right-0 transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute -z-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3"></div>
            
            {/* Additional decorative elements */}
            <div className="absolute bottom-12 right-8 text-purple-600/40 animate-float" style={{ animationDelay: '0.5s' }}>
              <Lock className="h-5 w-5" />
            </div>
            <div className="absolute top-8 left-12 text-purple-600/30 animate-float" style={{ animationDelay: '1.2s' }}>
              <Sparkles className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Add some futuristic tech lines at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 z-10 overflow-hidden">
        <div className="tech-line absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
        <div className="tech-line absolute bottom-3 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        <div className="tech-line absolute bottom-6 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"></div>
      </div>
    </div>
  );
};

export default Hero;
