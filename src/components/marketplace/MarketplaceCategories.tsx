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
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
            MARKETPLACE CATEGORIES
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Expert Marketplace
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Browse professional consulting categories and discover specialized
            business solutions from ATTPL's integrated consulting ecosystem.
          </p>
        </div>

        {/* Main Layout */}

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">
          <div className="grid lg:grid-cols-[330px_1fr]">
            {/* LEFT NAV */}

            <div className="border-r border-slate-200 bg-slate-50">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  className={`group w-full border-b border-slate-200 p-6 text-left transition-all duration-300 ${
                    activeCategory.id === category.id
                      ? "bg-white border-l-4 border-l-[#FBB040]"
                      : "hover:bg-white"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {category.subtitle}
                  </p>
                </button>
              ))}
            </div>

            {/* RIGHT CONTENT */}

            <div className="grid items-center gap-12 p-10 lg:grid-cols-2">
              {/* LEFT */}

              <div>
                <span className="rounded-full bg-[#3A87C3]/10 px-4 py-2 text-sm font-medium text-[#3A87C3]">
                  {activeCategory.title}
                </span>

                <h3 className="mt-6 text-4xl font-bold text-slate-900">
                  {activeCategory.title}
                </h3>

                <p className="mt-4 text-lg text-slate-600">
                  Explore professional services delivered by verified experts
                  across India.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {activeCategory.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[#FBB040]" />

                      <span className="font-medium text-slate-700">
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
                <div className="relative h-[450px] w-full max-w-md overflow-hidden rounded-3xl">
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
