import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import strawberryImage from '@/assets/strawberry-royale.jpg';
import kesarPistaImage from '@/assets/kesar-pista.jpg';
import chocolateImage from '@/assets/chocolate-fudge.jpg';
import mintImage from '@/assets/mint-bliss.jpg';

const flavors = [
  {
    id: 1,
    name: "Strawberry Royale",
    price: "₹150",
    description: "Fresh strawberries churned into creamy delight with real strawberry pieces",
    image: strawberryImage,
    background: "bg-flavor-strawberry",
    color: "text-primary"
  },
  {
    id: 2,
    name: "Kesar Pista Supreme",
    price: "₹200",
    description: "Infused with saffron from Kashmir and roasted pistachios for royal indulgence",
    image: kesarPistaImage,
    background: "bg-flavor-vanilla",
    color: "text-primary"
  },
  {
    id: 3,
    name: "Belgian Chocolate Fudge",
    price: "₹180",
    description: "Pure cocoa indulgence, slow-churned for richness with chocolate fudge swirls",
    image: chocolateImage,
    background: "bg-flavor-chocolate",
    color: "text-background"
  },
  {
    id: 4,
    name: "Mint Bliss",
    price: "₹160",
    description: "Fresh mint leaves with crushed chocolate chips – a cooling classic",
    image: mintImage,
    background: "bg-flavor-mint",
    color: "text-primary"
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % flavors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);


  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentFlavor = flavors[currentSlide];

  return (
    <div className={`relative min-h-screen transition-all duration-1000 ${currentFlavor.background} overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Content Side */}
          <div className="space-y-8 lg:order-1 order-2">
            <div className="space-y-2">
              <div className="overflow-hidden">
                <p 
                  key={`subtitle-${currentSlide}`}
                  className={`text-sm uppercase tracking-wider font-lato font-medium ${currentFlavor.color} opacity-80 animate-slide-in-left`}
                >
                  Premium Collection
                </p>
              </div>
              
              <div className="overflow-hidden">
                <h1 
                  key={`title-${currentSlide}`}
                  className={`text-4xl md:text-6xl lg:text-7xl font-playfair font-bold ${currentFlavor.color} animate-slide-in-left`}
                  style={{ animationDelay: '0.1s' }}
                >
                  {currentFlavor.name}
                </h1>
              </div>
            </div>

            <div className="overflow-hidden">
              <p 
                key={`desc-${currentSlide}`}
                className={`text-lg md:text-xl ${currentFlavor.color} opacity-90 font-lato max-w-md animate-slide-in-left`}
                style={{ animationDelay: '0.2s' }}
              >
                {currentFlavor.description}
              </p>
            </div>

            <div className="overflow-hidden">
              <div 
                key={`price-${currentSlide}`}
                className="animate-slide-in-left"
                style={{ animationDelay: '0.3s' }}
              >
                <span className={`text-3xl md:text-4xl font-playfair font-bold ${currentFlavor.color}`}>
                  {currentFlavor.price}
                </span>
                <span className={`text-lg ${currentFlavor.color} opacity-70 ml-2 font-lato`}>
                  per scoop
                </span>
              </div>
            </div>

            <div className="overflow-hidden">
              <div 
                key={`buttons-${currentSlide}`}
                className="flex flex-col sm:flex-row gap-4 animate-slide-in-left"
                style={{ animationDelay: '0.4s' }}
              >
                <Button variant="hero" size="lg" className="group">
                  Order Now
                  <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className={`${currentFlavor.color === 'text-background' ? 'border-background text-background hover:bg-background hover:text-primary' : ''}`}
                >
                  View Menu
                </Button>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:order-2 order-1">
            <div className="relative">
              <div 
                key={`image-${currentSlide}`}
                className="animate-slide-in-right"
              >
                <img
                  src={currentFlavor.image}
                  alt={currentFlavor.name}
                  className="w-full h-auto rounded-2xl shadow-royal hover:shadow-glow-gold transition-all duration-500 hover:scale-105"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gold rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

   
     

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {flavors.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gold scale-125' 
                  : `${currentFlavor.color === 'text-background' ? 'bg-background/50' : 'bg-primary/50'} hover:scale-110`
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};