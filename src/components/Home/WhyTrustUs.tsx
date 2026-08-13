import {
  FiShield,
  FiUsers,
  FiGlobe,
  FiCpu,
  FiTrendingUp,
  FiCheckCircle,

} from "react-icons/fi";

const trustPoints = [
  {
    icon: FiUsers,
    title: "Integrated Expert Network",
    description:
      "Connect with experienced consultants, corporate advisors, chartered accountants, legal professionals, compliance specialists, and industry experts through one integrated ecosystem.",
  },
  {
    icon: FiShield,
    title: "End-to-End Compliance",
    description:
      "From registrations and certifications to taxation, legal advisory, and regulatory compliance, we help organizations navigate every stage with confidence.",
  },
  {
    icon: FiTrendingUp,
    title: "Growth-Focused Strategy",
    description:
      "Transform business challenges into opportunities through strategic planning, operational improvement, market expansion, and sustainable growth initiatives.",
  },
  {
    icon: FiCpu,
    title: "AI & Digital Transformation",
    description:
      "Adopt intelligent technologies, automation, digital workflows, and AI-powered solutions that improve decision-making, productivity, and operational efficiency.",
  },
  {
    icon: FiGlobe,
    title: "India & Global Reach",
    description:
      "Support businesses across India while helping organizations prepare for international expansion, cross-border opportunities, and global market requirements.",
  },
  {
    icon: FiCheckCircle,
    title: "One Unified Ecosystem",
    description:
      "Bring consulting, registration, certification, legal, financial, compliance, technology, and strategic services together through one trusted platform.",
  },
];

export default function WhyTrustUs() {
  return (
  <section className="relative overflow-hidden bg-background py-10">
  {/* ================= BACKGROUND ================= */}

  <div className="pointer-events-none absolute inset-0">


    {/* Glow */}
    <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]" />

    <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-border/30 blur-[120px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mb-16 grid items-end gap-8 lg:grid-cols-[1fr_420px]">

      <div>

        {/* Small Label */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Why ATTPL
          </span>
        </div>

        <h2 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Built to be your
          <br />
          <span className="text-gold">
            long-term growth partner.
          </span>
        </h2>

      </div>

      <div>
        <p className="text-base leading-8 text-text-secondary md:text-lg">
          We combine professional expertise, strategic thinking,
          technology, and compliance knowledge to help organizations make
          better decisions and build stronger businesses.
        </p>
      </div>

    </div>

    {/* ================= TRUST GRID ================= */}

    <div className="grid gap-5 lg:grid-cols-12">

      {trustPoints.map((item, index) => {
        const Icon = item.icon;

        /*
         * First card is featured.
         */
        const featured = index === 0;

        return (
          <div
            key={item.title}
            className={`
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-border
              bg-surface
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-gold/40
              hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.18)]
              ${
                featured
                  ? "lg:col-span-7 lg:p-10"
                  : index === 1
                    ? "lg:col-span-5"
                    : "lg:col-span-4"
              }
            `}
          >

            {/* Hover Background */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

            {/* Animated Top Border */}
            <div className="absolute left-0 top-0 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />

            {/* Number */}
            <span
              className="
                absolute
                right-7
                top-5
                text-7xl
                font-black
                tracking-tighter
                text-surface-secondary
                transition-all
                duration-500
                group-hover:text-gold/10
                group-hover:scale-105
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Icon */}
            <div className="relative mb-8">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary
                  text-white
                  shadow-lg
                  transition-all
                  duration-500
                  group-hover:bg-gold
                  group-hover:scale-110
                  group-hover:rotate-3
                "
              >
                <Icon size={25} />
              </div>

            </div>

            {/* Content */}
            <div className="relative max-w-xl">

              <h3
                className="
                  mb-4
                  text-2xl
                  font-bold
                  tracking-tight
                  text-primary
                  transition-colors
                  duration-300
                  group-hover:text-gold
                "
              >
                {item.title}
              </h3>

              <p className="text-[15px] leading-7 text-text-secondary">
                {item.description}
              </p>

            </div>

            {/* Footer */}
            <div className="relative mt-8 flex items-center justify-between">

              <div
                className="
                  h-px
                  w-16
                  bg-border
                  transition-all
                  duration-500
                  group-hover:w-32
                  group-hover:bg-gold/40
                "
              />

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  text-muted
                  transition-all
                  duration-500
                  group-hover:border-gold/40
                  group-hover:bg-gold/10
                  group-hover:text-gold
                "
              >
             
              </div>

            </div>

          </div>
        );
      })}

    </div>

    {/* ================= BOTTOM TRUST BAR ================= */}

    <div className="mt-8 overflow-hidden rounded-[2rem] border border-primary/15 bg-white shadow-sm">
  <div className="grid md:grid-cols-3">

    {/* Approach */}
    <div className="group border-b border-primary/10 p-8 md:border-b-0 md:border-r">
      <div className="mb-3 text-sm font-medium uppercase tracking-widest text-text-secondary">
        Approach
      </div>

      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-primary">
          Expertise
        </span>

      
      </div>
    </div>

    {/* Philosophy */}
    <div className="group border-b border-primary/10 p-8 md:border-b-0 md:border-r">
      <div className="mb-3 text-sm font-medium uppercase tracking-widest text-text-secondary">
        Philosophy
      </div>

      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-primary">
          Transparency
        </span>

      </div>
    </div>

    {/* Commitment */}
    <div className="group p-8">
      <div className="mb-3 text-sm font-medium uppercase tracking-widest text-text-secondary">
        Commitment
      </div>

      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-primary">
          Long-Term Growth
        </span>

        
      </div>
    </div>

  </div>
</div>

    {/* ================= FINAL STATEMENT ================= */}

    <div className="mx-auto mt-16 max-w-3xl text-center">

      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
        <FiShield size={21} />
      </div>

      <h3 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
        One platform. Multiple capabilities.
      </h3>

      <p className="mt-4 leading-7 text-text-secondary">
        From your first business decision to your next stage of growth,
        ATTPL brings the right expertise, services, and technology together
        in one ecosystem.
      </p>

    </div>

  </div>
</section>
  );
}