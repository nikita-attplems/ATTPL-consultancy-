import { ServiceHeroData } from "@/types/ServiceHeroData";
import { ServiceOverviewData } from "@/types/ServiceOverviewData";
import { ServiceOfferingsData } from "@/types/ServiceOfferingsData";
import { ServiceProcessData } from "@/types/ServiceProcessData";

const businessConsultancy = {
  hero: {
    badge: "ATTPL Marketplace",

    title: "Business Consultancy",

    description: [
      "ATTPL Business Consultancy connects startups, SMEs, and enterprises with experienced business consultants who provide practical solutions for sustainable growth and long-term success.",

      "From business planning and market analysis to operational improvement and strategic expansion, our experts help organizations overcome challenges and unlock new opportunities.",

      "Access trusted consultants through the ATTPL Marketplace to build resilient, competitive, and future-ready businesses."
    ],

    highlights: [
      "Business Planning",
      "Growth Strategy",
      "Market Research",
      "Operations Consulting",
      "Performance Improvement",
      "Business Expansion",
      "Digital Transformation",
      "Strategic Advisory"
    ],

    primaryButton: {
      text: "Book Business Consultation",
      href: "/service-form",
    },

    secondaryButton: {
      text: "Explore Marketplace",
      href: "/marketplace",
    },
  } satisfies ServiceHeroData,

  overview: {
    sectionBadge: "About Business Consultancy",

    sectionTitle: "Building Smarter Businesses Through Expert Guidance",

    heading:
      "Professional business consulting services that help organizations improve performance, solve challenges, and achieve sustainable growth.",

    paragraphs: [
      "ATTPL Business Consultancy provides businesses with access to experienced consultants who deliver strategic guidance across planning, operations, finance, marketing, and organizational development.",

      "Whether you're launching a new venture, optimizing existing operations, or planning business expansion, our marketplace connects you with professionals who understand your industry and business goals.",

      "Our consultants focus on delivering practical, measurable solutions that improve efficiency, profitability, competitiveness, and long-term business success."
    ],

    points: [
      "Business Planning",
      "Growth Strategy",
      "Market Research",
      "Operational Improvement",
      "Business Expansion",
      "Digital Transformation",
      "Performance Optimization",
      "Strategic Decision Making"
    ],
  } satisfies ServiceOverviewData,

  offerings: {
    badge: "Our Services",

    title: "Business Consultancy Solutions",

    offerings: [
      {
        title: "Business Planning",
        description:
          "Develop comprehensive business plans, financial projections, and growth roadmaps for sustainable success.",
        image: "/marketplace/business-plan.jpg",
      },

      {
        title: "Market Research & Analysis",
        description:
          "Gain valuable market insights, competitor analysis, and customer research to make informed business decisions.",
        image: "/marketplace/market-research.jpg",
      },

      {
        title: "Operational Excellence",
        description:
          "Improve workflows, increase productivity, optimize business processes, and reduce operational inefficiencies.",
        image: "/marketplace/operations.jpg",
      },

      {
        title: "Business Growth Strategy",
        description:
          "Create customized strategies for scaling operations, entering new markets, and achieving long-term business growth.",
        image: "/marketplace/business-growth.jpg",
      },
    ],
  } satisfies ServiceOfferingsData,

  process: {
    badge: "Our Process",

    title: "How Our Business Consultancy Works",

    description:
      "A systematic consulting approach focused on understanding your business, identifying opportunities, and implementing practical strategies for measurable growth.",

    steps: [
      {
        title: "Initial Consultation",
        description:
          "Understand your business objectives, current challenges, and future vision.",
        icon: "consultation",
      },

      {
        title: "Business Assessment",
        description:
          "Analyze your operations, market position, financial health, and organizational strengths.",
        icon: "analysis",
      },

      {
        title: "Strategy Development",
        description:
          "Design customized business strategies and actionable plans aligned with your objectives.",
        icon: "strategy",
      },

      {
        title: "Implementation Support",
        description:
          "Work alongside experienced consultants to execute recommendations and monitor progress.",
        icon: "implementation",
      },

      {
        title: "Continuous Improvement",
        description:
          "Receive ongoing guidance, performance reviews, and optimization support to ensure long-term success.",
        icon: "support",
      },
    ],
  } satisfies ServiceProcessData,
};

export default businessConsultancy;