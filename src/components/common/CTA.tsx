"use client";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function CTA() {
  return (
  <section className="py-20 bg-background">
  <div className="mx-auto max-w-7xl px-6">

    <div
      className="
        flex
        flex-col
        items-center
        justify-between
        gap-8
        rounded-3xl
        border
        border-border
        bg-surface-secondary
        px-8
        py-10
        lg:flex-row
        lg:px-14
      "
    >

      {/* Left */}

      <div className="max-w-3xl">

        <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
          Find the Right Consultant for Your Business?
        </h2>

        <p className="mt-3 text-lg leading-7 text-text-secondary">
          Access verified legal professionals, Chartered Accountants,
          consultants and industry experts across multiple business sectors.
        </p>

      </div>

      {/* Right */}

      <div className="flex flex-wrap gap-4">

        <Link
          href="/marketplace"
          className="
            rounded-xl
            bg-primary
            px-7
            py-3
            font-semibold
            text-white
            transition
            hover:bg-primary-hover
          "
        >
          Explore Marketplace
        </Link>

        <Link
          href="/contact"
          className="
            group
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-border-dark
            bg-surface
            px-7
            py-3
            font-semibold
            text-primary
            transition
            hover:border-gold
            hover:text-gold
          "
        >
          Contact Expert

          <FaArrowRight
            className="
              transition-transform
              group-hover:translate-x-1
            "
          />
        </Link>

      </div>

    </div>

  </div>
</section>
  );
}