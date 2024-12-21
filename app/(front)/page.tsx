import AdditionalFeatures from "@/components/frontend/additional-features";
import { DashboardPreview } from "@/components/frontend/dashboard-preview";
import FeaturesGrid from "@/components/frontend/features-grid";
import HeroSection from "@/components/frontend/hero-section";
import LogoCloud from "@/components/frontend/logo-cloud";
import Pricing from "@/components/frontend/pricing";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <LogoCloud />
      <DashboardPreview />
      <FeaturesGrid />
      <AdditionalFeatures />
      <Pricing />
    </div>
  );
};

export default Home;