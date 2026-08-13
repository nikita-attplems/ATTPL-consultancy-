"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiCheckCircle,
  FiSearch,
  FiUsers,
  FiBriefcase,
  FiShield,
} from "react-icons/fi";

const trustItems = [
  "Verified Professionals",
  "150+ Core Services",
  "PAN India Coverage",
  "Business & Government Solutions",
];

const stats = [
  {
    value: "150+",
    label: "Core Services",
  },
  {
    value: "500+",
    label: "Specialized Services",
  },
  {
    value: "50+",
    label: "Industries",
  },
  {
    value: "PAN India",
    label: "Coverage",
  },
];

const floatingCards = [
  {
    title: "Verified Expert",
    subtitle: "Business Consultant",
    extra: "12+ Years Experience",
    icon: <FiUsers size={20} />,
    position: "md:top-0 md:left-[-2rem] lg:-left-14 lg:top-7",
  },
  {
    title: "Registration",
    subtitle: "Private Limited",
    extra: "LLP • OPC • MSME",
    icon: <FiBriefcase size={20} />,
    position: "md:top-4 md:right-[-2rem] lg:-right-12",
  },
  {
    title: "Compliance",
    subtitle: "ISO • GST • Legal",
    extra: "Trusted Experts",
    icon: <FiShield size={20} />,
    position: "md:bottom-4 md:left-[-1rem] lg:-left-12",
  },
  {
    title: "Technology",
    subtitle: "ERP • CRM",
    extra: "Digital Transformation",
    icon: <FiSearch size={20} />,
    position: "md:bottom-0 md:right-[-2rem] lg:-right-7",
  },
];

export default function MarketplaceHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-gold-light blur-3xl opacity-40" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-background blur-3xl opacity-60" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
          linear-gradient(to right, var(--primary) 1px, transparent 1px),
          linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
        `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
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
              ATTPL CONSULTANCY MARKETPLACE
            </span>

            <h1
              className="
            mt-8
            text-5xl
            font-bold
            leading-tight
            tracking-tight
            text-primary
            md:text-6xl
          "
            >
              India's Integrated
              <span className="block text-gold">Enterprise Consulting</span>
              Marketplace
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-text-secondary">
              Connect with verified consultants, chartered accountants, legal
              professionals, company secretaries, technology partners, and
              business specialists through one trusted enterprise marketplace.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              {/* Primary CTA */}
              <Link
                href="/service-form"
                className="
              inline-flex
              items-center
              rounded-xl
              bg-primary
              px-6
              py-4
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-primary-hover
            "
              >
                Find an Expert
                <FiArrowRight className="ml-2" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/#services"
                className="
              inline-flex
              items-center
              rounded-xl
              border
              border-border
              bg-surface
              px-6
              py-4
              text-sm
              font-semibold
              text-primary
              transition
              hover:border-primary
              hover:bg-primary
              hover:text-white
            "
              >
                Browse Services
              </Link>

              {/* Partner CTA */}
              <Link
                href="/service-form"
                className="
              inline-flex
              items-center
              rounded-xl
              border
              border-gold
              px-6
              py-4
              text-sm
              font-semibold
              text-gold
              transition
              hover:bg-gold
              hover:text-white
            "
              >
                Become a Partner
              </Link>
            </div>

            {/* Trust */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FiCheckCircle className="text-gold" />

                  <span className="text-sm font-medium text-text-secondary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div
              className="
            relative
            w-full
            max-w-xl
            min-h-fit
            md:h-[520px]
            lg:h-[600px]
            flex
            flex-col
            items-center
            justify-center
            gap-5
            md:block
          "
            >
              {/* Center Circle */}
              <div
                className="
              relative
              mx-auto
              flex
              h-44
              w-44
              sm:h-52
              sm:w-52
              md:absolute
              md:left-1/2
              md:top-1/2
              md:h-60
              md:w-60
              lg:h-72
              lg:w-72
              md:-translate-x-1/2
              md:-translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-surface
              shadow-2xl
            "
              >
                <div className="text-center">
                  {/* Logo */}
                  <div className="relative mx-auto h-32 w-28 sm:h-40 sm:w-36 md:h-52 md:w-44 lg:h-68 lg:w-58">
                    <Image
                      src="/logo/logo-crop.gif"
                      alt="ATTPL Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              {floatingCards.map((card) => (
                <div
                  key={card.title}
                  className={`
                ${card.position}
                md:absolute
                relative
                mx-auto
                mt-4
                md:mt-0
                w-full
                max-w-xs
                md:w-52
                lg:w-56
                rounded-2xl
                border
                border-border
                bg-surface
                p-5
                shadow-xl
                transition
                duration-300
                hover:-translate-y-2
              `}
                >
                  <div
                    className="
                  mb-4
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-gold-light
                  text-gold
                "
                  >
                    {card.icon}
                  </div>

                  <h4 className="font-semibold text-primary">{card.title}</h4>

                  <p className="mt-2 text-sm text-text-secondary">
                    {card.subtitle}
                  </p>

                  <span
                    className="
                  mt-3
                  inline-block
                  rounded-full
                  bg-background
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-text-secondary
                "
                  >
                    {card.extra}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className="
        mt-24
        grid
        gap-6
        rounded-3xl
        border
        border-border
        bg-surface
        p-8
        shadow-lg
        md:grid-cols-4
      "
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-4xl font-bold text-gold">{stat.value}</h3>

              <p className="mt-2 text-sm font-medium text-text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
