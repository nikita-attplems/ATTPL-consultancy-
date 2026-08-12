"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Founder = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] py-24 lg:py-32">
    
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-gray-200
            bg-white
            px-8
            py-16
            text-center
            shadow-[0_20px_70px_rgba(0,0,0,0.06)]
            md:px-14
            lg:px-20
            lg:py-20
          "
        >
          {/* Top Accent */}
          <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 bg-yellow-500" />

          {/* Small Label */}
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-blue-600" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Leadership
            </span>

            <span className="h-px w-10 bg-blue-600" />
          </div>

          {/* Heading */}
          <h2
            className="
              text-4xl
              font-light
              leading-[1.05]
              tracking-[-0.04em]
              text-gray-900
              md:text-6xl
              lg:text-7xl
            "
          >
            Meet the Vision
            <br />
            <span className="font-semibold text-blue-600">
              Behind Our Journey
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-gray-500
              md:text-lg
            "
          >
            Discover the vision, leadership, and journey of our founder
            and explore the ideas shaping the future of our organization.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://ashokgodara.com"
              
              rel="noopener noreferrer"
              className="
                group
                relative
                inline-flex
                items-center
                gap-5
                overflow-hidden
                rounded-full
                bg-blue-600
                px-9
                py-5
                text-base
                font-semibold
                text-white
                shadow-[0_12px_30px_rgba(37,99,235,0.20)]
                transition-all
                duration-500
                hover:bg-yellow-500
                hover:text-gray-900
                hover:shadow-[0_18px_40px_rgba(234,179,8,0.25)]
                md:px-10
                md:py-5
                md:text-lg
              "
            >
              {/* Hover Shine */}
              <span
                className="
                  absolute
                  inset-y-0
                  -left-20
                  w-10
                  rotate-[20deg]
                  bg-white/30
                  blur-sm
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                "
              />

              <span className="relative">
                Visit Founder’s Website
              </span>

              {/* Arrow Circle */}
              <span
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  transition-all
                  duration-500
                  group-hover:bg-black/10
                  group-hover:rotate-45
                "
              >
                <FiArrowUpRight className="text-xl" />
              </span>
            </a>
          </div>

          {/* Bottom Accent */}
          <div className="mx-auto mt-12 h-px max-w-xs bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Founder;