import { ServiceHeroData } from "@/types/ServiceHeroData";
import { ServiceOverviewData } from "@/types/ServiceOverviewData";
import { ServiceOfferingsData } from "@/types/ServiceOfferingsData";
import { ServiceProcessData } from "@/types/ServiceProcessData";

const legalAdvisory = {
  hero: {
    badge: "ATTPL Marketplace",

    title: "Legal Advisory",

    description: [
      "ATTPL Legal Advisory connects individuals, startups, businesses, and enterprises with experienced legal professionals to address legal challenges, ensure compliance, and safeguard business interests.",

      "From corporate legal advisory and contract management to regulatory compliance and dispute resolution, our marketplace provides access to trusted legal experts across multiple practice areas.",

      "Receive reliable legal guidance tailored to your personal or business requirements through the ATTPL Marketplace ecosystem."
    ],

    highlights: [
      "Corporate Law",
      "Contract Drafting",
      "Legal Compliance",
      "Business Agreements",
      "Intellectual Property",
      "Labour & Employment Law",
      "Dispute Resolution",
      "Legal Documentation"
    ],

    primaryButton: {
      text: "Book Legal Consultation",
      href: "/service-form",
    },

    secondaryButton: {
      text: "Explore Marketplace",
      href: "/marketplace",
    },
  } satisfies ServiceHeroData,

  overview: {
    sectionBadge: "About Legal Advisory",

    sectionTitle: "Expert Legal Solutions for Individuals & Businesses",

    heading:
      "Professional legal advisory services that help organizations and individuals navigate legal complexities with confidence and compliance.",

    paragraphs: [
      "ATTPL Legal Advisory provides access to experienced legal professionals who assist with business law, regulatory compliance, contracts, documentation, intellectual property, and dispute resolution.",

      "Whether you're establishing a business, negotiating agreements, protecting intellectual property, or seeking legal compliance support, our marketplace connects you with qualified legal experts.",

      "Our legal advisors focus on practical, compliant, and business-oriented solutions that minimize legal risks and support informed decision-making."
    ],

    points: [
      "Corporate Legal Advisory",
      "Contract Management",
      "Regulatory Compliance",
      "Legal Documentation",
      "Intellectual Property",
      "Employment Law",
      "Dispute Resolution",
      "Business Risk Management"
    ],
  } satisfies ServiceOverviewData,

  offerings: {
    badge: "Our Services",

    title: "Legal Advisory Solutions",

    offerings: [
      {
        title: "Corporate & Business Law",
        description:
          "Professional legal guidance for company formation, governance, compliance, mergers, acquisitions, and business operations.",
        image: "/marketplace/corporate-law.jpg",
      },

      {
        title: "Contract Drafting & Review",
        description:
          "Prepare, review, and negotiate business agreements, commercial contracts, vendor agreements, and legal documents.",
        image: "/marketplace/contracts.jpg",
      },

      {
        title: "Compliance & Regulatory Advisory",
        description:
          "Ensure compliance with applicable laws, industry regulations, licensing requirements, and statutory obligations.",
        image: "/marketplace/legal-compliance.jpg",
      },

      {
        title: "Dispute Resolution & Legal Support",
        description:
          "Receive expert guidance for legal disputes, arbitration, mediation, notices, and litigation support.",
        image: "/marketplace/legal-support.jpg",
      },
    ],
  } satisfies ServiceOfferingsData,

  process: {
    badge: "Our Process",

    title: "How Our Legal Advisory Process Works",

    description:
      "A structured legal consulting process designed to understand your legal concerns, provide practical advice, and deliver compliant legal solutions.",

    steps: [
      {
        title: "Initial Consultation",
        description:
          "Discuss your legal requirements, business objectives, or specific legal concerns with our experts.",
        icon: "consultation",
      },

      {
        title: "Legal Assessment",
        description:
          "Analyze documents, identify legal risks, review applicable laws, and evaluate available legal options.",
        icon: "analysis",
      },

      {
        title: "Legal Strategy",
        description:
          "Develop practical legal solutions, prepare documentation, and recommend the most appropriate course of action.",
        icon: "strategy",
      },

      {
        title: "Implementation & Representation",
        description:
          "Assist with documentation, negotiations, compliance, legal filings, and coordination with relevant authorities when required.",
        icon: "implementation",
      },

      {
        title: "Ongoing Legal Support",
        description:
          "Provide continuous legal guidance, compliance monitoring, contract updates, and advisory support as your needs evolve.",
        icon: "support",
      },
    ],
  } satisfies ServiceProcessData,
};

export default legalAdvisory;