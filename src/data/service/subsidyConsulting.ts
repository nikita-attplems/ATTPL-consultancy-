import { ServiceHeroData } from "@/types/ServiceHeroData";
import { ServiceOverviewData } from "@/types/ServiceOverviewData";
import { ServiceOfferingsData } from "@/types/ServiceOfferingsData";
import { ServiceProcessData } from "@/types/ServiceProcessData";

const subsidyConsulting = {
  hero: {
    badge: "ATTPL Marketplace",

    title: "Subsidy Consulting",

    description: [
      "ATTPL Subsidy Consulting helps businesses, startups, MSMEs, manufacturers, farmers, and entrepreneurs identify and secure government subsidies, incentives, and financial assistance through expert guidance.",

      "From scheme identification and eligibility assessment to documentation, application filing, and follow-up, our consultants provide end-to-end support throughout the subsidy approval process.",

      "Access trusted subsidy experts through the ATTPL Marketplace and maximize the benefits of central and state government schemes for your business growth."
    ],

    highlights: [
      "Government Subsidies",
      "MSME Incentives",
      "Startup Schemes",
      "Manufacturing Subsidies",
      "Agriculture Subsidies",
      "Capital Subsidies",
      "Documentation Support",
      "Application Management"
    ],

    primaryButton: {
      text: "Apply for Subsidy",
      href: "/service-form",
    },

    secondaryButton: {
      text: "Explore Marketplace",
      href: "/marketplace",
    },
  } satisfies ServiceHeroData,

  overview: {
    sectionBadge: "About Subsidy Consulting",

    sectionTitle: "Helping Businesses Unlock Government Benefits",

    heading:
      "Professional subsidy consulting services that simplify government schemes, improve application success, and maximize financial incentives.",

    paragraphs: [
      "ATTPL Subsidy Consulting connects businesses with experienced consultants who specialize in identifying suitable government subsidy programs and assisting throughout the complete application process.",

      "Whether you're establishing a new manufacturing unit, expanding your business, investing in technology, or launching a startup, our experts help you leverage available government financial assistance.",

      "From eligibility verification and documentation to application submission and follow-up with authorities, we ensure a smooth, compliant, and efficient subsidy process."
    ],

    points: [
      "Scheme Identification",
      "Eligibility Assessment",
      "Application Filing",
      "Documentation Support",
      "Government Liaison",
      "Compliance Guidance",
      "Incentive Optimization",
      "End-to-End Assistance"
    ],
  } satisfies ServiceOverviewData,

  offerings: {
    badge: "Our Services",

    title: "Subsidy Consulting Solutions",

    offerings: [
      {
        title: "Government Scheme Identification",
        description:
          "Identify central and state government subsidy schemes, incentives, and grants best suited to your business or project.",
        image: "/marketplace/subsidy-schemes.jpg",
      },

      {
        title: "Application & Documentation",
        description:
          "Prepare complete documentation, verify eligibility, and submit accurate subsidy applications with professional support.",
        image: "/marketplace/documentation.jpg",
      },

      {
        title: "MSME & Startup Subsidies",
        description:
          "Receive expert assistance for MSME, Startup India, manufacturing, export promotion, and sector-specific subsidy programs.",
        image: "/marketplace/startup.jpg",
      },

      {
        title: "Compliance & Claim Support",
        description:
          "Track application status, respond to government queries, and ensure compliance until subsidy approval and claim processing.",
        image: "/marketplace/compliance.jpg",
      },
    ],
  } satisfies ServiceOfferingsData,

  process: {
    badge: "Our Process",

    title: "How Our Subsidy Consulting Process Works",

    description:
      "A structured consulting approach that helps organizations identify eligible schemes, complete compliant applications, and successfully obtain government financial assistance.",

    steps: [
      {
        title: "Requirement Consultation",
        description:
          "Understand your business, project objectives, investment plans, and funding requirements.",
        icon: "consultation",
      },

      {
        title: "Scheme Evaluation",
        description:
          "Evaluate available government subsidy schemes and determine your eligibility based on business profile and project details.",
        icon: "analysis",
      },

      {
        title: "Documentation & Filing",
        description:
          "Prepare supporting documents, complete application forms, and submit subsidy proposals accurately.",
        icon: "strategy",
      },

      {
        title: "Application Follow-up",
        description:
          "Coordinate with relevant government departments, respond to queries, and monitor application progress.",
        icon: "implementation",
      },

      {
        title: "Approval & Ongoing Support",
        description:
          "Assist with subsidy approval, claim processing, compliance requirements, and post-sanction support.",
        icon: "support",
      },
    ],
  } satisfies ServiceProcessData,
};

export default subsidyConsulting;