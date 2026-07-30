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
  FaArrowRight,
} from "react-icons/fa";



import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(leftRef.current, {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, 0)

    .from(rightRef.current, {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, 0);

  }, sectionRef);

  return () => ctx.revert();
}, []);
  const sectionRef = useRef<HTMLElement>(null);
const leftRef = useRef<HTMLDivElement>(null);
const rightRef = useRef<HTMLDivElement>(null);

const leftIndustries = industries.slice(0, 4);
const rightIndustries = industries.slice(4);

  return (
    <section
  ref={sectionRef}
  className="bg-slate-50 py-24"
>
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            INDUSTRY EXPERTISE
          </span>

          <h2
            className="
            mt-6
            text-4xl
            font-bold
            text-[#0B1B3A]
            md:text-5xl
            "
          >
            Solutions Across Multiple Industries
          </h2>

          <p
            className="
            mt-5
            text-lg
            leading-relaxed
            text-slate-500
            "
          >
            Connect with specialized professionals, consultants and solution
            providers across diverse industries through ATTPL Marketplace.
          </p>
        </div>

        {/* Industry Cards */}

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div
  ref={leftRef}
  className="space-y-8"
>
            {leftIndustries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="group flex items-start gap-5 border-b border-slate-200 pb-8"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-500">
                    <Icon className="text-xl" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#0B1B3A] transition group-hover:text-yellow-500">
                      {industry.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {industry.description}
                    </p>
                  </div>

                  <FaArrowRight className="mt-1 text-slate-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-yellow-500" />
                </div>
              );
            })}
          </div>

          {/* Right */}
          <div
  ref={leftRef}
  className="space-y-8"
>
            {rightIndustries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="group flex items-start gap-5 border-b border-slate-200 pb-8"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-500">
                    <Icon className="text-xl" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#0B1B3A] transition group-hover:text-yellow-500">
                      {industry.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {industry.description}
                    </p>
                  </div>

                  <FaArrowRight className="mt-1 text-slate-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-yellow-500" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
