
"use client";

import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { toggleDivision } from "@/redux/slices/esccomSlice";

/* ======================================================
   CONSULTANCY SERVICE CATEGORIES
====================================================== */

const consultancyServices: Record<string, string[]> = {
  "BUSINESS & MANAGEMENT CONSULTING": [
    "Business Strategy Consulting",
    "Business Planning",
    "Business Model Development",
    "Growth Strategy",
    "Market Entry Strategy",
    "Operational Consulting",
    "Process Improvement",
    "Performance Management",
    "Organizational Development",
  ],

  "CORPORATE & ENTERPRISE CONSULTING": [
    "Corporate Advisory",
    "Corporate Strategy",
    "Corporate Restructuring",
    "Corporate Governance",
    "Mergers & Acquisitions Advisory",
    "Due Diligence Advisory",
    "Risk Management",
    "Compliance Consulting",
    "Enterprise Transformation",
  ],

  "STARTUP & ENTREPRENEURSHIP CONSULTING": [
    "Startup Consulting",
    "Startup Strategy",
    "Business Idea Validation",
    "Startup Registration Guidance",
    "Founder Advisory",
    "Fundraising Advisory",
    "Investor Readiness",
    "Pitch Deck Consulting",
    "Startup Growth Strategy",
  ],

  "FINANCIAL & INVESTMENT CONSULTING": [
    "Financial Planning",
    "Investment Advisory",
    "Business Valuation",
    "Financial Modeling",
    "Budget Planning",
    "Investment Strategy",
    "Fundraising Strategy",
    "Capital Structuring",
    "Financial Risk Assessment",
  ],

  "MARKETING & BRAND CONSULTING": [
    "Marketing Strategy",
    "Digital Marketing Consulting",
    "Brand Strategy",
    "Brand Development",
    "Market Research",
    "Customer Research",
    "Social Media Strategy",
    "Content Strategy",
    "Lead Generation Strategy",
  ],

  "TECHNOLOGY & DIGITAL CONSULTING": [
    "Digital Transformation",
    "Technology Strategy",
    "IT Consulting",
    "Software Consulting",
    "AI Consulting",
    "Automation Consulting",
    "Data & Analytics Consulting",
    "Cybersecurity Consulting",
    "Technology Implementation Advisory",
  ],

  "HR & ORGANIZATION CONSULTING": [
    "HR Consulting",
    "Talent Management",
    "Recruitment Strategy",
    "Employee Engagement",
    "Performance Management",
    "Leadership Development",
    "Training & Development",
    "Organizational Restructuring",
    "Workforce Planning",
  ],

  "GOVERNMENT & PUBLIC SECTOR CONSULTING": [
    "Government Project Consulting",
    "Policy Consulting",
    "Public Sector Advisory",
    "Government Scheme Consulting",
    "Project Implementation Consulting",
    "Public Policy Advisory",
    "Institutional Development",
    "Government Compliance Consulting",
  ],

  "PROJECT & OPERATIONS CONSULTING": [
    "Project Management Consulting",
    "Project Planning",
    "Project Feasibility Study",
    "Operations Management",
    "Supply Chain Consulting",
    "Process Optimization",
    "Quality Management",
    "Business Continuity Planning",
    "Project Monitoring & Evaluation",
  ],

  "SPECIALIZED CONSULTING": [
    "Education Consulting",
    "Healthcare Consulting",
    "Real Estate Consulting",
    "Political Consulting",
    "Legal & Compliance Consulting",
    "NGO & Social Sector Consulting",
    "Export & Import Consulting",
    "International Business Consulting",
    "Industry-Specific Consulting",
  ],
};

/* ======================================================
   COMPONENT
====================================================== */

export default function Step05LegalServicesRequired() {
  const dispatch = useAppDispatch();

  const selectedServices = useAppSelector(
    (state) => state.esccom.selectedDivisions
  );

  /* ====================================================
     SELECT SERVICE
  ==================================================== */

  const handleSelect = (section: string, service: string) => {
    dispatch(
      toggleDivision({
        section,
        value: service,
      })
    );
  };

  /* ====================================================
     RENDER
  ==================================================== */

  return (
    <div className="space-y-10">

      {/* ==================================================
          HEADER
      ================================================== */}

      <div>
        <h2 className="text-2xl font-bold mb-2 text-slate-900">
          CONSULTANCY SERVICES REQUIRED
        </h2>

        <p className="text-gray-500">
          Select the consultancy services that match your business,
          organization, project, or professional requirements.
        </p>
      </div>

      {/* ==================================================
          SERVICE CATEGORIES
      ================================================== */}

      {Object.entries(consultancyServices).map(
        ([category, services]) => (
          <div key={category}>

            {/* CATEGORY TITLE */}

            <h3 className="text-xl font-semibold mb-4 text-slate-800">
              {category}
            </h3>

            {/* SERVICES */}

            <div className="grid md:grid-cols-3 gap-3">

              {services.map((service) => {

                const isSelected =
                  selectedServices[category] === service;

                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() =>
                      handleSelect(category, service)
                    }
                    className={`
                      text-left
                      border
                      rounded-lg
                      px-4
                      py-3
                      cursor-pointer
                      transition-all
                      duration-200
                      ${
                        isSelected
                          ? "bg-[#F5EBCB] border-[#C9A227] text-[#0B1F3A] shadow-sm"
                          : "bg-white border-slate-200 text-slate-700 hover:border-[#C9A227] hover:bg-[#FFFDF5]"
                      }
                    `}
                  >

                    <div className="flex items-center gap-3">

                      {/* CHECK INDICATOR */}

                      <span
                        className={`
                          flex
                          items-center
                          justify-center
                          w-5
                          h-5
                          rounded-full
                          border
                          text-xs
                          font-bold
                          flex-shrink-0
                          ${
                            isSelected
                              ? "bg-[#0B1F3A] border-[#0B1F3A] text-white"
                              : "border-slate-300 text-transparent"
                          }
                        `}
                      >
                        ✓
                      </span>

                      {/* SERVICE NAME */}

                      <span className="text-sm font-medium">
                        {service}
                      </span>

                    </div>

                  </button>
                );
              })}

            </div>

          </div>
        )
      )}

      {/* ==================================================
          SELECTED SERVICES SUMMARY
      ================================================== */}

      <div className="border-t pt-6">

        <h3 className="text-lg font-semibold text-slate-800 mb-3">
          Selected Consultancy Services
        </h3>

        <div className="flex flex-wrap gap-2">

          {Object.entries(selectedServices).length === 0 ? (

            <p className="text-sm text-gray-500">
              No consultancy service selected yet.
            </p>

          ) : (

            Object.entries(selectedServices).map(
              ([category, service]) => (

                <span
                  key={category}
                  className="px-3 py-2 rounded-full bg-[#F5EBCB] text-[#0B1F3A] text-sm border border-[#C9A227]/40"
                >
                  {service}
                </span>

              )
            )

          )}

        </div>

      </div>

    </div>
  );
}
