import { ServiceHeroData } from "@/types/ServiceHeroData";
import { ServiceOverviewData } from "@/types/ServiceOverviewData";
import { ServiceOfferingsData } from "@/types/ServiceOfferingsData";
import { ServiceProcessData } from "@/types/ServiceProcessData";

const complianceManagement = {
  hero: {
    badge: "ATTPL Marketplace",

    title: "Compliance Management",

    description: [
      "ATTPL Compliance Management connects businesses with experienced compliance professionals who help organizations meet legal, regulatory, and industry-specific requirements while minimizing operational risks.",

      "From statutory compliance and corporate governance to labor laws, environmental regulations, and industry standards, our experts provide end-to-end compliance support tailored to your business.",

      "Access trusted compliance specialists through the ATTPL Marketplace to strengthen governance, reduce compliance risks, and ensure sustainable business operations."
    ],

    highlights: [
      "Regulatory Compliance",
      "Corporate Governance",
      "Labor Law Compliance",
      "Tax & Statutory Compliance",
      "Risk Assessment",
      "Compliance Audits",
      "Policy Development",
      "Legal Documentation"
    ],

    primaryButton: {
      text: "Book Compliance Consultation",
      href: "/service-form",
    },

    secondaryButton: {
      text: "Explore Marketplace",
      href: "/marketplace",
    },
  },

  overview: {
    sectionBadge: "About Compliance Management",

    sectionTitle: "Ensuring Regulatory Excellence Across Your Business",

    heading:
      "Comprehensive compliance management services that help organizations stay compliant, reduce legal risks, and build a strong governance framework.",

    paragraphs: [
      "ATTPL Compliance Management provides businesses with access to experienced compliance professionals who ensure adherence to legal, regulatory, and industry-specific requirements across multiple business functions.",

      "Whether you're a startup establishing compliance processes or an enterprise managing complex regulatory obligations, our marketplace connects you with experts who understand evolving compliance standards.",

      "Our professionals deliver practical compliance solutions that improve operational transparency, minimize legal exposure, and support long-term business sustainability."
    ],

    points: [
      "Regulatory Compliance",
      "Corporate Governance",
      "Compliance Audits",
      "Policy Development",
      "Risk Assessment",
      "Legal Documentation",
      "Statutory Filings",
      "Ongoing Compliance Support"
    ],
  },

  offerings: {
    badge: "Our Services",

    title: "Compliance Management Solutions",

    offerings: [
      {
        title: "Regulatory Compliance",
        description:
          "Ensure compliance with central, state, and industry-specific regulations through expert guidance and monitoring.",
        image: "/marketplace/regulatory-compliance.jpg",
      },

      {
        title: "Corporate Governance",
        description:
          "Develop governance frameworks, internal policies, and compliance controls that strengthen organizational accountability.",
        image: "/marketplace/corporate-governance.jpg",
      },

      {
        title: "Compliance Audits",
        description:
          "Identify compliance gaps, assess regulatory risks, and implement corrective actions through comprehensive audits.",
        image: "/marketplace/compliance-audit.jpg",
      },

      {
        title: "Risk & Policy Management",
        description:
          "Create effective compliance policies, manage business risks, and maintain continuous regulatory readiness.",
        image: "/marketplace/risk-management.jpg",
      },
    ],
  },

  process: {
    badge: "Our Process",

    title: "How Our Compliance Management Works",

    description:
      "A structured compliance approach that evaluates your regulatory requirements, develops effective compliance strategies, and provides continuous monitoring and support.",

    steps: [
      {
        title: "Compliance Assessment",
        description:
          "Evaluate your organization's regulatory obligations and identify existing compliance gaps.",
        icon: "analysis",
      },

      {
        title: "Risk Evaluation",
        description:
          "Assess operational, legal, and regulatory risks affecting your business activities.",
        icon: "strategy",
      },

      {
        title: "Compliance Planning",
        description:
          "Develop customized compliance frameworks, policies, and implementation roadmaps.",
        icon: "planning",
      },

      {
        title: "Implementation",
        description:
          "Implement compliance controls, documentation, reporting systems, and governance processes.",
        icon: "implementation",
      },

      {
        title: "Monitoring & Support",
        description:
          "Continuously monitor regulatory changes, conduct periodic reviews, and provide ongoing compliance support.",
        icon: "support",
      },
    ],
  },
};

export default complianceManagement;