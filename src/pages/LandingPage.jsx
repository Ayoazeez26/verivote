import HeroSection from "../features/landing/HeroSection";
import Navbar from "../ui/Navbar";
function LandingPage() {
  return (
    <div className="relative flex justify-between items-center">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default LandingPage;
