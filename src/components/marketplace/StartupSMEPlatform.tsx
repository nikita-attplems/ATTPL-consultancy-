"use client";

import {
  FiArrowRight,
  FiZap,
  FiDollarSign,
  FiUsers,
  FiCode,
  FiTrendingUp,
  FiBriefcase,
} from "react-icons/fi";
import { ElementType } from "react";

type StartupService = {
  title: string;
  description: string;
  icon: ElementType;
};

const startupServices: StartupService[] = [
  {
    title: "Startup Consulting",
    description:
      "Business strategy, planning, market validation, and expert guidance for founders.",
    icon: FiBriefcase,
  },
  {
    title: "Funding Assistance",
    description:
      "Connect with funding opportunities, investors, and financial advisory support.",
    icon: FiDollarSign,
  },
  {
    title: "Mentorship Network",
    description: "Learn from experienced professionals and industry mentors.",
    icon: FiUsers,
  },
  {
    title: "Technology Solutions",
    description:
      "Digital products, automation, and technology support for business growth.",
    icon: FiCode,
  },
  {
    title: "Growth Strategy",
    description:
      "Marketing, expansion planning, and scaling solutions for SMEs.",
    icon: FiTrendingUp,
  },
  {
    title: "Startup Launch Support",
    description:
      "Complete assistance from business setup to operational growth.",
    icon: FiZap,
  },
];

export default function StartupSMEPlatform() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}
      <div
        className="
        absolute right-0 top-0
        h-96 w-96
        rounded-full
        bg-blue-100/40
        blur-3xl
      "
      />

      <div
        className="
        relative mx-auto
        max-w-7xl px-6
      "
      >
        {/* Hero */}
        <div
          className="
          grid items-center
          gap-14 lg:grid-cols-2
        "
        >
          {/* Left */}
          <div
            className="
            relative
            rounded-3xl
            border border-slate-200
            bg-gradient-to-br
            from-blue-50
            to-white
            p-10
            shadow-xl
          "
          >
            <div
              className="
              mx-auto
              flex h-56 w-56
              items-center justify-center
              rounded-full
              bg-white
              shadow-lg
            "
            >
              <div
                className="
                flex h-32 w-32
                items-center justify-center
                rounded-full
                bg-blue-600
                text-5xl
                text-white
              "
              >
                🚀
              </div>
            </div>

            <div
              className="
              mt-8
              grid grid-cols-2
              gap-4
            "
            >
              {["Mentors", "Investors", "Technology", "Advisors"].map(
                (item) => (
                  <div
                    key={item}
                    className="
                    rounded-xl
                    bg-white
                    border
                    border-slate-200
                    px-4 py-3
                    text-center
                    text-sm
                    font-semibold
                    text-slate-700
                  "
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Right Ecosystem Card */}
          <div>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
              Startup • SME • Growth
            </span>

            <h2
              className="
              mt-6
              text-4xl md:text-5xl
              font-bold
              leading-tight
              text-slate-900
            "
            >
              Startup & SME
              <span className="text-blue-600"> Success Platform</span>
            </h2>

            <p
              className="
              mt-6
              max-w-xl
              text-lg
              leading-relaxed
              text-slate-600
            "
            >
              Build, launch, and scale your business with expert consultants,
              mentors, technology partners, and growth solutions.
            </p>

            <button
              className="
                mt-8
                flex items-center gap-3
                rounded-xl
                bg-blue-600
                px-7 py-4
                font-semibold
                text-white
                shadow-lg
                shadow-blue-200
                transition-all
                hover:bg-blue-700
                hover:shadow-xl
              "
            >
              Connect With Startup Experts
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-24">
          <div
            className="
            mb-10
            text-center
          "
          >
            <h3
              className="
              text-3xl
              font-bold
              text-slate-900
            "
            >
              Startup Growth Solutions
            </h3>

            <p
              className="
              mt-3
              text-slate-600
            "
            >
              Everything founders need to build and scale successful businesses.
            </p>
          </div>

          <div
            className="
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
          >
            {startupServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >
                  <div
                    className="
                    flex h-14 w-14
                    items-center justify-center
                    rounded-xl
                    bg-blue-50
                    text-2xl
                    text-blue-600
                    transition
                    group-hover:bg-yellow-400
                    group-hover:text-slate-900
                  "
                  >
                    <Icon />
                  </div>

                  <h4
                    className="
                    mt-6
                    text-xl
                    font-semibold
                    text-slate-900
                  "
                  >
                    {service.title}
                  </h4>

                  <p
                    className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-slate-600
                  "
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
