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
    <section className="relative overflow-hidden bg-background py-24">
      {/* Background */}
      <div
        className="
      absolute right-0 top-0
      h-96 w-96
      rounded-full
      bg-gold/10
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
          border border-border
          bg-gradient-to-br
          from-gold/10
          to-background
          p-10
          shadow-xl
        "
          >
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
                  bg-surface
                  border border-border
                  px-4 py-3
                  text-center
                  text-sm
                  font-semibold
                  text-text-secondary
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
            <h2
              className="
            mt-6
            text-4xl md:text-5xl
            font-bold
            leading-tight
            text-primary
          "
            >
              Startup & SME
              <span className="text-gold"> Success Platform</span>
            </h2>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-24">
          <div className="mb-10 text-center">
            <h3
              className="
            text-3xl
            font-bold
            text-primary
          "
            >
              Startup Growth Solutions
            </h3>

            <p className="mt-3 text-text-secondary">
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
                border border-border
                bg-surface
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
                  bg-gold/10
                  text-2xl
                  text-gold
                  transition
                  group-hover:bg-gold
                  group-hover:text-white
                "
                  >
                    <Icon />
                  </div>

                  <h4
                    className="
                  mt-6
                  text-xl
                  font-semibold
                  text-primary
                "
                  >
                    {service.title}
                  </h4>

                  <p
                    className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-text-secondary
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
