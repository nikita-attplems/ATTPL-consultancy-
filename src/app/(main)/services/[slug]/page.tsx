import Hero from "@/components/services/Hero";
import AboutService from "@/components/services/AboutService";
import ServiceOfferings from "@/components/services/ServiceOfferings";
import ServiceProcess from "@/components/services/ServiceProcess";
import FAQ from "@/components/common/FAQ";
import CTA from "@/components/common/CTA";

import { serviceData, type ServiceSlug } from "@/data/service";
import SuccessStories from "@/components/services/SuccessStories";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: ServiceSlug }>;
}) {
  const { slug } = await params;

  const loadService = serviceData[slug];

  if (!loadService) {
    return null;
  }

  const service = await loadService();

  return (
    <>
      <Hero data={service.hero} />

      <ServiceOfferings 
        data={service.offerings} 
      />

      <AboutService 
        data={service.overview} 
      />

      <ServiceProcess 
        data={service.process} 
      />

      <SuccessStories />

      <FAQ />
      <CTA />
    </>
  );
}