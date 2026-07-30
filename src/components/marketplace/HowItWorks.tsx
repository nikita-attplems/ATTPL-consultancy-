"use client";

import { FiGrid, FiFileText, FiUsers, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    id: "01",
    title: "Choose Service",
    description:
      "Browse our marketplace and choose the consultancy category that fits your business needs.",
    icon: FiGrid,
  },
  {
    id: "02",
    title: "Submit Requirement",
    description:
      "Complete a simple consultation form with your project details and objectives.",
    icon: FiFileText,
  },
  {
    id: "03",
    title: "Expert Consultation",
    description:
      "Our specialists review your request and connect you with the right consultants.",
    icon: FiUsers,
  },
  {
    id: "04",
    title: "Project Execution",
    description:
      "Receive end-to-end consulting support with measurable business outcomes.",
    icon: FiCheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            A Simple Four-Step Process
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Getting started with ATTPL is straightforward. Follow these simple
            steps to connect with the right consulting experts.
          </p>
        </div>

        {/* Process */}

        <div className="relative grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* Connecting Line */}
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-[2px] bg-slate-200 xl:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.id} className="relative text-center">
                {/* Circle */}

                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#F8FAFC] bg-[#FBB040] shadow-lg">
                  <Icon className="text-3xl text-white" />
                </div>

                {/* Step */}

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.4em] text-[#FBB040]">
                  Step {step.id}
                </p>

                {/* Title */}

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
