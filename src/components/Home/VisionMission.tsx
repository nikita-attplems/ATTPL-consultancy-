import { FiEye, FiTarget } from "react-icons/fi";

export default function VisionMission() {
  return (
    <section className="bg-[#FFFDF8] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
         

             <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Vision & Mission
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Driving business excellence through integrated consulting,
            compliance, legal advisory, digital transformation, and strategic
            growth solutions for startups, SMEs, enterprises, institutions, and
            government organizations.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Vision */}
          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <FiEye size={28} />
            </div>

            <h3 className="mb-5 text-3xl font-bold text-gray-900">
              Our Vision
            </h3>

            <p className="leading-8 text-gray-600">
              To become India's most trusted enterprise consulting ecosystem by
              delivering integrated business consulting, corporate advisory,
              legal, compliance, financial, and digital transformation services
              through one intelligent platform. We aspire to empower
              organizations with expert guidance that accelerates innovation,
              sustainable growth, and global competitiveness.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <FiTarget size={28} />
            </div>

            <h3 className="mb-5 text-3xl font-bold text-gray-900">
              Our Mission
            </h3>

            <p className="leading-8 text-gray-600">
              Our mission is to simplify business growth by providing company
              registration, certification, compliance management, chartered
              accountant services, legal advisory, project consulting, AI-driven
              business solutions, and strategic consulting under one unified
              ecosystem. We help startups, SMEs, enterprises, and institutions
              make informed decisions with confidence and achieve long-term
              success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}