import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import WhyNowSection from "./components/WhyNowSection";
import StatisticsSection from "./components/StatisticsSection";
import WhoItsForSection from "./components/WhoItsForSection";
import ForumSection from "./components/ForumSection";
import HowDifferentSection from "./components/HowDifferentSection";
import InvitedSpeakers from "./components/InvitedSpeakers";
import SocialProofSection from "./components/SocialProofSection";
import MembershipSection from "./components/MembershipSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhyNowSection />
      <StatisticsSection />
      <WhoItsForSection />
      <ForumSection />
      <HowDifferentSection />
      <InvitedSpeakers />
      <SocialProofSection />
      <MembershipSection />
      {/* <CallToActionSection /> */}
      <Footer />
    </div>
  );
}

export default App;
