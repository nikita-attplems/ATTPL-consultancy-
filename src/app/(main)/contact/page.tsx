"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const contactCards = [
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    value: "info@attplgroup.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    value: "+91 98765 43210",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Corporate Office",
    value: "Jaipur, Rajasthan, India",
  },
];

const features = [
  "Verified Business Experts",
  "Tailored Consulting Solutions",
  "Fast Response & Assistance",
  "Nationwide Professional Network",
];

const process = [
  "Submit Your Inquiry",
  "Requirement Discussion",
  "Expert Assignment",
  "Professional Consultation",
];

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="bg-[#FFFDF8] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          
          <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-6xl">
            Let's Discuss Your
            <span className="text-blue-600"> Business Goals</span>
          </h2>

       
        </div>

        {/* Main Grid */}

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left */}

          <div className="space-y-8 lg:col-span-7">
            {/* Form */}

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900">
                  Send an Inquiry
                </h3>

                <p className="mt-3 text-gray-600">
                  Fill out the form below and one of our consultants will get
                  back to you shortly.
                </p>
              </div>

           <form className="space-y-6">
  <input
    type="text"
    placeholder="Full Name"
    className="w-full rounded-xl border border-gray-200 bg-[#FFFDF8] px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
  />

  <div className="grid gap-6 md:grid-cols-2">
    <input
      type="email"
      placeholder="Email Address"
      className="rounded-xl border border-gray-200 bg-[#FFFDF8] px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
    />

    <input
      type="tel"
      placeholder="Phone Number"
      className="rounded-xl border border-gray-200 bg-[#FFFDF8] px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
    />
  </div>

  <select className="w-full rounded-xl border border-gray-200 bg-[#FFFDF8] px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100">
    <option>Select Service</option>
    <option>Corporate Advisory</option>
    <option>Business Consultancy</option>
    <option>Registration Services</option>
    <option>Certification Services</option>
    <option>Project Consulting</option>
    <option>Subsidy Consulting</option>
    <option>Legal Advisory</option>
    <option>CA & Accounting Services</option>
    <option>Compliance Management</option>
  </select>

  <textarea
    rows={6}
    placeholder="Tell us about your business requirements..."
    className="w-full rounded-xl border border-gray-200 bg-[#FFFDF8] px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
  />

  <button
    type="submit"
    className="group flex items-center gap-3 rounded-xl bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-600"
  >
    Send Inquiry

    <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
  </button>
</form>
            </div>

            {/* Why Choose */}

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">
                Why Businesses Choose ATTPL
              </h3>

              <p className="mt-3 text-gray-600">
                Trusted consulting solutions designed to help organizations
                achieve sustainable growth.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl bg-blue-50 p-4"
                  >
                    <FaCheckCircle className="text-blue-600" />

                    <span className="font-medium text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="space-y-8 lg:col-span-5">
            {/* Contact Cards */}

            <div className="space-y-5">
              {contactCards.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg"
                >
                  <div className="flex items-start gap-5">
                    <div className="rounded-2xl bg-blue-50 p-4 text-2xl text-blue-600 transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-gray-600">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

         
            {/* Consultation Process */}

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">
                Consultation Journey
              </h3>

              <div className="mt-8 space-y-6">
                {process.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{step}</h4>

                      {index !== process.length - 1 && (
                        <div className="mt-4 ml-4 h-10 w-px bg-gray-300" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}

            <div className="rounded-3xl bg-blue-600 p-8 text-white">
              <h3 className="text-2xl font-bold">
                Ready to Grow Your Business?
              </h3>

              <p className="mt-4 leading-7 text-blue-100">
                Schedule a consultation with our experienced professionals and
                discover solutions tailored to your business objectives.
              </p>

              <button className="group mt-8 flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition-all duration-300 hover:bg-black hover:text-white">
                Book Consultation

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}