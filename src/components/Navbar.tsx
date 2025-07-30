import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Our Story', href: '/#story' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href || location.hash.includes(href.replace('/#', ''));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-royal rounded-full flex items-center justify-center shadow-royal group-hover:shadow-gold transition-all duration-300">
                <span className="text-2xl font-playfair font-bold text-primary-foreground">B</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-playfair font-bold text-primary">Babulal</h1>
              <p className="text-xs text-muted-foreground font-lato tracking-wider">ICE CREAMS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-lato font-medium transition-all duration-300 relative group ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gold transform origin-right transition-transform duration-300 ${
                  isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:origin-left'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Phone size={16} />
                <span className="font-lato">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <MapPin size={16} />
                <span className="font-lato">Mumbai, Delhi, Pune</span>
              </div>
            </div>
            <Button variant="royal" size="sm" className="font-lato font-medium">
              Order Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-gold/20 shadow-cream">
            <div className="px-4 py-6 space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 font-lato font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-primary border-l-4 border-gold pl-4'
                      : 'text-foreground hover:text-primary hover:pl-2'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gold/20 space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone size={16} />
                  <span className="font-lato">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  <span className="font-lato">Mumbai, Delhi, Pune</span>
                </div>
                <Button variant="royal" size="sm" className="w-full font-lato font-medium">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};