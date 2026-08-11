"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type PageType = {
  number: string;
  title: string;
  content: string;
};

const pages: PageType[] = [
  {
    number: "01",
    title: "The Global Economy",
    content:
      "Our team believes that in the context of the present world economic order, the legal profession plays a more valuable and constructive role than ever before. Today, there are more lawyers engaged in international business and finance procedures than ever before.",
  },
  {
    number: "02",
    title: "Minimizing Litigation",
    content:
      "Today, the role of lawyers is not limited to defending the rights of their clients but also ensuring that litigation is minimized. The need for specialist services has emerged and is especially needed in addressing complex issues of international trade and corporate matters.",
  },
  {
    number: "03",
    title: "Exclusive Litigation",
    content:
      "We have a special team of lawyers and advocates who operate exclusively in litigation at various stages—from pleadings and hearings to appellate proceedings. Our expertise covers a wide spectrum of legal disciplines and courts.",
  },
];

export default function Expertise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.innerWidth < 1024) return;

    const slider = sliderRef.current;
    if (!slider) return;

    const panels = gsap.utils.toArray(
      slider.children
    ) as HTMLElement[];

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        start: "top top",
        end: () =>
          "+=" + window.innerWidth * (panels.length - 1),
      },
    });
  }, []);

  return (
    <>
      {/* HEADER SECTION */}
      <section className="bg-[#FFFDF8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <div>
              <span className="block text-sm font-bold tracking-[0.2em] uppercase mb-6 text-gray-600">
                OUR APPROACH
              </span>

              <h1 className="text-5xl lg:text-7xl font-black uppercase leading-tight">
                REDEFINING
                <br />
                <span className="text-blue-600">
                  LEGAL EXCELLENCE
                </span>
              </h1>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 max-w-md">
              <h3 className="text-5xl font-black mb-2">15+</h3>

              <p className="text-xl font-bold mb-3">
                Years of Legal Trust
              </p>

              <p className="text-gray-600">
                Providing specialized corporate and
                litigation services to enterprises and
                individuals across multiple industries.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* DESKTOP HORIZONTAL SCROLL */}
     <section className="bg-[#FFFDF8] py-24">
  <div className="max-w-7xl mx-auto px-6">
 

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pages.map((page) => (
        <div
          key={page.number}
          className="
            bg-white
            rounded-3xl
            border
            border-gray-200
            p-8
            shadow-lg
          "
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-6xl font-black text-blue-100">
              {page.number}
            </span>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              EXPERTISE
            </span>
          </div>

          <h3 className="text-2xl font-black text-gray-900 mb-4">
            {page.title}
          </h3>

          <p className="text-gray-600 leading-7 mb-6">
            {page.content}
          </p>

        
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  );
}