import { HeroCarousel } from '@/components/HeroCarousel';
import { StorySection } from '@/components/StorySection';
import { FlavoursSection } from '@/components/FlavoursSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <StorySection />
      <FlavoursSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
