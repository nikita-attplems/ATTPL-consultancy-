import {
  FiShield,
  FiUsers,
  FiGlobe,
  FiCpu,
  FiTrendingUp,
  FiCheckCircle,
  FiArrowUpRight,
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
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 lg:py-32">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-200/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= HEADER ================= */}

        <div className="mb-16 grid items-end gap-8 lg:grid-cols-[1fr_420px]">
          <div>
            {/* Small Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why ATTPL
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Built to be your
              <br />
              <span className="text-blue-600">long-term growth partner.</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-600 md:text-lg">
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
                  group relative overflow-hidden rounded-[2rem]
                  border border-slate-200
                  bg-white
                  p-8
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-blue-200
                  hover:shadow-[0_25px_60px_-20px_rgba(15,23,42,0.18)]
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
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-50 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                {/* Animated Top Border */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-blue-600 transition-all duration-700 group-hover:w-full" />

                {/* Number */}
                <span
                  className="
                    absolute right-7 top-5
                    text-7xl font-black
                    tracking-tighter
                    text-slate-100
                    transition-all duration-500
                    group-hover:text-blue-50
                    group-hover:scale-105
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative mb-8">
                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      bg-slate-950
                      text-white
                      shadow-lg
                      transition-all duration-500
                      group-hover:bg-blue-600
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
                      text-2xl font-bold
                      tracking-tight
                      text-slate-950
                      transition-colors duration-300
                      group-hover:text-blue-600
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="relative mt-8 flex items-center justify-between">
                  <div className="h-px w-16 bg-slate-200 transition-all duration-500 group-hover:w-32 group-hover:bg-blue-200" />

                  <div
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-slate-200
                      text-slate-400
                      transition-all duration-500
                      group-hover:border-blue-200
                      group-hover:bg-blue-50
                      group-hover:text-blue-600
                    "
                  >
                    <FiArrowUpRight size={17} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM TRUST BAR ================= */}

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950">
          <div className="grid md:grid-cols-3">
            {/* Item */}
            <div className="group border-b border-white/10 p-8 md:border-b-0 md:border-r">
              <div className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-400">
                Approach
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white">
                  Expertise
                </span>

                <FiArrowUpRight className="text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </div>

            {/* Item */}
            <div className="group border-b border-white/10 p-8 md:border-b-0 md:border-r">
              <div className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-400">
                Philosophy
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white">
                  Transparency
                </span>

                <FiArrowUpRight className="text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </div>

            {/* Item */}
            <div className="group p-8">
              <div className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-400">
                Commitment
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white">
                  Long-Term Growth
                </span>

                <FiArrowUpRight className="text-blue-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= FINAL STATEMENT ================= */}

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600">
            <FiShield size={21} />
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
            One platform. Multiple capabilities.
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            From your first business decision to your next stage of growth,
            ATTPL brings the right expertise, services, and technology together
            in one ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}