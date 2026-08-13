"use client";

import {
  FaHeartbeat,
  FaHardHat,
  FaMountain,
  FaIndustry,
  FaLaptopCode,
  FaGraduationCap,
  FaShoppingBag,
  FaLeaf,
} from "react-icons/fa";

const industries = [
  {
    title: "Healthcare",
    icon: FaHeartbeat,
    description:
      "Healthcare consultants, medical experts, wellness providers and industry specialists.",
  },
  {
    title: "Construction",
    icon: FaHardHat,
    description:
      "Infrastructure consultants, project experts and construction professionals.",
  },
  {
    title: "Mining",
    icon: FaMountain,
    description:
      "Mining specialists, industrial advisors and resource management experts.",
  },
  {
    title: "Manufacturing",
    icon: FaIndustry,
    description:
      "Operational consultants, production experts and manufacturing solutions.",
  },
  {
    title: "Technology",
    icon: FaLaptopCode,
    description:
      "Technology partners, software consultants and digital solution providers.",
  },
  {
    title: "Education",
    icon: FaGraduationCap,
    description:
      "Education advisors, institutions and professional learning networks.",
  },
  {
    title: "Retail & Commerce",
    icon: FaShoppingBag,
    description:
      "Retail consultants, market experts and business growth specialists.",
  },
  {
    title: "Agriculture",
    icon: FaLeaf,
    description:
      "Agri-business consultants, specialists and rural ecosystem partners.",
  },
];

export default function IndustryExpertiseSection() {
  const leftIndustries = industries.slice(0, 4);
  const rightIndustries = industries.slice(4);

  return (
    <section className="bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Industry Expertise
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight text-primary md:text-5xl">
            Solutions Across
            <span className="text-gold"> Multiple Industries</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-text-secondary">
            Connect with specialized professionals, consultants and solution
            providers across diverse industries through ATTPL Marketplace.
          </p>

        </div>

        {/* Industries */}
        <div className="mt-16 grid gap-x-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            {leftIndustries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="
                    flex
                    gap-5
                    border-b
                    border-border
                    py-7
                  "
                >
                  {/* Number */}
                  <span className="pt-1 text-xs font-bold tracking-widest text-gray-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-gold/10
                      text-gold
                    "
                  >
                    <Icon className="text-lg" />
                  </div>

                  {/* Content */}
                  <div>
            <h3 className="text-xl font-bold text-primary lg:text-2xl">
                      {industry.title}
                    </h3>
<p className="mt-2 text-base leading-7 text-text-secondary">
                      {industry.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT */}
          <div>
            {rightIndustries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="
                    flex
                    gap-5
                    border-b
                    border-border
                    py-7
                  "
                >
                  {/* Number */}
                  <span className="pt-1 text-xs font-bold tracking-widest text-gray-300">
                    {String(index + 5).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-gold/10
                      text-gold
                    "
                  >
                    <Icon className="text-lg" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-primary lg:text-2xl">
                      {industry.title}
                    </h3>

               <p className="mt-2 text-base leading-7 text-text-secondary">
                      {industry.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}