import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, Award } from 'lucide-react';
import strawberryImage from '@/assets/strawberry-royale.jpg';
import kesarPistaImage from '@/assets/kesar-pista.jpg';
import chocolateImage from '@/assets/chocolate-fudge.jpg';
import mintImage from '@/assets/mint-bliss.jpg';

const menuItems = [
  {
    id: 1,
    name: "Kesar Pista Supreme",
    description: "Our signature blend of pure saffron from Kashmir with roasted pistachios, creating a royal taste that's been loved for generations.",
    price: "₹450",
    image: kesarPistaImage,
    category: "Signature",
    tags: ["Premium", "Bestseller"],
    rating: 4.9,
    isSignature: true
  },
  {
    id: 2,
    name: "Strawberry Royale",
    description: "Fresh strawberries churned into creamy perfection with hints of vanilla and rose petals for an elegant finish.",
    price: "₹380",
    image: strawberryImage,
    category: "Fruit Special",
    tags: ["Fresh Fruit", "Popular"],
    rating: 4.8,
    isSignature: false
  },
  {
    id: 3,
    name: "Belgian Chocolate Fudge",
    description: "Rich Belgian cocoa slow-churned with dark chocolate chips and a hint of espresso for the ultimate indulgence.",
    price: "₹420",
    image: chocolateImage,
    category: "Premium",
    tags: ["Dark Chocolate", "Rich"],
    rating: 4.9,
    isSignature: false
  },
  {
    id: 4,
    name: "Mint Bliss",
    description: "Fresh mint leaves with chocolate chips, creating a refreshing and cooling classic that's perfect for any season.",
    price: "₹340",
    image: mintImage,
    category: "Classic",
    tags: ["Refreshing", "Classic"],
    rating: 4.7,
    isSignature: false
  },
  {
    id: 5,
    name: "Malai Kulfi Traditional",
    description: "Traditional kulfi made with rich malai, cardamom, and almonds, served in authentic earthen pots.",
    price: "₹320",
    image: kesarPistaImage,
    category: "Traditional",
    tags: ["Traditional", "Malai"],
    rating: 4.8,
    isSignature: false
  },
  {
    id: 6,
    name: "Rose Petal Fantasy",
    description: "Delicate rose essence with crushed rose petals and a touch of cardamom, a floral symphony of flavors.",
    price: "₹360",
    image: strawberryImage,
    category: "Specialty",
    tags: ["Floral", "Unique"],
    rating: 4.6,
    isSignature: false
  },
  {
    id: 7,
    name: "Mango Mastani",
    description: "Seasonal Alphonso mangoes blended with rich vanilla ice cream, topped with fresh mango chunks.",
    price: "₹390",
    image: kesarPistaImage,
    category: "Seasonal",
    tags: ["Seasonal", "Mango"],
    rating: 4.9,
    isSignature: false
  },
  {
    id: 8,
    name: "Coconut Paradise",
    description: "Fresh coconut with tender coconut water, creating a tropical escape in every scoop.",
    price: "₹310",
    image: mintImage,
    category: "Tropical",
    tags: ["Coconut", "Light"],
    rating: 4.5,
    isSignature: false
  }
];

const categories = ["All", "Signature", "Premium", "Fruit Special", "Traditional", "Seasonal"];

const Menu = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-cream">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-royal text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-glow/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 mr-3 text-gold" />
            <Badge variant="secondary" className="bg-gold text-primary font-playfair">
              Since 1968
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Royal Menu
          </h1>
          <p className="text-xl md:text-2xl font-lato max-w-3xl mx-auto leading-relaxed">
            Discover our handcrafted collection of premium ice creams, each recipe perfected over generations 
            to deliver the finest taste experience.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "royal" : "outline"}
                size="sm"
                className="font-lato"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {menuItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-gold transition-all duration-300 overflow-hidden bg-card border-gold/20">
                
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {item.isSignature && (
                      <Badge variant="secondary" className="bg-gold text-primary font-lato text-xs">
                        <Award size={12} className="mr-1" />
                        Signature
                      </Badge>
                    )}
                    <Badge variant="outline" className="bg-background/90 text-primary font-lato text-xs">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Heart Icon */}
                  <button className="absolute top-3 right-3 p-2 bg-background/90 rounded-full hover:bg-background transition-colors duration-200">
                    <Heart size={16} className="text-muted-foreground hover:text-primary hover:fill-current transition-colors duration-200" />
                  </button>

                  {/* Price */}
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-gold text-primary px-3 py-1 rounded-full font-playfair font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <Star size={16} className="text-gold fill-current" />
                    <span className="text-sm font-lato font-medium text-foreground">{item.rating}</span>
                    <span className="text-xs text-muted-foreground font-lato">(125+ reviews)</span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-playfair font-bold text-primary mb-2 line-clamp-1">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground font-lato leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-lato border-gold/30 text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <Button variant="royal" size="sm" className="w-full font-lato">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-card rounded-2xl p-8 shadow-cream border border-gold/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                Can't Decide? Try Our Tasting Pack!
              </h3>
              <p className="text-muted-foreground font-lato mb-6">
                Get 4 mini scoops of our signature flavors delivered fresh to your doorstep.
              </p>
              <Button variant="royal" size="lg" className="font-lato">
                Order Tasting Pack - ₹299
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;