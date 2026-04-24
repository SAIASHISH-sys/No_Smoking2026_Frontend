import CursorGlow from '../components/CursorGlow';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import VitalNecessity from '../components/VitalNecessity';
import ShaastraIntegration from '../components/ShaastraIntegration';
import Timeline from '../components/Timeline';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#FFFBF7] text-[#432818] selection:bg-orange-200">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <VitalNecessity />
      <ShaastraIntegration />
      <Timeline />
      <ContactSection />
      <Footer />
    </div>
  );
}
