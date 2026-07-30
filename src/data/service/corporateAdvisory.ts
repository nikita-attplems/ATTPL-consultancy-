import { ServiceHeroData } from "@/types/ServiceHeroData";
import { ServiceOverviewData } from "@/types/ServiceOverviewData";
import { ServiceOfferingsData } from "@/types/ServiceOfferingsData";
import { ServiceProcessData } from "@/types/ServiceProcessData";


const corporateAdvisory = {
  hero: {
    badge: "ATTPL Marketplace",

    title: "Corporate Advisory",

    description: [
      "ATTPL Corporate Advisory connects businesses with experienced consultants and strategic advisors to improve business performance and achieve sustainable growth.",

      "From business planning and governance to operational excellence and market expansion, our experts provide end-to-end advisory support.",

      "Whether you're a startup, SME or enterprise, access trusted professionals through the ATTPL Marketplace ecosystem."
    ],

    highlights: [
      "Business Strategy",
      "Corporate Planning",
      "Growth Consulting",
      "Risk Management",
      "Operational Excellence",
      "Business Transformation",
      "Market Expansion",
      "Governance Advisory"
    ],

    primaryButton: {
      text: "Request Consultation",
      href: "/service-form",
    },

    secondaryButton: {
      text: "Explore Marketplace",
      href: "/marketplace",
    },
  } satisfies ServiceHeroData,


  overview: {
    sectionBadge: "About Corporate Advisory",

    sectionTitle: "Helping Businesses Build Sustainable Growth",

    heading:
      "Strategic business consulting that empowers organizations to improve operations, accelerate growth and make confident decisions.",

    paragraphs: [
      "ATTPL Corporate Advisory provides access to experienced consultants and business professionals who help organizations solve complex business challenges through practical strategies and industry expertise.",

      "Whether you're launching a startup, expanding into new markets or transforming an existing enterprise, our advisory network supports every stage of your business journey with customized solutions.",

      "From planning and governance to operational excellence and business transformation, our marketplace connects you with trusted professionals who deliver measurable results.",
    ],

    points: [
      "Business Strategy",
      "Corporate Planning",
      "Operational Excellence",
      "Market Expansion",
      "Risk Management",
      "Business Transformation",
      "Corporate Governance",
      "Performance Improvement",
    ],
  } satisfies ServiceOverviewData,


  offerings: {
    badge: "Our Services",

    title: "Corporate Advisory Solutions",

    offerings: [
      {
        title: "Business Strategy",
        description:
          "Develop sustainable business strategies that improve competitiveness, profitability and long-term growth.",
        image: "/marketplace/startup.jpg",
      },

      {
        title: "Corporate Planning",
        description:
          "Align organizational goals, operations and resources with practical execution plans.",
        image: "/marketplace/companyreg.jpg",
      },

      {
        title: "Market Expansion",
        description:
          "Identify new opportunities, evaluate markets and create successful expansion strategies.",
        image: "/marketplace/mrket.jpg",
      },

      {
        title: "Business Transformation",
        description:
          "Drive operational excellence, innovation and digital transformation across the organization.",
        image: "/marketplace/bs.jpg",
      },
    ],
  } satisfies ServiceOfferingsData,


  process: {
    badge: "Our Process",

    title: "How Our Corporate Advisory Process Works",

    description:
      "A structured approach designed to understand your business challenges, develop effective strategies and deliver measurable results through expert guidance.",

    steps: [
      {
        title: "Consultation",
        description:
          "Discuss your business goals, challenges and expectations with our advisory team.",
        icon: "consultation",
      },

      {
        title: "Requirement Analysis",
        description:
          "Analyze your business needs, identify opportunities and define the project scope.",
        icon: "analysis",
      },

      {
        title: "Strategy Development",
        description:
          "Prepare a customized business strategy and implementation roadmap tailored to your objectives.",
        icon: "strategy",
      },

      {
        title: "Implementation",
        description:
          "Collaborate with experienced consultants to execute solutions and monitor progress.",
        icon: "implementation",
      },

      {
        title: "Continuous Support",
        description:
          "Receive ongoing advisory, optimization and long-term business support as your organization grows.",
        icon: "support",
      },
    ],
  } satisfies ServiceProcessData,
};


export default corporateAdvisory;