"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../ui/Button";

const resources = [
  {
    id: 1,
    type: "CASE STUDY",
    title: "How strategic legal advisory transformed a growing enterprise",
    image:"/marketplace/legal.jpg",
    featured: true,
  },
  {
    id: 2,
    type: "ARTICLE",
    title: "Building expertise in compliance and corporate governance",
    image:"/industries/realestate.jpg",
      
  },
  {
    id: 3,
    type: "INSIGHT",
    title: "Future-ready business strategies in a digital economy",
    image:"/marketplace/businessstrategy.jpg",
     
  },
  {
    id: 4,
    type: "REPORT",
    title: "Managing risk while accelerating sustainable growth",
    image:"/marketplace/bla.jpg"
      
  },
];

export default function Resources() {
  const featured = resources[0];
  const sideCards = resources.slice(1);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-bold leading-tight text-[#E1AD01] lg:text-6xl">
              What's your next
              <br />
              brilliant move?
            </h2>

            <p className="mt-6 leading-8 text-black">
              Explore practical insights, legal strategies, industry analysis
              and business expertise designed to help organizations grow
              confidently.
            </p>

    <Button className="mt-10" href="/service-form">
  Connect With Us
</Button>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            {sideCards.slice(1).map((card) => (
              <div
                key={card.id}
                className="group relative h-[300px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <p className="mb-2 text-xs font-semibold text-[#D4AF37]">
                    {card.type}
                  </p>

                  <h3 className="text-lg font-semibold leading-7 text-white">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Card */}
          <div className="lg:col-span-5">
            <div className="group relative min-h-[640px] overflow-hidden rounded-3xl">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 p-8">
                <p className="mb-4 text-sm font-semibold text-[#D4AF37]">
                  {featured.type}
                </p>

                <h3 className="text-4xl font-bold leading-tight text-white">
                  {featured.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
