"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

type PageType = {
  number: string;
  title: string;
  content: string;
  image: string;
};

const pages: PageType[] = [
  {
    number: "01",
    title: "The Global Economy",
    content:
      "Our team believes that in the context of the present world economic order, the legal profession plays a more valuable and constructive role than ever before. Today, there are more lawyers engaged in international business and finance procedures than ever before.",
    image: "/expertise/globaleconomy.jpg",
  },
  {
    number: "02",
    title: "Minimizing Litigation",
    content:
      "Today, the role of lawyers is not limited to defending the rights of their clients but also ensuring that litigation is minimized. The need for specialist services has emerged and is especially needed in addressing complex issues of international trade and corporate matters.",
    image: "/marketplace/legal.jpg",
  },
  {
    number: "03",
    title: "Exclusive Litigation",
    content:
      "We have a special team of lawyers and advocates who operate exclusively in litigation at various stages—from pleadings and hearings to appellate proceedings. Our expertise covers a wide spectrum of legal disciplines and courts.",
    image: "/expertise/wxclusive.jpg",
  },
];

export default function Expertise() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".expertise-heading",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".expertise-card",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".expertise-cards",
            start: "top 80%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFFDF8] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* HEADER */}
        <div className="expertise-heading mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                Our Approach
              </span>
            </div>

            <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-light uppercase leading-[0.9] tracking-[-0.05em] text-gray-900">
              Redefining
              <br />
              <span className="font-semibold text-blue-600">
                Legal Excellence
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-gray-600 lg:ml-auto lg:text-lg">
            Combining legal knowledge, commercial awareness,
            and strategic thinking to help our clients navigate
            complex challenges with confidence.
          </p>
        </div>

        {/* CARDS */}
        <div className="expertise-cards space-y-4">
          {pages.map((page) => (
            <div
              key={page.number}
              className="
                expertise-card
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                transition-all
                duration-500
                hover:border-blue-600
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              {/* BLUE TOP LINE */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-0
                  bg-blue-600
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

  <div
  className="
    relative
    min-h-[150px]
    p-6
    md:p-8
    lg:p-10
  "
>
                {/* NUMBER */}
                <div>
                  <span
                    className="
                      block
                      text-4xl
                      font-light
                      tracking-[-0.05em]
                      text-blue-600
                      transition-transform
                      duration-500
                      group-hover:-translate-y-1
                    "
                  >
                    {page.number}
                  </span>

                  <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Expertise
                  </span>
                </div>

                {/* TITLE + HOVER CONTENT */}
                <div className="relative py-3">
                 <h3
  className="
    text-2xl
    font-semibold
    tracking-[-0.03em]
    text-gray-900
    transition-all
    duration-500
    group-hover:text-blue-600
    md:text-3xl
    lg:text-4xl
  "
>
                    {page.title}
                  </h3>

                  {/* DESCRIPTION */}
              <div
  className="
    max-w-2xl
    overflow-hidden
    opacity-0
    max-h-0
    transition-all
    duration-500
    ease-out
    group-hover:mt-4
    group-hover:max-h-40
    group-hover:opacity-100
  "
>
                    <p className="text-sm leading-7 text-gray-500 md:text-base">
                      {page.content}
                    </p>
                  </div>
                </div>

                {/* ARROW */}
         
              </div>

              
{/* IMAGE */}
<div
  className="
    absolute
    right-0
    top-0
    hidden
    h-full
    w-0
    overflow-hidden
    transition-[width]
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]
    lg:block
    lg:group-hover:w-[38%]
  "
>
  <Image
    src={page.image}
    alt={page.title}
    fill
    sizes="38vw"
    className="
      object-cover
      object-center
      scale-110
      opacity-0
      transition-all
      duration-700
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-100
      group-hover:opacity-100
    "
  />

  <div
    className="
      absolute
      inset-0
      bg-[#13263F]/20
      opacity-0
      transition-opacity
      duration-500
      group-hover:opacity-100
    "
  />
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}