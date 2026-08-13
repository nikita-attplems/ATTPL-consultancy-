"use client";

import Image from "next/image";
import { useState } from "react";

import Button from "../common/Button";

const categories = [
  {
    id: 1,
    title: "Business Consulting",
    subtitle: "Strategy • Growth • Transformation",
    image: "/marketplace/businessconsultancy.jpg",
    services: [
      "Business Strategy",
      "Corporate Advisory",
      "Growth Planning",
      "Business Transformation",
      "SOP Development",
      "Process Optimization",
    ],
  },
  {
    id: 2,
    title: "Legal Services",
    subtitle: "Contracts • Trademark • Compliance",
    image: "/marketplace/legal.jpg",
    services: [
      "Contracts",
      "Trademark Registration",
      "Copyright",
      "Patent Assistance",
      "NDA",
      "Legal Advisory",
    ],
  },
  {
    id: 3,
    title: "Chartered Accountant",
    subtitle: "GST • Audit • Taxation",
    image: "/marketplace/ca.jpg",
    services: [
      "GST Compliance",
      "Income Tax",
      "Accounting",
      "Audit",
      "Virtual CFO",
      "MIS Reporting",
    ],
  },
  {
    id: 4,
    title: "Company Secretary",
    subtitle: "ROC • Secretarial • Governance",
    image: "/marketplace/cs.jpg",
    services: [
      "ROC Filing",
      "Annual Compliance",
      "Board Compliance",
      "Corporate Governance",
      "Secretarial Audit",
    ],
  },
  {
    id: 5,
    title: "Technology",
    subtitle: "ERP • CRM • Automation",
    image: "/marketplace/technology.jpg",
    services: [
      "ERP Implementation",
      "CRM",
      "HRMS",
      "AI Automation",
      "Mobile Apps",
      "Business Intelligence",
    ],
  },
  {
    id: 6,
    title: "Startup",
    subtitle: "Funding • DPIIT • Pitch Deck",
    image: "/marketplace/startup.jpg",
    services: [
      "Startup Registration",
      "Business Plan",
      "Pitch Deck",
      "Investor Readiness",
      "Funding Support",
      "Valuation",
    ],
  },
];

export default function MarketplaceNavigator() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
  <section className="bg-background py-24">
  <div className="mx-auto max-w-[1600px] px-6 lg:px-10">

    {/* Heading */}
    <div className="mb-16 text-center">

      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-border
          bg-surface
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-text-secondary
        "
      >
        MARKETPLACE CATEGORIES
      </span>

      <h2 className="mt-5 text-5xl font-bold text-primary">
        Expert Marketplace
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-text-secondary">
        Browse professional consulting categories and discover specialized
        business solutions from ATTPL&apos;s integrated consulting ecosystem.
      </p>

    </div>

    {/* Main Layout */}
    <div
  className="
    w-full
    overflow-hidden
    rounded-[32px]
    border
    border-border
    bg-surface
    shadow-xl
  "
>
      <div className="grid lg:grid-cols-[360px_1fr]">

        {/* LEFT NAV */}
        <div className="border-r border-border bg-background">

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category)}
              className={`
                group
                w-full
                border-b
                border-border
                p-6
                text-left
                transition-all
                duration-300

                ${
                  activeCategory.id === category.id
                    ? "border-l-4 border-l-gold bg-surface"
                    : "hover:bg-surface"
                }
              `}
            >

              <h3 className="text-lg font-semibold text-primary">
                {category.title}
              </h3>

              <p className="mt-2 text-sm text-text-secondary">
                {category.subtitle}
              </p>

            </button>
          ))}

        </div>

        {/* RIGHT CONTENT */}
       <div className="grid items-center gap-16 px-14 py-12 lg:grid-cols-[1.1fr_0.9fr] xl:px-16">

          {/* LEFT */}
          <div>

            <span
              className="
                rounded-full
                bg-gold-light
                px-4
                py-2
                text-sm
                font-medium
                text-gold
              "
            >
              {activeCategory.title}
            </span>

            <h3 className="mt-6 text-4xl font-bold text-primary">
              {activeCategory.title}
            </h3>

            <p className="mt-4 text-lg text-text-secondary">
              Explore professional services delivered by verified experts
              across India.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {activeCategory.services.map((service) => (
                <div
                  key={service}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-background
                    px-4
                    py-3
                    transition-colors
                    hover:bg-gold-light
                  "
                >

                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />

                  <span className="font-medium text-text">
                    {service}
                  </span>

                </div>
              ))}

            </div>

            <Button
              className="mt-8 px-6 py-3 text-base"
              href="/service-form"
            >
              Find Experts
            </Button>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
<div className="relative h-[480px] w-full overflow-hidden rounded-3xl">
              <Image
                src={activeCategory.image}
                alt={activeCategory.title}
                fill
                priority
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</section>
  );
}
