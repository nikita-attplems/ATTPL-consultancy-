import { ServiceHeroData } from "@/types/ServiceHeroData";
import { ServiceOverviewData } from "@/types/ServiceOverviewData";
import { ServiceOfferingsData } from "@/types/ServiceOfferingsData";
import { ServiceProcessData } from "@/types/ServiceProcessData";

const certificationServices = {
  hero: {
    badge: "ATTPL Marketplace",

    title: "Certification Services",

    description: [
      "ATTPL Certification Services connects businesses, professionals, manufacturers, and organizations with trusted certification experts to achieve industry-recognized standards and regulatory compliance.",

      "From ISO certifications and quality management systems to product, environmental, and industry-specific certifications, our marketplace offers complete guidance from documentation to successful certification.",

      "Strengthen your credibility, improve compliance, and enhance customer trust with professional certification support through the ATTPL Marketplace."
    ],

    highlights: [
      "ISO Certification",
      "Quality Management",
      "Environmental Certification",
      "Information Security",
      "Product Certification",
      "Food Safety Certification",
      "CE Certification",
      "Compliance Audits"
    ],

    primaryButton: {
      text: "Apply for Certification",
      href: "/service-form",
    },

    secondaryButton: {
      text: "Explore Marketplace",
      href: "/marketplace",
    },
  } satisfies ServiceHeroData,

  overview: {
    sectionBadge: "About Certification Services",

    sectionTitle: "Achieve Global Standards with Professional Certification",

    heading:
      "End-to-end certification solutions that help businesses demonstrate quality, compliance, safety, and operational excellence.",

    paragraphs: [
      "ATTPL Certification Services provides businesses with access to experienced certification consultants who simplify the certification process through expert guidance, documentation support, implementation, and audit preparation.",

      "Whether your organization is pursuing ISO certification, industry-specific compliance, or product certification, our marketplace connects you with professionals who ensure a smooth and successful certification journey.",

      "From gap analysis to certification audits, we help organizations improve processes, meet regulatory requirements, and build stronger customer confidence."
    ],

    points: [
      "ISO Standards",
      "Compliance Management",
      "Documentation Support",
      "Audit Preparation",
      "Quality Improvement",
      "Risk Management",
      "Process Standardization",
      "Global Recognition"
    ],
  } satisfies ServiceOverviewData,

  offerings: {
    badge: "Our Services",

    title: "Certification Solutions",

    offerings: [
      {
        title: "ISO Certification",
        description:
          "Professional assistance for ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 22000, and other international standards.",
        image: "/marketplace/iso.jpg",
      },

      {
        title: "Product Certification",
        description:
          "Obtain product certifications that meet regulatory requirements and improve customer confidence in your products.",
        image: "/marketplace/product-certification.jpg",
      },

      {
        title: "Compliance & Audit Support",
        description:
          "Prepare documentation, conduct internal audits, and ensure readiness for external certification assessments.",
        image: "/marketplace/audit.jpg",
      },

      {
        title: "Training & Implementation",
        description:
          "Implement management systems, train teams, and establish standardized processes required for certification.",
        image: "/marketplace/training.jpg",
      },
    ],
  } satisfies ServiceOfferingsData,

  process: {
    badge: "Our Process",

    title: "How Our Certification Process Works",

    description:
      "A structured certification approach that helps organizations achieve compliance, improve operational standards, and successfully obtain recognized certifications.",

    steps: [
      {
        title: "Initial Consultation",
        description:
          "Understand your certification objectives, business requirements, and applicable standards.",
        icon: "consultation",
      },

      {
        title: "Gap Analysis",
        description:
          "Assess existing processes, identify compliance gaps, and recommend improvements.",
        icon: "analysis",
      },

      {
        title: "Documentation & Implementation",
        description:
          "Prepare required documentation and implement management systems aligned with certification standards.",
        icon: "strategy",
      },

      {
        title: "Audit & Certification",
        description:
          "Support internal audits, coordinate certification audits, and assist until certification is successfully achieved.",
        icon: "implementation",
      },

      {
        title: "Ongoing Compliance",
        description:
          "Provide continuous support for surveillance audits, renewals, and process improvements.",
        icon: "support",
      },
    ],
  } satisfies ServiceProcessData,
};

export default certificationServices;