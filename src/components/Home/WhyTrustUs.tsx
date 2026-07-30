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
      "Access experienced business consultants, corporate advisors, chartered accountants, legal professionals, compliance specialists, and industry experts through one unified consulting ecosystem.",
  },
  {
    icon: FiShield,
    title: "End-to-End Business Compliance",
    description:
      "From company registration and certifications to legal advisory, taxation, and regulatory compliance, we help businesses stay compliant at every stage of growth.",
  },
  {
    icon: FiTrendingUp,
    title: "Growth-Focused Consulting",
    description:
      "Our strategic consulting services are designed to improve operational efficiency, business performance, market expansion, fundraising readiness, and long-term enterprise growth.",
  },
  {
    icon: FiCpu,
    title: "AI-Enabled Business Solutions",
    description:
      "Leverage AI-powered business assessment, smart consulting recommendations, digital transformation strategies, and intelligent workflow automation for faster decision-making.",
  },
  {
    icon: FiGlobe,
    title: "PAN India & Global Support",
    description:
      "Serving startups, SMEs, enterprises, institutions, and government organizations across India while supporting businesses with international expansion and global market readiness.",
  },
  {
    icon: FiCheckCircle,
    title: "One Unified Consulting Ecosystem",
    description:
      "Business consulting, company registration, ISO certification, legal advisory, CA services, compliance management, project consulting, and digital transformation—all from a single trusted platform.",
  },
];

export default function WhyTrustUs() {
  return (
    <section className="bg-[#FFFDF8]   py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Why Trust ATTPL Consultancy Services?
          </h2>

        
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-[#F8FAFC] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
       
      </div>
    </section>
  );
}