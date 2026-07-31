import React from "react";
import Hero from "@/components/marketplace/Hero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MarketplaceCategories from "@/components/marketplace/MarketplaceCategories";
import HowItWorks from "@/components/marketplace/HowItWorks";
import IndustryNetworkSection from "@/components/marketplace/IndustryNetworkSection";
import LegalComplianceHub from "@/components/marketplace/LegalComplianceHub";
import StartupSMEPlatform from "@/components/marketplace/StartupSMEPlatform";
import WhyChooseMarketplace from "@/components/marketplace/WhyChooseMarketplace";
import CTA from "@/components/common/CTA";

const page = () => {
  return (
    <>
      <Hero />
      <MarketplaceCategories />
      <HowItWorks />
            <IndustryNetworkSection />
      <LegalComplianceHub />
      <StartupSMEPlatform />

      <WhyChooseMarketplace />
      <CTA />
    </>
  );
};

export default page;
