import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  company: [
    { label: "Our Story", href: "#story" },
    { label: "Flavours", href: "#flavours" },
    { label: "Stores", href: "#stores" },
    { label: "Careers", href: "#careers" }
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "Order Online", href: "#order" },
    { label: "Delivery Info", href: "#delivery" },
    { label: "FAQs", href: "#faq" }
  ],
  business: [
    { label: "Franchise", href: "#franchise" },
    { label: "Bulk Orders", href: "#bulk" },
    { label: "Corporate Gifts", href: "#corporate" },
    { label: "Events", href: "#events" }
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Join the Royal Club
            </h3>
            <p className="text-xl text-primary-foreground/80 font-lato mb-8 max-w-2xl mx-auto">
              Get 1 free scoop every month, insider updates on new flavors, 
              and exclusive offers delivered to your inbox
            </p>
            
            <div className="max-w-md mx-auto flex gap-4">
              <Input 
                type="email"
                placeholder="Enter your email address"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 font-lato"
              />
              <Button variant="secondary" className="shrink-0">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/60 font-lato mt-4">
              No spam, just sweet updates. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-playfair font-bold mb-4">
              Babulal Ice Creams
            </h2>
            <p className="text-primary-foreground/80 font-lato mb-6 leading-relaxed">
              Handcrafted since 1955, we bring you the royal taste of premium ice creams 
              made with the finest ingredients and three generations of expertise.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors font-lato"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors font-lato"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Business</h4>
            <ul className="space-y-3">
              {footerLinks.business.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors font-lato"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Delivery Partners */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="font-playfair font-bold text-lg mb-4 text-center">Order Online</h4>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="bg-primary-foreground/10 rounded-lg p-4 mb-2">
                <span className="text-2xl">🛵</span>
              </div>
              <span className="text-sm font-lato">Swiggy</span>
            </div>
            <div className="text-center">
              <div className="bg-primary-foreground/10 rounded-lg p-4 mb-2">
                <span className="text-2xl">🍴</span>
              </div>
              <span className="text-sm font-lato">Zomato</span>
            </div>
            <div className="text-center">
              <div className="bg-primary-foreground/10 rounded-lg p-4 mb-2">
                <span className="text-2xl">🏪</span>
              </div>
              <span className="text-sm font-lato">Direct</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80 font-lato text-sm">
                © 2024 Babulal Ice Creams. All rights reserved.
              </p>
            </div>
            
            <div className="text-center">
              <p className="font-playfair italic text-gold">
                "A Taste Remembered for Generations"
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/80 hover:text-gold transition-colors font-lato">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/80 hover:text-gold transition-colors font-lato">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};