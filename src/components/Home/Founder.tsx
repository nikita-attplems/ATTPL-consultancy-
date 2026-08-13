"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Founder = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">

      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">

        {/* Soft multi-tone radial background */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_12%_18%,rgba(118,80,111,0.08),transparent_32%),
                radial-gradient(circle_at_88%_25%,rgba(79,118,94,0.07),transparent_30%),
                radial-gradient(circle_at_50%_100%,rgba(176,141,87,0.06),transparent_35%)]
          "
        />

        {/* Left brand glow */}
        <div
          className="
            absolute
            -left-40
            top-1/4
            h-80
            w-80
            rounded-full
            bg-[#76506F]/[0.055]
            blur-3xl
          "
        />

        {/* Right brand glow */}
        <div
          className="
            absolute
            -right-40
            top-1/3
            h-96
            w-96
            rounded-full
            bg-[#4F765E]/[0.055]
            blur-3xl
          "
        />

        {/* Small warm glow */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-[#B08D57]/[0.035]
            blur-3xl
          "
        />

        {/* Subtle architectural grid */}
 <div
  className="
    absolute
    inset-0
    opacity-[0.085]
    [background-image:linear-gradient(to_right,#76566F_1px,transparent_1px),linear-gradient(to_bottom,#76566F_1px,transparent_1px)]
    [background-size:56px_56px]
  "
/>

      </div>


      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">

        <div
  className="
    group
    relative
    overflow-hidden
    rounded-[2rem]
    border
    border-border
    bg-white/95
    px-8
    py-16
    text-center
    shadow-[0_20px_70px_rgba(0,0,0,0.07)]
    backdrop-blur-sm
    transition-all
    duration-700
    ease-out
    hover:-translate-y-2
    hover:shadow-[0_30px_90px_rgba(41,41,41,0.12)]
    md:px-14
    lg:px-20
    lg:py-20
  "
>

          {/* =====================================================
              INNER DECORATIVE GLOW
          ===================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-[#76506F]/[0.035]
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-24
              h-64
              w-64
              rounded-full
              bg-[#4F765E]/[0.035]
              blur-3xl
            "
          />


          {/* =====================================================
              TOP ACCENT
          ===================================================== */}
          <div
            className="
              absolute
              left-1/2
              top-0
              h-1
              w-24
              -translate-x-1/2
              rounded-b-full
              bg-gold
            "
          />


          {/* =====================================================
              SMALL LABEL
          ===================================================== */}
          <div className="relative mb-7 flex items-center justify-center gap-4">

            <span className="h-px w-10 bg-gold" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-gold
              "
            >
              Leadership
            </span>

            <span className="h-px w-10 bg-gold" />

          </div>


          {/* =====================================================
              HEADING
          ===================================================== */}
          <h2
            className="
              relative
              text-4xl
              font-light
              leading-[1.05]
              tracking-[-0.04em]
              text-primary
              md:text-6xl
              lg:text-7xl
            "
          >
            Meet the Vision
            <br />

            <span className="font-semibold text-gold">
              Behind Our Journey
            </span>
          </h2>


          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <p
            className="
              relative
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-text-secondary
              md:text-lg
            "
          >
            Discover the vision, leadership, and journey of our founder
            and explore the ideas shaping the future of our organization.
          </p>


          {/* =====================================================
              CTA
          ===================================================== */}
          <div className="relative mt-10 flex justify-center">

            <a
              href="https://ashokgodara.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                inline-flex
                items-center
                gap-5
                overflow-hidden
                rounded-full
                bg-primary
                px-9
                py-5
                text-base
                font-semibold
                text-white
                shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                transition-all
                duration-500
                hover:-translate-y-0.5
                hover:bg-gold
                hover:text-primary
                hover:shadow-[0_18px_40px_rgba(118,80,111,0.22)]
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


              {/* CTA Text */}
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


          {/* =====================================================
              BOTTOM ACCENT
          ===================================================== */}
          <div
            className="
              relative
              mx-auto
              mt-12
              h-px
              max-w-xs
              bg-gradient-to-r
              from-transparent
              via-gold/50
              to-transparent
            "
          />

        </div>

      </div>

    </section>
  );
};

export default Founder;