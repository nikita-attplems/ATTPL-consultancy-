import { ServiceHeroData } from "@/types/ServiceHeroData";
import { ServiceOverviewData } from "@/types/ServiceOverviewData";
import { ServiceOfferingsData } from "@/types/ServiceOfferingsData";
import { ServiceProcessData } from "@/types/ServiceProcessData";

const projectConsulting = {
  hero: {
    badge: "ATTPL Marketplace",

    title: "Project Consulting",

    description: [
      "ATTPL Project Consulting connects businesses, startups, industries, and organizations with experienced project consultants to successfully plan, execute, and manage projects of every scale.",

      "From feasibility studies and project planning to implementation, monitoring, and risk management, our experts provide comprehensive consulting throughout the project lifecycle.",

      "Whether you're launching a new venture, expanding infrastructure, or implementing strategic initiatives, access trusted project consultants through the ATTPL Marketplace."
    ],

    highlights: [
      "Project Planning",
      "Feasibility Studies",
      "Project Management",
      "Risk Assessment",
      "Budget Planning",
      "Execution Strategy",
      "Project Monitoring",
      "Performance Optimization"
    ],

    primaryButton: {
      text: "Start Your Project",
      href: "/service-form",
    },

    secondaryButton: {
      text: "Explore Marketplace",
      href: "/marketplace",
    },
  } satisfies ServiceHeroData,

  overview: {
    sectionBadge: "About Project Consulting",

    sectionTitle: "Turning Ideas Into Successfully Executed Projects",

    heading:
      "Professional project consulting services that help organizations plan efficiently, reduce risks, optimize resources, and achieve successful project outcomes.",

    paragraphs: [
      "ATTPL Project Consulting provides access to experienced consultants who guide organizations through every stage of project development, from concept and planning to execution and completion.",

      "Our consultants work closely with businesses to identify project objectives, evaluate feasibility, allocate resources, manage risks, and ensure projects remain on schedule and within budget.",

      "With structured planning, expert guidance, and continuous monitoring, we help businesses maximize project success while minimizing operational challenges."
    ],

    points: [
      "Project Planning",
      "Feasibility Analysis",
      "Budget Management",
      "Risk Mitigation",
      "Project Execution",
      "Quality Assurance",
      "Resource Optimization",
      "Project Monitoring"
    ],
  } satisfies ServiceOverviewData,

  offerings: {
    badge: "Our Services",

    title: "Project Consulting Solutions",

    offerings: [
      {
        title: "Project Planning & Strategy",
        description:
          "Develop comprehensive project plans, timelines, resource allocation strategies, and execution roadmaps.",
        image: "/marketplace/project-planning.jpg",
      },

      {
        title: "Feasibility Studies",
        description:
          "Evaluate technical, financial, operational, and commercial feasibility before project execution.",
        image: "/marketplace/feasibility.jpg",
      },

      {
        title: "Project Management",
        description:
          "Manage project execution through structured planning, coordination, monitoring, and performance tracking.",
        image: "/marketplace/project-management.jpg",
      },

      {
        title: "Risk & Performance Management",
        description:
          "Identify project risks, implement mitigation strategies, and optimize project performance throughout execution.",
        image: "/marketplace/risk-management.jpg",
      },
    ],
  } satisfies ServiceOfferingsData,

  process: {
    badge: "Our Process",

    title: "How Our Project Consulting Process Works",

    description:
      "A structured consulting approach designed to ensure projects are strategically planned, efficiently executed, and successfully delivered.",

    steps: [
      {
        title: "Project Consultation",
        description:
          "Understand project objectives, business requirements, scope, and expected outcomes.",
        icon: "consultation",
      },

      {
        title: "Project Assessment",
        description:
          "Conduct feasibility analysis, identify risks, define milestones, and prepare project documentation.",
        icon: "analysis",
      },

      {
        title: "Planning & Strategy",
        description:
          "Develop project schedules, resource plans, budgets, and implementation strategies.",
        icon: "strategy",
      },

      {
        title: "Execution & Monitoring",
        description:
          "Support project implementation, monitor progress, manage risks, and ensure timely delivery.",
        icon: "implementation",
      },

      {
        title: "Project Completion & Support",
        description:
          "Review project outcomes, provide performance evaluation, and offer post-project consulting support.",
        icon: "support",
      },
    ],
  } satisfies ServiceProcessData,
};

export default projectConsulting;