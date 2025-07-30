import { Button } from '@/components/ui/button';
import heritageImage from '/lovable-uploads/1c9dd556-83b8-4bcd-ae7f-7ccc8a57619c.png';

const timelineEvents = [
  {
    year: "1968",
    title: "Founded",
    description: "Babulal started with a simple dream and handcart"
  },
  {
    year: "1980",
    title: "First Signature Flavour",
    description: "Kesar Pista Supreme became our royal signature"
  },
  {
    year: "2005",
    title: "Modern Factory Launch",
    description: "Expanded with state-of-the-art facilities"
  },
  {
    year: "2024",
    title: "Nationwide Shipping",
    description: "Royal taste delivered across India"
  }
];

export const StorySection = () => {
  return (
    <section className="py-20 bg-gradient-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Our Royal Legacy
          </h2>
          <p className="text-xl text-muted-foreground font-lato max-w-2xl mx-auto">
            From a humble beginning to India's most beloved premium ice cream brand
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Heritage Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-royal">
              <img
                src={heritageImage}
                alt="Babulal Ice Creams Heritage - 1968"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Vintage Badge */}
            <div className="absolute -top-4 -right-4 bg-gold text-primary px-6 py-2 rounded-full transform rotate-12 shadow-gold">
              <span className="font-playfair font-bold text-sm">Since 1968</span>
            </div>
          </div>

          {/* Story Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-playfair font-bold text-primary mb-6">
              The Babulal Story
            </h3>
            
            <div className="space-y-4 text-lg text-foreground font-lato leading-relaxed">
              <p>
                What started as <span className="font-medium text-primary">Babulal's dream</span> in 1968 
                with a simple handcart has blossomed into India's most cherished premium ice cream legacy.
              </p>
              
              <p>
                Three generations of the family have dedicated themselves to perfecting the art of 
                ice cream making, using only the <span className="font-medium text-primary">finest ingredients</span> 
                sourced from across the country.
              </p>
              
              <p>
                From the original Kesar Pista Supreme that made us famous to our modern innovations, 
                every scoop carries the essence of <span className="font-medium text-primary">tradition, 
                taste, and trust</span> that defines the Babulal experience.
              </p>
            </div>

            <Button variant="royal" size="lg" className="mt-8">
              Discover Our Flavours
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-playfair font-bold text-primary text-center mb-12">
            Milestones of Excellence
          </h3>
          
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:justify-center group`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-background shadow-gold z-10 hidden md:block group-hover:scale-150 transition-transform duration-300"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-cream hover:shadow-gold transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl font-playfair font-bold text-gold">
                        {event.year}
                      </span>
                      <div className="h-px bg-gold flex-1"></div>
                    </div>
                    
                    <h4 className="text-xl font-playfair font-bold text-primary mb-2">
                      {event.title}
                    </h4>
                    
                    <p className="text-muted-foreground font-lato">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};