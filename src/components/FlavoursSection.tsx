import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import strawberryImage from '@/assets/strawberry-royale.jpg';
import kesarPistaImage from '@/assets/kesar-pista.jpg';
import chocolateImage from '@/assets/chocolate-fudge.jpg';
import mintImage from '@/assets/mint-bliss.jpg';

const signature_flavours = [
  {
    id: 1,
    name: "Strawberry Royale",
    description: "Fresh strawberries from hill stations, churned with premium cream",
    price: "₹150",
    image: strawberryImage,
    tags: ["Premium", "Fruit-Based"],
    specialty: "Made with hand-picked strawberries"
  },
  {
    id: 2,
    name: "Kesar Pista Supreme",
    description: "Saffron from Kashmir meets roasted pistachios from Akola",
    price: "₹200",
    image: kesarPistaImage,
    tags: ["Signature", "Premium"],
    specialty: "Our most awarded flavour since 1980"
  },
  {
    id: 3,
    name: "Belgian Chocolate Fudge",
    description: "Pure Belgian cocoa with rich fudge swirls",
    price: "₹180",
    image: chocolateImage,
    tags: ["Premium", "Chocolate"],
    specialty: "Slow-churned for ultimate richness"
  },
  {
    id: 4,
    name: "Mint Bliss",
    description: "Fresh mint leaves with crushed dark chocolate chips",
    price: "₹160",
    image: mintImage,
    tags: ["Classic", "Refreshing"],
    specialty: "Perfect summer refreshment"
  }
];

export const FlavoursSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Signature Flavours
          </h2>
          <p className="text-xl text-muted-foreground font-lato max-w-2xl mx-auto mb-8">
            Each flavour tells a story of passion, tradition, and the finest ingredients sourced from across India
          </p>
          
          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Premium", "Fruit-Based", "Signature", "Seasonal"].map((tag) => (
              <Badge 
                key={tag} 
                variant={tag === "All" ? "default" : "outline"}
                className="px-4 py-2 text-sm font-lato cursor-pointer hover:bg-gold hover:text-primary transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Flavours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {signature_flavours.map((flavour, index) => (
            <div 
              key={flavour.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-cream hover:shadow-royal transition-all duration-500 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={flavour.image}
                  alt={flavour.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gold text-primary px-4 py-2 rounded-full font-playfair font-bold text-lg shadow-gold">
                  {flavour.price}
                </div>
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {flavour.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-white/90 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-2 group-hover:text-gold transition-colors">
                  {flavour.name}
                </h3>
                
                <p className="text-muted-foreground font-lato mb-4 leading-relaxed">
                  {flavour.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gold font-lato italic">
                    ✨ {flavour.specialty}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-primary"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Craftsmanship Section */}
        <div className="bg-gradient-cream rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
            Crafted with Care. Served with Pride.
          </h3>
          
          <p className="text-lg text-muted-foreground font-lato max-w-3xl mx-auto mb-8 leading-relaxed">
            Every scoop is a testament to our commitment to quality. We source the finest ingredients 
            from across India - Kashmir saffron, Akola pistachios, hill station strawberries, 
            and Belgian chocolate - to create ice creams that are truly extraordinary.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🥛</div>
              <h4 className="font-playfair font-bold text-primary mb-2">Fresh Dairy</h4>
              <p className="text-sm text-muted-foreground font-lato">Farm-fresh milk delivered daily</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🌿</div>
              <h4 className="font-playfair font-bold text-primary mb-2">Natural Ingredients</h4>
              <p className="text-sm text-muted-foreground font-lato">No artificial flavors or preservatives</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">👨‍🍳</div>
              <h4 className="font-playfair font-bold text-primary mb-2">Master Craftsmen</h4>
              <p className="text-sm text-muted-foreground font-lato">Three generations of expertise</p>
            </div>
          </div>

          <Button variant="royal" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};