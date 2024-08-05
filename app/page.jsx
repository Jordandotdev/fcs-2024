import Image from "next/image";
import HeroSection from "./sections/Hero";
import SocietyFeatures from "./sections/SocietyFeatures";
import EventSlider from "./sections/ProjectSlider";
import AboutUsSection from "./sections/AboutSection";
import JoinFCSSection from "./sections/JoinFCSSection";
import EventsAndWorkshopsSection from "./sections/PreviousEvents";
import TechStackMasterySection from "./sections/TechStackSection";
import KnowledgeHubSection from "./sections/KnowledgeHub";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="bg-gradient-to-br from-gray-200 to-white">
        <AboutUsSection />

        <EventSlider />
        {/* <TechStackMasterySection /> */}
        <KnowledgeHubSection />
        <EventsAndWorkshopsSection />
        <JoinFCSSection />
      </div>
      {/* <SocietyFeatures /> */}
    </div>
  );
}
