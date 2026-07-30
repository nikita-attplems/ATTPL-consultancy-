"use client";

import {
  FaComments,
  FaSearch,
  FaLightbulb,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";

import { ServiceProcessData } from "@/types/ServiceProcessData";

interface Props {
  data: ServiceProcessData;
}

const iconMap = {
  consultation: FaComments,
  analysis: FaSearch,
  strategy: FaLightbulb,
  implementation: FaRocket,
  support: FaHandshake,
};

export default function ServiceProcess({ data }: Props) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Timeline */}

        {/* Process Layout */}

        <div className="mt-20 grid items-start gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
              OUR PROCESS
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight text-[#0B1B3A]">
              A Simple &
              <br />
              Structured
              <br />
              Approach
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Our proven engagement process ensures every client receives
              personalized guidance, strategic planning and continuous support
              from experienced professionals throughout the journey.
            </p>
          </div>

          {/* Timeline */}

          <div>
            {data.steps.map((step, index) => {
              const Icon =
                iconMap[step.icon as keyof typeof iconMap] || FaComments;

              return (
                <div key={step.title} className="relative flex gap-4">
                  {/* Left */}

                  <div className="flex flex-col items-center self-stretch">
                    <div
                      className="
                flex h-10 w-10 items-center justify-center
                rounded-full border-2 border-yellow-400
                bg-white shadow-md
                transition-all duration-300
                hover:scale-110
                hover:bg-yellow-400
                group
              "
                    >
                      <Icon className="text-md text-[#0B1B3A] group-hover:text-white" />
                    </div>

                    {index !== data.steps.length - 1 && (
                      <div className="mt-2 h-10 w-[2px] bg-gradient-to-b from-yellow-400 via-yellow-300 to-slate-200" />
                    )}
                  </div>

                  {/* Right */}

                  <div className="pb-9">
                    <span className="text-md font-semibold uppercase tracking-[0.2em] text-yellow-500">
                      Step {(index + 1).toString().padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-[#0B1B3A]">
                      {step.title}
                    </h3>

                    {/* <p className="mt-2 leading-7 text-slate-600">
              {step.description}
            </p> */}
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
