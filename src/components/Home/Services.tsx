"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
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
      image: "/services/ps.jpg",
      link: "/services/corporate-advisory",
    },
    {
      id: 2,
      title: "Business",
      fullName: "Business Consulting",
      description:
        "Business strategy, operational excellence, market expansion, and organizational performance improvement.",
      image: "/marketplace/businessconsultancy.jpg",
      link: "/services/business-consulting",
    },
    {
      id: 3,
      title: "Registration",
      fullName: "Registration Services",
      description:
        "Company incorporation, MSME, Startup India, GST, IEC, FSSAI, and statutory registration support.",
      image: "/marketplace/companyreg.jpg",
      link: "/services/registration-services",
    },
    {
      id: 4,
      title: "Certification",
      fullName: "Certification Services",
      description:
        "ISO certifications, quality management, environmental standards, and regulatory certification services.",
      image: "/marketplace/certification.jpg",
      link: "/services/certification-services",
    },
    {
      id: 5,
      title: "Projects",
      fullName: "Project Consulting",
      description:
        "Project planning, DPR preparation, feasibility studies, execution strategy, and project management.",
      image: "/marketplace/startup.jpg",
      link: "/services/project-consulting",
    },
    {
      id: 6,
      title: "Subsidy",
      fullName: "Subsidy Consulting",
      description:
        "Government subsidy identification, documentation, application support, and incentive advisory.",
      image: "/marketplace/ps.jpg",
      link: "/services/subsidy-consulting",
    },
    {
      id: 7,
      title: "Legal",
      fullName: "Legal Advisory",
      description:
        "Corporate legal advisory, contracts, litigation support, intellectual property, and compliance.",
      image: "/marketplace/legal.jpg",
      link: "/services/legal-advisory",
    },
    {
      id: 8,
      title: "CA",
      fullName: "CA & Accounting",
      description:
        "Accounting, taxation, auditing, financial reporting, and statutory compliance.",
      image: "/marketplace/ca.jpg",
      link: "/services/ca-accounting-services",
    },
    {
      id: 9,
      title: "Compliance",
      fullName: "Compliance Management",
      description:
        "End-to-end regulatory compliance, governance, internal audits, and risk management.",
      image: "/marketplace/complaince.jpg",
      link: "/services/compliance-management",
    },
    {
      id: 10,
      title: "Digital",
      fullName: "Digital Transformation",
      description:
        "Digital strategy, AI, automation, ERP implementation, and enterprise transformation.",
      image: "/marketplace/dt.jpg",
      link: "/services/digital-transformation",
    },
  ];

  const featuredService = servicesData[0];

  const services = servicesData.slice(1);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#FFFDF8] py-24 "
    >
      <div className="relative z-10 w-full px-6 lg:px-8">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-gold">
              Professional Advisory Network
            </p>

            <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Expertise That
              <br />
              <span className="text-gold">Moves Business Forward.</span>
            </h2>
          </div>
        </div>

        {/* ================================================= */}
        {/* FEATURED CORPORATE ADVISORY */}
        {/* ================================================= */}

        <article
          onClick={() => router.push(featuredService.link)}
          className="group relative mb-8 grid min-h-[430px] cursor-pointer overflow-hidden rounded-[2rem] bg-black lg:grid-cols-[1.15fr_0.85fr]"
        >
          {/* Image */}
          <div className="absolute inset-0 lg:relative">
            <Image
              src={featuredService.image}
              alt={featuredService.fullName}
              fill
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Featured Content */}
          <div className="relative z-10 flex min-h-[430px] flex-col justify-end p-8 sm:p-10 lg:justify-center lg:p-14">
            <div className="mb-10 flex items-center gap-4 lg:mb-16">
              <span className="text-sm font-bold tracking-[0.2em] text-white/70">
                01
              </span>

              <span className="h-px w-12 bg-gold" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Featured Service
              </span>
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
              {featuredService.title}
            </p>

            <h3 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {featuredService.fullName}
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              {featuredService.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-bold text-white">
                Explore Service
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-gray-950 transition-all duration-300 group-hover:scale-110">
                <FiArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </div>

          {/* Decorative Number */}
          <div className="pointer-events-none absolute right-8 top-4 hidden select-none text-[180px] font-black leading-none text-white/[0.04] lg:block">
            01
          </div>
        </article>

        {/* ================================================= */}
        {/* ASYMMETRIC SERVICES */}
        {/* ================================================= */}

        <div className="grid gap-5 lg:grid-cols-12">
          {/* ================================================= */}
          {/* BUSINESS — LARGE */}
          {/* ================================================= */}

          <ServiceCard
            service={services[0]}
            router={router}
            className="min-h-[420px] lg:col-span-7"
            number="02"
            large
          />

          {/* ================================================= */}
          {/* REGISTRATION + CERTIFICATION */}
          {/* ================================================= */}

          <div className="grid gap-5 lg:col-span-5">
            <ServiceCard
              service={services[1]}
              router={router}
              className="min-h-[198px]"
              number="03"
            />

            <ServiceCard
              service={services[2]}
              router={router}
              className="min-h-[198px]"
              number="04"
            />
          </div>

          {/* ================================================= */}
          {/* PROJECTS */}
          {/* ================================================= */}

          <ServiceCard
            service={services[3]}
            router={router}
            className="min-h-[300px] lg:col-span-4"
            number="05"
          />

          {/* ================================================= */}
          {/* SUBSIDY */}
          {/* ================================================= */}

          <ServiceCard
            service={services[4]}
            router={router}
            className="min-h-[300px] lg:col-span-4"
            number="06"
          />

          {/* ================================================= */}
          {/* LEGAL */}
          {/* ================================================= */}

          <ServiceCard
            service={services[5]}
            router={router}
            className="min-h-[300px] lg:col-span-4"
            number="07"
          />

          {/* ================================================= */}
          {/* CA */}
          {/* ================================================= */}

          <ServiceCard
            service={services[6]}
            router={router}
            className="min-h-[360px] lg:col-span-4"
            number="08"
          />

          {/* ================================================= */}
          {/* COMPLIANCE — LARGE */}
          {/* ================================================= */}

          <ServiceCard
            service={services[7]}
            router={router}
            className="min-h-[360px] lg:col-span-5"
            number="09"
            large
          />

          {/* ================================================= */}
          {/* DIGITAL */}
          {/* ================================================= */}

          <ServiceCard
            service={services[8]}
            router={router}
            className="min-h-[360px] lg:col-span-3"
            number="10"
          />
        </div>
      </div>
    </section>
  );
};

type Service = {
  id: number;
  title: string;
  fullName: string;
  description: string;
  image: string;
  link: string;
};

type ServiceCardProps = {
  service: Service;
  router: ReturnType<typeof useRouter>;
  className?: string;
  number: string;
  large?: boolean;
};

const ServiceCard = ({
  service,
  router,
  className = "",
  number,
  large = false,
}: ServiceCardProps) => {
  return (
    <article
      onClick={() => router.push(service.link)}
      className={`group relative cursor-pointer overflow-hidden rounded-[1.75rem] bg-black ${className}`}
    >
      {/* Image */}
      <Image
        src={service.image}
        alt={service.fullName}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/30" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

      {/* Number */}
      <div className="absolute left-6 top-6 flex items-center gap-3">
        <span className="text-xs font-bold tracking-[0.15em] text-white/60">
          {number}
        </span>

        <span className="h-px w-8 bg-white/30 transition-all duration-500 group-hover:w-14 group-hover:bg-gold" />
      </div>

      {/* Large Background Number */}
      <div className="pointer-events-none absolute right-5 top-1 select-none text-8xl font-black leading-none text-white/[0.06] transition-transform duration-700 group-hover:scale-110">
        {number}
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
          {service.title}
        </p>

        <div className="mt-2 flex items-end justify-between gap-4">
          <h3
            className={`font-black leading-tight text-white ${
              large ? "text-3xl sm:text-4xl" : "text-2xl"
            }`}
          >
            {service.fullName}
          </h3>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-gray-950">
            <FiArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </div>

      {/* Gold Bottom Border */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
    </article>
  );
};

export default Services;
