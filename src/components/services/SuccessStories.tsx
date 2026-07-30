"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const stories = [
  {
    title: "Connecting Businesses with Verified Experts",

    challenge:
      "Organizations often struggle to find reliable professionals with the right expertise, industry experience, and practical approach to solve complex business challenges.",

    solution:
      "ATTPL Marketplace connects businesses with verified consultants and service providers who deliver tailored guidance, strategic planning, and end-to-end professional support across multiple domains.",

    result:
      "Businesses gain access to trusted expertise, make informed decisions, reduce operational risks, and achieve sustainable growth with confidence.",

    image: "/services/bp.jpg",
  },

  {
    title: "Delivering Customized Professional Solutions",

    challenge:
      "Every organization has unique objectives, operational requirements, and regulatory responsibilities that require specialized expertise rather than one-size-fits-all solutions.",

    solution:
      "Our marketplace enables businesses to collaborate with experienced professionals who provide customized strategies, practical recommendations, and implementation support aligned with specific business goals.",

    result:
      "Organizations improve operational efficiency, strengthen business performance, and achieve measurable outcomes through personalized professional services.",

    image: "/services/ps.jpg",
  },

  {
    title: "Building Long-Term Business Success",

    challenge:
      "Growing businesses require continuous professional support to adapt to changing market conditions, evolving regulations, and emerging opportunities.",

    solution:
      "ATTPL Marketplace offers access to a diverse network of experts across consulting, legal, financial, technology, compliance, taxation, and other professional services to support long-term business success.",

    result:
      "Organizations build stronger foundations, improve competitiveness, accelerate innovation, and achieve sustainable growth with ongoing expert guidance.",

    image: "/services/lts.jpg",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-yellow-200 bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-700">
            Success Stories
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0B1B3A] md:text-5xl">
            Real Business Transformations
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Discover how ATTPL Marketplace consultants have helped businesses
            overcome challenges, implement innovative solutions, and achieve
            measurable growth across industries.
          </p>
        </div>

        {/* Stories */}
        <div className="space-y-28">
          {stories.map((story, index) => (
            <div
              key={story.title}
              className={`group grid items-center gap-14 transition-all duration-500 hover:-translate-y-1 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              } lg:grid-cols-2`}
            >
              {/* Image */}
              <div className="group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={800}
                  height={550}
                  className="h-[420px] w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A]/40 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div>
                <span className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500 transition-all duration-300 group-hover:tracking-[0.35em]">
                  Case Study
                </span>

                <h3 className="mt-3 text-3xl font-bold leading-tight text-[#0B1B3A]">
                  {story.title}
                </h3>

                <div className="mt-8 space-y-7">
                  <div className="flex gap-4 rounded-xl transition-all duration-300 hover:translate-x-2">
                    <FaCheckCircle className="mt-1 shrink-0 text-yellow-500" />

                    <div>
                      <h4 className="font-semibold text-[#0B1B3A]">
                        Challenge
                      </h4>

                      <p className="mt-2 leading-7 text-slate-600">
                        {story.challenge}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl transition-all duration-300 hover:translate-x-2">
                    <FaCheckCircle className="mt-1 shrink-0 text-yellow-500" />

                    <div>
                      <h4 className="font-semibold text-[#0B1B3A]">Solution</h4>

                      <p className="mt-2 leading-7 text-slate-600">
                        {story.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl transition-all duration-300 hover:translate-x-2">
                    <FaCheckCircle className="mt-1 shrink-0 text-green-600" />

                    <div>
                      <h4 className="font-semibold text-[#0B1B3A]">Results</h4>

                      <p className="mt-2 leading-7 text-slate-600">
                        {story.result}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-[#0B1B3A] transition-all duration-500 group-hover:w-40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
