import { ServiceHeroData } from "@/types/ServiceHeroData";
import { ServiceOverviewData } from "@/types/ServiceOverviewData";
import { ServiceOfferingsData } from "@/types/ServiceOfferingsData";
import { ServiceProcessData } from "@/types/ServiceProcessData";

const registrationServices = {
  hero: {
    badge: "ATTPL Marketplace",

    title: "Registration Services",

    description: [
      "ATTPL Registration Services simplifies business and legal registrations by connecting individuals, startups, and enterprises with trusted registration experts across India.",

      "From company incorporation and MSME registration to GST, trademark, and other statutory registrations, our marketplace provides end-to-end professional assistance.",

      "Complete your registrations quickly, accurately, and compliantly with the guidance of experienced consultants available through the ATTPL Marketplace."
    ],

    highlights: [
      "Company Registration",
      "LLP Registration",
      "GST Registration",
      "MSME Registration",
      "Trademark Registration",
      "Startup India Registration",
      "Partnership Registration",
      "NGO Registration"
    ],

    primaryButton: {
      text: "Start Registration",
      href: "/service-form",
    },

    secondaryButton: {
      text: "Explore Marketplace",
      href: "/marketplace",
    },
  } satisfies ServiceHeroData,

  overview: {
    sectionBadge: "About Registration Services",

    sectionTitle: "Making Business Registration Simple & Compliant",

    heading:
      "Professional registration solutions that help businesses and organizations complete legal registrations efficiently and without unnecessary delays.",

    paragraphs: [
      "ATTPL Registration Services provides access to experienced professionals who manage documentation, filing, compliance, and approvals required for various business and legal registrations.",

      "Whether you're starting a new business, registering intellectual property, or obtaining mandatory government registrations, our experts guide you throughout the complete process.",

      "Our marketplace ensures accurate documentation, regulatory compliance, and timely execution, helping businesses focus on growth instead of paperwork."
    ],

    points: [
      "Business Incorporation",
      "Government Registrations",
      "Regulatory Compliance",
      "Documentation Support",
      "Trademark Protection",
      "MSME Registration",
      "Startup Recognition",
      "Professional Assistance"
    ],
  } satisfies ServiceOverviewData,

  offerings: {
    badge: "Our Services",

    title: "Registration Solutions",

    offerings: [
      {
        title: "Company & LLP Registration",
        description:
          "Register Private Limited Companies, OPCs, LLPs, and other business entities with complete professional assistance.",
        image: "/marketplace/companyreg.jpg",
      },

      {
        title: "GST & MSME Registration",
        description:
          "Obtain GST registration, UDYAM/MSME registration, and other statutory business registrations quickly and accurately.",
        image: "/marketplace/gst.jpg",
      },

      {
        title: "Trademark Registration",
        description:
          "Protect your brand identity through professional trademark search, filing, registration, and monitoring services.",
        image: "/marketplace/trademark.jpg",
      },

      {
        title: "Startup & NGO Registration",
        description:
          "Register startups, societies, trusts, Section 8 companies, and NGOs with expert documentation support.",
        image: "/marketplace/startup.jpg",
      },
    ],
  } satisfies ServiceOfferingsData,

  process: {
    badge: "Our Process",

    title: "How Our Registration Process Works",

    description:
      "A streamlined registration process designed to simplify documentation, ensure legal compliance, and complete registrations efficiently.",

    steps: [
      {
        title: "Requirement Discussion",
        description:
          "Understand your registration requirements and recommend the most suitable registration type.",
        icon: "consultation",
      },

      {
        title: "Document Collection",
        description:
          "Collect and verify all required documents for accurate registration filing.",
        icon: "analysis",
      },

      {
        title: "Application Filing",
        description:
          "Prepare and submit registration applications with the appropriate government authorities.",
        icon: "strategy",
      },

      {
        title: "Approval & Processing",
        description:
          "Track application status, resolve queries, and coordinate until approvals are received.",
        icon: "implementation",
      },

      {
        title: "Certificate Delivery",
        description:
          "Receive registration certificates along with post-registration guidance and compliance support.",
        icon: "support",
      },
    ],
  } satisfies ServiceProcessData,
};

export default registrationServices;