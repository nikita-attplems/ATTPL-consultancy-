import { FiArrowUpRight, FiEye, FiTarget } from "react-icons/fi";

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">

  {/* Background Decoration */}
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

  <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-border/40 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* Section Header */}
    <div className="mx-auto mb-16 max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-gold">
        OUR DIRECTION
      </span>

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
        Vision &{" "}
        <span className="text-gold">
          Mission
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-text-secondary md:text-lg">
        Driving business excellence through integrated consulting,
        compliance, legal advisory, digital transformation, and strategic
        growth solutions for startups, SMEs, enterprises, institutions,
        and government organizations.
      </p>

    </div>

    {/* Vision & Mission Cards */}
    <div className="grid gap-7 lg:grid-cols-2">

      {/* Vision */}
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-border
          bg-surface
          p-8
          shadow-sm
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-gold/40
          hover:shadow-2xl
          lg:p-10
        "
      >

        {/* Top Accent */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-gold to-gold/30" />

        {/* Decorative Number */}
        <div
          className="
            absolute
            right-6
            top-4
            text-8xl
            font-black
            text-surface-secondary
            transition-colors
            duration-500
            group-hover:text-gold/10
          "
        >
          01
        </div>

        <div className="relative">

          {/* Icon */}
          <div className="mb-8 flex items-center justify-between">

            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gold
                text-white
                shadow-lg
                shadow-gold/20
                transition-transform
                duration-500
                group-hover:scale-110
              "
            >
              <FiEye size={30} />
            </div>

            <FiArrowUpRight
              size={24}
              className="
                text-muted
                transition-all
                duration-500
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-gold
              "
            />

          </div>

          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Where We Are Going
          </p>

          <h3 className="mb-6 text-3xl font-bold text-primary">
            Our Vision
          </h3>

          <p className="text-base leading-8 text-text-secondary lg:text-lg">
            To become India&apos;s most trusted enterprise consulting
            ecosystem by delivering integrated business consulting,
            corporate advisory, legal, compliance, financial, and digital
            transformation services through one intelligent platform.
          </p>

          <p className="mt-5 text-base leading-8 text-text-secondary lg:text-lg">
            We aspire to empower organizations with expert guidance that
            accelerates innovation, sustainable growth, and global
            competitiveness.
          </p>

        </div>
      </div>

      {/* Mission */}
   <div
  className="
    group
    relative
    overflow-hidden
    rounded-[2rem]
    border
    border-border
    bg-surface
    p-8
    text-primary
    shadow-sm
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-gold/40
    hover:shadow-2xl
    lg:p-10
  "
>
  {/* Top Accent */}
  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-gold to-gold/30" />

  {/* Decorative Number */}
  <div
    className="
      absolute
      right-6
      top-4
      text-8xl
      font-black
      text-surface-secondary
      transition-colors
      duration-500
      group-hover:text-gold/10
    "
  >
    02
  </div>

  <div className="relative">

    {/* Icon */}
    <div className="mb-8 flex items-center justify-between">

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gold
          text-white
          shadow-lg
          shadow-gold/30
          transition-transform
          duration-500
          group-hover:scale-110
        "
      >
        <FiTarget size={30} />
      </div>

      <FiArrowUpRight
        size={24}
        className="
          text-muted
          transition-all
          duration-500
          group-hover:-translate-y-1
          group-hover:translate-x-1
          group-hover:text-gold
        "
      />

    </div>

    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
      What Drives Us
    </p>

    <h3 className="mb-6 text-3xl font-bold text-primary">
      Our Mission
    </h3>

    <p className="text-base leading-8 text-text-secondary lg:text-lg">
      Our mission is to simplify business growth by providing
      company registration, certification, compliance management,
      chartered accountant services, legal advisory, project
      consulting, AI-driven business solutions, and strategic
      consulting under one unified ecosystem.
    </p>

    <p className="mt-5 text-base leading-8 text-text-secondary lg:text-lg">
      We help startups, SMEs, enterprises, and institutions make
      informed decisions with confidence and achieve long-term
      success.
    </p>

  </div>
</div>

    </div>

    {/* Bottom Statement */}
    <div className="mx-auto mt-12 max-w-3xl text-center">

      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

      <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-text-secondary">
        One Ecosystem • Expert Guidance • Sustainable Growth
      </p>

    </div>

  </div>
</section>
  );
}