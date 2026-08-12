import React from "react";
import About from "@/components/Home/About";
import VisionMission from "@/components/Home/VisionMission";
import WhyChooseMarketplace from "@/components/marketplace/WhyChooseMarketplace";
import CTA from "@/components/common/CTA";
import WhyTrustUs from "@/components/Home/WhyTrustUs";
import Founder from "@/components/Home/Founder";

const page = () => {
  return (
    <>
      <About />
      <VisionMission/>
      
      <WhyTrustUs/>
      <Founder/>
      <WhyChooseMarketplace/>
      <CTA/>
    </>
  );
};

export default page;
