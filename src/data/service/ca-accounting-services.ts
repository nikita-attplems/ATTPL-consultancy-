import { ServiceHeroData } from "@/types/ServiceHeroData";
import { ServiceOverviewData } from "@/types/ServiceOverviewData";
import { ServiceOfferingsData } from "@/types/ServiceOfferingsData";
import { ServiceProcessData } from "@/types/ServiceProcessData";

const caAccountingServices = {
  hero: {
    badge: "ATTPL Marketplace",

    title: "CA & Accounting Services",

    description: [
      "ATTPL CA & Accounting Services connects individuals, startups, MSMEs, and enterprises with experienced Chartered Accountants and accounting professionals for reliable financial, taxation, and compliance solutions.",

      "From bookkeeping and financial reporting to tax planning, auditing, GST compliance, and business advisory, our experts provide end-to-end accounting support tailored to your business needs.",

      "Manage your finances with confidence by accessing trusted CA professionals through the ATTPL Marketplace."
    ],

    highlights: [
      "Accounting & Bookkeeping",
      "GST Services",
      "Income Tax",
      "Financial Reporting",
      "Audit & Assurance",
      "Tax Planning",
      "Payroll Management",
      "Business Advisory"
    ],

    primaryButton: {
      text: "Book CA Consultation",
      href: "/service-form",
    },

    secondaryButton: {
      text: "Explore Marketplace",
      href: "/marketplace",
    },
  } satisfies ServiceHeroData,

  overview: {
    sectionBadge: "About CA & Accounting Services",

    sectionTitle: "Professional Financial & Compliance Solutions",

    heading:
      "Comprehensive accounting and chartered accountancy services that help businesses maintain financial accuracy, ensure compliance, and make informed financial decisions.",

    paragraphs: [
      "ATTPL CA & Accounting Services provides access to qualified Chartered Accountants and financial professionals who assist businesses with accounting, taxation, auditing, payroll, financial reporting, and statutory compliance.",

      "Whether you're a startup establishing your accounting systems or an established enterprise seeking financial optimization, our marketplace connects you with experienced professionals who understand your business requirements.",

      "Our experts help improve financial transparency, reduce compliance risks, optimize taxation, and support sustainable business growth through reliable accounting practices."
    ],

    points: [
      "Bookkeeping & Accounting",
      "GST Compliance",
      "Income Tax Services",
      "Audit & Assurance",
      "Payroll Processing",
      "Financial Statements",
      "Tax Planning",
      "Business Financial Advisory"
    ],
  } satisfies ServiceOverviewData,

  offerings: {
    badge: "Our Services",

    title: "CA & Accounting Solutions",

    offerings: [
      {
        title: "Accounting & Bookkeeping",
        description:
          "Maintain accurate financial records, bookkeeping, ledger management, reconciliations, and financial reporting.",
        image: "/marketplace/accounting.jpg",
      },

      {
        title: "GST & Income Tax Services",
        description:
          "Professional support for GST registration, return filing, tax compliance, income tax filing, and tax planning.",
        image: "/marketplace/gst.jpg",
      },

      {
        title: "Audit & Financial Reporting",
        description:
          "Conduct statutory audits, internal audits, financial statement preparation, and assurance services.",
        image: "/marketplace/audit.jpg",
      },

      {
        title: "Payroll & Business Advisory",
        description:
          "Manage payroll processing, employee compliance, financial planning, budgeting, and strategic business advisory.",
        image: "/marketplace/payroll.jpg",
      },
    ],
  } satisfies ServiceOfferingsData,

  process: {
    badge: "Our Process",

    title: "How Our CA & Accounting Services Work",

    description:
      "A structured financial consulting process designed to ensure accurate accounting, regulatory compliance, and sound financial management for your business.",

    steps: [
      {
        title: "Financial Consultation",
        description:
          "Understand your accounting, taxation, compliance, and business financial requirements.",
        icon: "consultation",
      },

      {
        title: "Financial Assessment",
        description:
          "Review financial records, identify compliance gaps, and evaluate taxation and accounting requirements.",
        icon: "analysis",
      },

      {
        title: "Planning & Documentation",
        description:
          "Prepare financial records, tax documents, accounting reports, and compliance documentation.",
        icon: "strategy",
      },

      {
        title: "Execution & Compliance",
        description:
          "Complete accounting, tax filings, audits, payroll processing, and statutory compliance activities.",
        icon: "implementation",
      },

      {
        title: "Ongoing Financial Support",
        description:
          "Receive continuous accounting assistance, tax advisory, financial reporting, and compliance support as your business grows.",
        icon: "support",
      },
    ],
  } satisfies ServiceProcessData,
};

export default caAccountingServices;