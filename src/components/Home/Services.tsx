"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();

  const servicesData = [
    {
      id: 1,
      title: "Corporate",
      fullName: "Corporate Advisory",
      description:
        "Strategic corporate advisory, governance, restructuring, mergers, acquisitions, and business growth consulting.",
      color: "#2F80ED",
      image: "/services/ps.jpg",
      link: "/services/corporate-advisory",
    },
    {
      id: 2,
      title: "Business",
      fullName: "Business Consulting",
      description:
        "Business strategy, operational excellence, market expansion, and organizational performance improvement.",
      color: "#EF5350",
      image: "/marketplace/businessconsultancy.jpg",
      link: "/services/business-consulting",
    },
    {
      id: 3,
      title: "Registration",
      fullName: "Registration Services",
      description:
        "Company incorporation, MSME, Startup India, GST, IEC, FSSAI, and statutory registration support.",
      color: "#36C66A",
      image: "/marketplace/companyreg.jpg",
      link: "/services/registration-services",
    },
    {
      id: 4,
      title: "Certification",
      fullName: "Certification Services",
      description:
        "ISO certifications, quality management, environmental standards, and regulatory certification services.",
      color: "#00B8D9",
      image: "/marketplace/certification.jpg",
      link: "/services/certification-services",
    },
    {
      id: 5,
      title: "Projects",
      fullName: "Project Consulting",
      description:
        "Project planning, DPR preparation, feasibility studies, execution strategy, and project management.",
      color: "#9B51E0",
      image: "/marketplace/startup.jpg",
      link: "/services/project-consulting",
    },
    {
      id: 6,
      title: "Subsidy",
      fullName: "Subsidy Consulting",
      description:
        "Government subsidy identification, documentation, application support, and incentive advisory.",
      color: "#F2C94C",
      image: "/marketplace/ps.jpg",
      link: "/services/subsidy-consulting",
    },
    {
      id: 7,
      title: "Legal",
      fullName: "Legal Advisory",
      description:
        "Corporate legal advisory, contracts, litigation support, intellectual property, and compliance.",
      color: "#F5A623",
      image: "/marketplace/legal.jpg",
      link: "/services/legal-advisory",
    },
    {
      id: 8,
      title: "CA",
      fullName: "CA & Accounting",
      description:
        "Accounting, taxation, auditing, financial reporting, and statutory compliance.",
      color: "#26A69A",
      image: "/marketplace/ca.jpg",
      link: "/services/ca-accounting-services",
    },
    {
      id: 9,
      title: "Compliance",
      fullName: "Compliance Management",
      description:
        "End-to-end regulatory compliance, governance, internal audits, and risk management.",
      color: "#5C6BC0",
      image: "/marketplace/complaince.jpg",
      link: "/services/compliance-management",
    },
    {
      id: 10,
      title: "Digital",
      fullName: "Digital Transformation",
      description:
        "Digital strategy, AI, automation, ERP implementation, and enterprise transformation.",
      color: "#7E57C2",
      image: "/marketplace/dt.jpg",
      link: "/services/digital-transformation",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#FFFDF8] py-24"
    >
      {/* Background */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_35%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" /> */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-6">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

         

          <h2 className="mt-6 text-3xl font-black leading-tight text-yellow-500 lg:text-5xl">
            Professional Services
            <br />
            <span className="text-logo-green">
              Built For Business Growth
            </span>
          </h2>

     
        </div>

        {/* Cards Grid */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {servicesData.map((service) => (
           <article
  key={service.id}
  onClick={() => router.push(service.link)}
  className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:border-gray-400 hover:shadow-lg"
>
  <div className="relative aspect-[16/9] overflow-hidden">
    <Image
      src={service.image}
      alt={service.fullName}
      fill
      className="object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

    {/* <div
      className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-black shadow-lg"
      style={{ backgroundColor: service.color }}
    >
      {String(service.id).padStart(2, "0")}
    </div> */}

    <div
      className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
      style={{ backgroundColor: service.color }}
    />
  </div>

  <div className="p-5">
    <span
      className="text-sm font-semibold uppercase tracking-[0.18em]"
      style={{ color: service.color }}
    >
      {service.title}
    </span>

    <h3 className="mt-3 text-xl font-bold text-black">
      {service.fullName}
    </h3>

    <p className="mt-4 line-clamp-3 text-[14px] leading-6 text-gray-400">
      {service.description}
    </p>

    <div className="mt-6 flex items-center justify-between">
      <span className="text-sm font-semibold text-black">
        Explore Service
      </span>

      <div
        className="flex h-10 w-10 items-center justify-center rounded-full"
        style={{
          backgroundColor: `${service.color}20`,
          color: service.color,
        }}
      >
        <FiArrowRight size={18} />
      </div>
    </div>
  </div>
</article>  
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;