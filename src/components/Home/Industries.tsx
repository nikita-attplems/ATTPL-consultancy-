"use client";

import Image from "next/image";

import Marquee from "react-fast-marquee";
import "swiper/css";

const industries = [
  {
    title: "Agriculture",
    image: "/industries/agriculture.jpg",
  },
  {
    title: "Manufacturing",
    image: "/industries/manufacturing.jpg",
  },
  {
    title: "Healthcare",
    image: "/industries/healthcare.jpg",
  },
  {
    title: "Education",
    image: "/industries/education.jpg",
  },
  {
    title: "Construction",
    image: "/industries/construction.jpg",
  },
  {
    title: "Renewable Energy",
    image: "/industries/energy.jpg",
  },
  {
    title: "Mining",
    image: "/industries/mining.jpg",
  },
  {
    title: "Logistics",
    image: "/industries/logitics.jpg",
  },
  {
    title: "Information Technology",
    image: "/industries/it.jpg",
  },
  {
    title: "Retail",
    image: "/industries/retail.jpg",
  },
  {
    title: "Food Processing",
    image: "/industries/factoryfood.jpg",
  },
  {
    title: "Real Estate",
    image: "/industries/realestate.jpg",
  },
  {
    title: "Government & Public Sector",
    image: "/industries/govt.jpg",
  },
];

export default function Industries() {
  return (
    <section className="bg-[#FFFDF8] py-[CLAMP(4REM,8VH,8REM)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-light text-blue-600 leading-NONE">
              Industries
              <span className="block font-semibold">We Serve</span>
            </h2>
          </div>

         
        </div>

        {/* Divider */}
        <div className="my-14 border-t border-gray-300" />

        {/* First Row */}
        <Marquee speed={18} gradient={false} pauseOnHover={true}>
          <div className="flex gap-4 pr-4">
            {industries.slice(0, 7).map((industry) => (
              <div
                key={industry.title}
                className="w-[clamp(240px,28vw,380px)] flex-shrink-0"
              >
                <IndustryCard industry={industry} />
              </div>
            ))}
          </div>
        </Marquee>

        {/* Second Row */}
        <div className="mt-5">
          <Marquee
            speed={18}
            gradient={false}
            direction="right"
            pauseOnHover={true}
          >
            <div className="flex gap-4 pr-4">
              {industries.slice(7).map((industry) => (
                <div
                  key={industry.title}
                  className="w-[clamp(240px,28vw,380px)] flex-shrink-0"
                >
                  <IndustryCard industry={industry} />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

type Industry = {
  title: string;
  image: string;
};

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="group relative h-[clamp(140px,20vw,220px)] overflow-hidden rounded-xl">
      <Image
        src={industry.image}
        alt={industry.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#13263F]/80 via-transparent to-transparent" />

      <h3 className="absolute bottom-4 left-4 text-[clamp(16px,1.4vw,22px)] font-semibold text-white">
        {industry.title}
      </h3>
    </div>
  );
}
