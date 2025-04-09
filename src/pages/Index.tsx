import { useState, useEffect } from 'react';
import { Shield, Database, File, Zap, UserCheck, Clock, Activity, BadgeCheck, Lock, Award, Layers, ServerCrash, AlertTriangle, Star } from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard, { ServiceFeature } from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ProcessStep from '@/components/ProcessStep';
import CTAButton from '@/components/CTAButton';
import ServiceCheckout from '@/components/ServiceCheckout';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setShowCheckout(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
  };

  const basicFeatures: ServiceFeature[] = [
    { text: 'Backup website lengkap', included: true },
    { text: 'Pembersihan malware dasar', included: true },
    { text: 'Pemindaian file terinfeksi', included: true },
    { text: 'Laporan singkat', included: true },
    { text: 'Garansi 30 hari', included: true },
    { text: 'Security hardening', included: false },
    { text: 'Optimasi performa', included: false },
  ];

  const advancedFeatures: ServiceFeature[] = [
    { text: 'Backup website lengkap', included: true },
    { text: 'Pembersihan malware menyeluruh', included: true },
    { text: 'Pemindaian file terinfeksi', included: true },
    { text: 'Laporan detail', included: true },
    { text: 'Garansi 60 hari', included: true },
    { text: 'Security hardening', included: true },
    { text: 'Optimasi performa', included: true },
  ];

  const premiumFeatures: ServiceFeature[] = [
    { text: 'Backup website lengkap', included: true },
    { text: 'Pembersihan malware premium', included: true },
    { text: 'Pemindaian file terinfeksi', included: true },
    { text: 'Laporan detail & rekomendasi', included: true },
    { text: 'Garansi 90 hari', included: true },
    { text: 'Security hardening tingkat lanjut', included: true },
    { text: 'Optimasi performa', included: true },
    { text: 'Monitoring keamanan 30 hari', included: true },
    { text: 'Dukungan prioritas 24/7', included: true },
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'E-commerce Owner',
      content: 'Website saya terinfeksi malware dan muncul di blacklist Google. Dalam 24 jam, mereka berhasil membersihkan dan mengembalikan status website saya. Sangat profesional!',
      rating: 5,
    },
    {
      name: 'Dewi Lestari',
      role: 'Blogger',
      content: 'Saya sangat puas dengan layanan yang diberikan. Mereka tidak hanya membersihkan malware, tetapi juga memberikan tips pencegahan agar website saya lebih aman ke depannya.',
      rating: 5,
    },
    {
      name: 'Ahmad Hidayat',
      role: 'Pemilik Bisnis',
      content: 'Proses pembersihan cepat dan transparan. Mereka menjelaskan setiap langkah yang dilakukan dan memberikan laporan lengkap. Harga juga sangat sebanding dengan kualitas layanan.',
      rating: 4,
    },
    {
      name: 'Siti Rahayu',
      role: 'Toko Online',
      content: 'Setelah website saya terinfeksi, penjualan menurun drastis. Berkat layanan mereka, website saya kembali aman dan pelanggan kembali berbelanja. Sangat merekomendasikan!',
      rating: 5,
    },
    {
      name: 'Joko Widodo',
      role: 'Pengusaha Digital',
      content: 'Layanan yang sangat profesional. Tim support sangat responsif dan pembersihan malware dilakukan dengan cepat tanpa mengganggu operasional website.',
      rating: 5,
    },
    {
      name: 'Ani Kusuma',
      role: 'Agensi Digital',
      content: 'Kami menggunakan layanan ini untuk beberapa klien kami yang terinfeksi malware. Hasilnya selalu memuaskan dan tepat waktu. Partner yang dapat diandalkan!',
      rating: 5,
    },
    {
      name: 'Rudi Hartono',
      role: 'Fotografer',
      content: 'Portfolio online saya terinfeksi dan menampilkan iklan spam. Dalam waktu singkat, website saya kembali bersih. Terima kasih atas layanan profesionalnya!',
      rating: 4,
    },
    {
      name: 'Maya Sari',
      role: 'Pemilik Startup',
      content: 'Ketika website startup kami terkena malware, kami panik. Untungnya kami menemukan layanan ini yang cepat dan efektif menyelesaikan masalah kami.',
      rating: 5,
    },
    {
      name: 'Dian Wahyu',
      role: 'Toko Dropship',
      content: 'Sebagai pemilik toko dropship, keamanan website sangat penting. Layanan pembersihan malware mereka sangat membantu menjaga kepercayaan pelanggan saya.',
      rating: 5,
    },
    {
      name: 'Irfan Hakim',
      role: 'Konsultan IT',
      content: 'Sebagai konsultan IT, saya menilai layanan mereka sangat teknis dan komprehensif. Laporan yang diberikan sangat detail dan solusi yang ditawarkan tepat sasaran.',
      rating: 5,
    },
  ];

  return (
    <div className={`page-transition ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <Hero />
      
      {/* Malware Info Section */}
      <section className="py-16 md:py-24 bg-[#0a192f] relative overflow-hidden" id="info">
        {/* Circuit pattern background */}
        <div className="absolute inset-0 opacity-5 circuit-pattern"></div>
        
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-mono mb-4">
              THREAT INTELLIGENCE
            </div>
            <h2 className="section-title text-white">Kenapa Malware Berbahaya?</h2>
            <p className="section-subtitle text-gray-400">
              Infeksi malware tidak hanya membahayakan website Anda, tetapi juga merusak reputasi dan bisnis Anda secara keseluruhan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6 mx-auto">
                <Database className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Kehilangan Data</h3>
              <p className="text-gray-400 font-mono text-sm">
                Malware dapat mengakses, memodifikasi, atau menghapus data penting dari website dan database Anda.
              </p>
            </div>
            
            <div className="cyber-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6 mx-auto">
                <UserCheck className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Kerusakan Reputasi</h3>
              <p className="text-gray-400 font-mono text-sm">
                Google dapat mem-blacklist website Anda, membuat pengunjung mendapatkan peringatan bahaya saat mengakses situs Anda.
              </p>
            </div>
            
            <div className="cyber-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6 mx-auto">
                <ServerCrash className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Penurunan Performa</h3>
              <p className="text-gray-400 font-mono text-sm">
                Website menjadi lambat, tidak responsif, dan mengganggu pengalaman pengguna yang berdampak pada konversi.
              </p>
            </div>
          </div>
          
          {/* Security Alert Box */}
          <div className="security-alert mt-16 max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
              <AlertTriangle className="h-6 w-6 text-indigo-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">Fakta Keamanan</h4>
                <p className="text-sm">37% dari semua website yang terinfeksi malware tidak menyadari adanya infeksi sampai terlambat. Pemeriksaan keamanan secara berkala sangat penting untuk mencegah serangan yang lebih parah.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 wavy-background relative overflow-hidden" id="layanan">
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-indigo-900/5 to-transparent"></div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-tl from-indigo-900/5 to-transparent"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-indigo-500/30 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-indigo-500/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-indigo-500/30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-mono mb-4">
              SOLUSI KAMI
            </div>
            <h2 className="section-title text-white">Pilih Paket Layanan Kami</h2>
            <p className="section-subtitle text-gray-400">
              Kami menawarkan berbagai paket layanan pembersihan malware yang disesuaikan dengan kebutuhan dan anggaran Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              id="basic"
              title="Paket Basic"
              price="Rp 150.000"
              description="Pembersihan malware dasar untuk website WordPress dengan infeksi ringan."
              features={basicFeatures}
              className="animate-fade-in-up border border-indigo-500/20 bg-gradient-to-br from-[#0a192f] to-black"
              style={{ animationDelay: '0.1s' }}
              onSelect={() => handleServiceSelect('basic')}
            />
            
            <ServiceCard
              id="advanced"
              title="Paket Advanced"
              price="Rp 350.000"
              description="Pembersihan malware menyeluruh dengan pengamanan dan optimasi."
              features={advancedFeatures}
              popular={true}
              className="animate-fade-in-up border border-indigo-500/30 bg-gradient-to-br from-[#0a192f] to-black"
              style={{ animationDelay: '0.2s' }}
              onSelect={() => handleServiceSelect('advanced')}
            />
            
            <ServiceCard
              id="premium"
              title="Paket Premium"
              price="Rp 750.000"
              description="Solusi keamanan komprehensif untuk website dengan infeksi berat atau e-commerce."
              features={premiumFeatures}
              className="animate-fade-in-up border border-indigo-500/20 bg-gradient-to-br from-[#0a192f] to-black"
              style={{ animationDelay: '0.3s' }}
              onSelect={() => handleServiceSelect('premium')}
            />
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-[#0a192f] relative overflow-hidden" id="proses">
        {/* Code pattern background */}
        <div className="absolute inset-0 opacity-5 code-pattern"></div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-mono mb-4">
              METODOLOGI
            </div>
            <h2 className="section-title text-white">Proses Pembersihan Malware</h2>
            <p className="section-subtitle text-gray-400">
              Kami mengikuti metodologi yang teliti dan sistematis untuk memastikan website Anda benar-benar bersih dan aman.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ProcessStep
              number={1}
              title="Diagnosa Awal"
              description="Melakukan backup data dan analisis mendalam untuk mengidentifikasi jenis malware dan titik infeksi."
              icon={<File className="h-6 w-6 text-indigo-500" />}
              style={{ animationDelay: '0.1s' }}
              className="border border-indigo-500/20 bg-gradient-to-br from-[#0a192f] to-black"
            />
            
            <ProcessStep
              number={2}
              title="Pembersihan"
              description="Menghapus semua malware dan file berbahaya dari website secara menyeluruh."
              icon={<Shield className="h-6 w-6 text-indigo-500" />}
              style={{ animationDelay: '0.2s' }}
              className="border border-indigo-500/20 bg-gradient-to-br from-[#0a192f] to-black"
            />
            
            <ProcessStep
              number={3}
              title="Pengamanan"
              description="Meningkatkan keamanan website dengan security hardening dan update sistem."
              icon={<Lock className="h-6 w-6 text-indigo-500" />}
              style={{ animationDelay: '0.3s' }}
              className="border border-indigo-500/20 bg-gradient-to-br from-[#0a192f] to-black"
            />
            
            <ProcessStep
              number={4}
              title="Pelaporan"
              description="Memberikan laporan lengkap dan rekomendasi untuk mencegah serangan di masa depan."
              icon={<BadgeCheck className="h-6 w-6 text-indigo-500" />}
              style={{ animationDelay: '0.4s' }}
              className="border border-indigo-500/20 bg-gradient-to-br from-[#0a192f] to-black"
            />
          </div>
          
          {/* Terminal Display */}
          <div className="mt-16 max-w-3xl mx-auto border border-indigo-500/20 rounded-md overflow-hidden">
            <div className="terminal-header">
              <div className="terminal-circle bg-red-500/80"></div>
              <div className="terminal-circle bg-yellow-500/80"></div>
              <div className="terminal-circle bg-green-500/80"></div>
              <div className="ml-3 text-xs text-gray-400">secure-cleanse@malware-scanner</div>
            </div>
            <div className="terminal-body h-48 overflow-auto">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">scanning website.com for malware</span>
              </div>
              <div className="terminal-output">Initializing deep scan...</div>
              <div className="terminal-output">Checking file integrity...</div>
              <div className="terminal-output">Analyzing JavaScript files...</div>
              <div className="terminal-output">Scanning PHP files...</div>
              <div className="terminal-output text-red-400">! Detected obfuscated code in wp-content/themes/custom/footer.php</div>
              <div className="terminal-output text-red-400">! Detected suspicious iframe in index.php</div>
              <div className="terminal-output text-red-400">! Detected backdoor in wp-content/uploads/2023/01/image.jpg</div>
              <div className="terminal-line mt-2">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">running malware removal protocol</span>
              </div>
              <div className="terminal-output">Creating backup...</div>
              <div className="terminal-output">Removing malicious code...</div>
              <div className="terminal-output">Patching vulnerable files...</div>
              <div className="terminal-output">Updating security measures...</div>
              <div className="terminal-output text-green-400">✓ Malware removal complete</div>
              <div className="terminal-line mt-2">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">verifying website integrity</span>
              </div>
              <div className="terminal-output">Running follow-up scan...</div>
              <div className="terminal-output text-green-400">✓ No malware detected</div>
              <div className="terminal-output text-green-400">✓ Website clean and secure</div>
              <div className="terminal-line mt-2">
                <span className="terminal-prompt">$</span>
                <span className="terminal-command">_<span className="animate-type-cursor">|</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 testimonial-background relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-mono mb-4">
              TESTIMONI
            </div>
            <h2 className="section-title text-white">Klien Kami Berkata</h2>
            <p className="section-subtitle text-gray-400">
              Lihat apa yang dikatakan pelanggan kami tentang layanan pembersihan malware kami.
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                  <div className="testimonial-card h-full flex flex-col">
                    {/* Star rating */}
                    <div className="flex items-center mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={i < testimonial.rating ? "h-5 w-5 mr-1 text-indigo-500 fill-indigo-500" : "h-5 w-5 mr-1 text-gray-300"}
                        />
                      ))}
                    </div>
                    
                    {/* Content with improved spacing */}
                    <p className="mb-6 text-gray-300 flex-grow">{testimonial.content}</p>
                    
                    {/* Author info */}
                    <div className="flex items-center mt-auto pt-4 border-t border-indigo-500/10">
                      <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-indigo-400/80">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static transform-none bg-black/80 border border-indigo-500/30 hover:bg-indigo-500/20 hover:text-white text-indigo-400" />
              <CarouselNext className="relative static transform-none bg-black/80 border border-indigo-500/30 hover:bg-indigo-500/20 hover:text-white text-indigo-400" />
            </div>
          </Carousel>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Dark background with improved gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a192f] to-black z-0"></div>
        
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
        
        {/* Abstract background elements */}
        <div className="absolute -z-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl top-20 -right-48 animate-pulse-soft"></div>
        <div className="absolute -z-10 w-96 h-96 bg-indigo-700/5 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        
        {/* Tech lines at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 z-10 overflow-hidden">
          <div className="tech-line absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70"></div>
          <div className="tech-line absolute bottom-3 w-full h-px bg-gradient-to-r from-transparent via-indigo-700 to-transparent opacity-50"></div>
          <div className="tech-line absolute bottom-6 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
        </div>

        <div className="section-container text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-md bg-gradient-to-r from-indigo-500/20 to-indigo-700/20 text-indigo-400 text-sm font-bold tracking-wide shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-soft font-mono border border-indigo-500/30">
            #SECURE YOUR WEBSITE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in text-white font-heading">
            Siap Bebaskan Website Anda dari <span className="bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent">Malware</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in font-mono" style={{ animationDelay: '0.1s' }}>
            Dapatkan konsultasi gratis dan biarkan tim ahli kami membantu mengamankan website Anda hari ini juga.
          </p>
          
          <div className="relative">
            <CTAButton 
              to="/contact" 
              size="lg" 
              className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 animate-glow relative overflow-hidden group z-10"
            >
              <span className="relative z-10">Konsultasi Gratis Sekarang</span>
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            </CTAButton>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 text-indigo-500/40 animate-float hidden lg:block">
              <Activity className="h-8 w-8" />
            </div>
            <div className="absolute -bottom-8 -right-8 text-indigo-500/30 animate-float hidden lg:block" style={{ animationDelay: '1.2s' }}>
              <Layers className="h-6 w-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Checkout Modal */}
      {showCheckout && selectedService && (
        <ServiceCheckout
          selectedPlanId={selectedService}
          onClose={handleCloseCheckout}
        />
      )}
    </div>
  );
};

export default Index;
