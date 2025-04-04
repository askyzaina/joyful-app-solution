
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus, User, LogOut, Shield, Activity } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from '@/context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/services' },
    { name: 'Proses', path: '/process' },
    { name: 'Kontak', path: '/contact' },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const getInitials = (name: string) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-black/90 shadow-sm backdrop-blur-lg border-b border-[#00d2ff]/10" 
          : "bg-black/70 backdrop-blur-md"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Shield className="h-5 w-5 mr-2 text-[#00d2ff]" />
          <span className="text-xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">SecureCleanse</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "transition-colors duration-200 text-sm font-medium",
                isActive(link.path) 
                  ? "text-[#00d2ff] hover:text-[#00d2ff]/80" 
                  : "text-gray-300 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          {user ? (
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-300 hover:text-white hover:bg-[#00d2ff]/10"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-[#00d2ff] text-white">
                        {getInitials(profile?.full_name || user.email || '')}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-black/90 border-[#00d2ff]/30 text-gray-200">
                  <DropdownMenuItem onClick={() => navigate('/dashboard')} className="hover:bg-[#00d2ff]/10 hover:text-white focus:bg-[#00d2ff]/10 focus:text-white">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="hover:bg-[#00d2ff]/10 hover:text-white focus:bg-[#00d2ff]/10 focus:text-white">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <>
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-300 hover:text-white hover:bg-[#00d2ff]/10"
                onClick={() => navigate('/login')}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button
                variant="outline"
                className="border-[#00d2ff] text-[#00d2ff] hover:bg-[#00d2ff]/10 hover:text-white"
                onClick={() => navigate('/signup')}
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Daftar
              </Button>
            </>
          )}
          
          <Button asChild className="bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] hover:from-[#00b8e0] hover:to-[#3470c0] text-white animate-pulse-soft">
            <Link to="/contact">Konsultasi Gratis</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-black/95 animate-fade-in">
          <div className="flex flex-col space-y-6 p-6 pt-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg font-medium transition-colors duration-200 py-2",
                  isActive(link.path) 
                    ? "text-[#00d2ff]" 
                    : "text-gray-300 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-lg font-medium transition-colors duration-200 py-2 text-gray-300 hover:text-white"
                >
                  Dashboard
                </Link>
                <Button 
                  onClick={handleLogout}
                  className="w-full bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] hover:from-[#00b8e0] hover:to-[#3470c0] text-white"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center text-lg font-medium transition-colors duration-200 py-2 text-gray-300 hover:text-white"
                >
                  <LogIn className="h-5 w-5 mr-2" />
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center text-lg font-medium transition-colors duration-200 py-2 text-gray-300 hover:text-white"
                >
                  <UserPlus className="h-5 w-5 mr-2" />
                  Daftar
                </Link>
              </>
            )}
            
            <Button asChild className="w-full bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] hover:from-[#00b8e0] hover:to-[#3470c0] text-white mt-4">
              <Link to="/contact">Konsultasi Gratis</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
