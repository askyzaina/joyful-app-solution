
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { ThemeToggle } from './theme-toggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  const navbarClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3' : 'py-5'
  );
  
  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/services' },
    { name: 'Proses', path: '/process' },
    { name: 'Kontak', path: '/contact' },
  ];
  
  return (
    <header className={navbarClasses}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-foreground font-bold text-xl">
          <span className="bg-gradient-to-r from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
            MalwareCleaner
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(link.path) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <div className="ml-2">
            <ThemeToggle />
          </div>
          
          {user ? (
            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">Dashboard</Button>
              </Link>
              <Button variant="outline" size="sm" onClick={signOut}>Keluar</Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" size="sm">Masuk</Button>
              </Link>
              <Link to="/signup">
                <Button variant="default" size="sm">Daftar</Button>
              </Link>
            </div>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-md py-4 px-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "py-2 px-4 rounded-md text-sm",
                  isActive(link.path) ? "bg-primary/10 text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-border">
                <Link to="/dashboard" className="w-full">
                  <Button variant="ghost" size="sm" className="w-full justify-start">Dashboard</Button>
                </Link>
                <Button variant="outline" size="sm" onClick={signOut} className="w-full justify-start">Keluar</Button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-border">
                <Link to="/login" className="w-full">
                  <Button variant="ghost" size="sm" className="w-full justify-start">Masuk</Button>
                </Link>
                <Link to="/signup" className="w-full">
                  <Button variant="default" size="sm" className="w-full justify-start">Daftar</Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
