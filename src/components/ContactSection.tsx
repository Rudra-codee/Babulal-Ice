import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Visit Our Stores
          </h2>
          <p className="text-xl text-muted-foreground font-lato max-w-2xl mx-auto">
            Experience the royal taste at our premium outlets across India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-primary mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-muted-foreground font-lato mb-8">
                We'd love to hear from you. Reach out for orders, franchise opportunities, 
                or just to share your Babulal experience.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="p-6 hover:shadow-gold transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-gold/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-primary">Flagship Store</h4>
                    <p className="text-muted-foreground font-lato">123 Heritage Street, Royal Plaza, Mumbai - 400001</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-gold transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-gold/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-primary">Order Hotline</h4>
                    <p className="text-muted-foreground font-lato">+91 22 2345 6789</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-gold transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-gold/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-primary">Email Us</h4>
                    <p className="text-muted-foreground font-lato">hello@babulaliceCreams.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-gold transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-gold/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-primary">Opening Hours</h4>
                    <p className="text-muted-foreground font-lato">Daily: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Order Online Section */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-playfair font-bold text-primary-foreground mb-4">
                Order Online
              </h4>
              <p className="text-primary-foreground/90 font-lato mb-6">
                Get your favorite Babulal flavors delivered to your doorstep
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="font-lato">
                  Order on Swiggy
                </Button>
                <Button variant="secondary" size="lg" className="font-lato">
                  Order on Zomato
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 shadow-royal">
              <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-lato font-medium text-primary mb-2 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="Enter your first name"
                      className="font-lato"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-lato font-medium text-primary mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Enter your last name"
                      className="font-lato"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-lato font-medium text-primary mb-2 block">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="Enter your email"
                    className="font-lato"
                  />
                </div>

                <div>
                  <label className="text-sm font-lato font-medium text-primary mb-2 block">
                    Phone Number
                  </label>
                  <Input 
                    type="tel"
                    placeholder="Enter your phone number"
                    className="font-lato"
                  />
                </div>

                <div>
                  <label className="text-sm font-lato font-medium text-primary mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your inquiry..."
                    rows={5}
                    className="font-lato"
                  />
                </div>

                <Button variant="royal" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Franchise CTA */}
        <div className="mt-16 text-center bg-gradient-gold rounded-3xl p-12">
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
            Start Your Own Babulal Store
          </h3>
          <p className="text-lg text-primary/80 font-lato max-w-2xl mx-auto mb-8">
            Join the royal family and bring the taste of tradition to your city. 
            Franchise opportunities available across India.
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-background">
            Franchise Inquiry
          </Button>
        </div>
      </div>
    </section>
  );
};