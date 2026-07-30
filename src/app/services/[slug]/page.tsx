import Hero from "@/components/services/Hero";
import AboutService from "@/components/services/AboutService";
import ServiceOfferings from "@/components/services/ServiceOfferings";
import ServiceProcess from "@/components/services/ServiceProcess";
import FAQ from "@/components/common/FAQ";
import CTA from "@/components/common/CTA";

import { serviceData } from "@/data/service";
import SuccessStories from "@/components/services/SuccessStories";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  console.log("SLUG:", slug)

  const loadService = serviceData[slug];

  console.log("Loaded service:", loadService)

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