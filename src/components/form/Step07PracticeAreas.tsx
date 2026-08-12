
"use client";

// import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { toggleDivision } from "@/redux/slices/esccomSlice";

const consultancyAreas = [
  "Business Strategy",
  "Management Consulting",
  "Business Transformation",
  "Corporate Advisory",
  "Financial Consulting",
  "Investment Advisory",
  "Market Research",
  "Business Development",
  "Sales & Marketing Consulting",
  "Human Resources Consulting",
  "Operations Consulting",
  "Project Management Consulting",
  "Technology Consulting",
  "IT Consulting",
  "Digital Transformation",
  "AI & Automation Consulting",
  "Data & Analytics Consulting",
  "Cybersecurity Consulting",
  "Legal & Compliance Consulting",
  "Risk Management Consulting",
  "Tax & Regulatory Consulting",
  "Startup Consulting",
  "MSME Consulting",
  "Government Consulting",
  "Political Consulting",
  "Education Consulting",
  "Healthcare Consulting",
  "Real Estate Consulting",
  "International Business Consulting",
  "Other",
];

export default function Step07PracticeAreas() {
  const dispatch = useAppDispatch();

  const selectedDivisions = useAppSelector(
    (state) => state.esccom.selectedDivisions
  );

  const handleSelect = (value: string) => {
    dispatch(
      toggleDivision({
        section: "consultancyExpertise",
        value,
      })
    );
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-slate-900">
          CONSULTANCY EXPERTISE
        </h2>

        <p className="text-gray-500">
          Select the areas of consultancy, expertise, and professional
          services you or your organization provide.
        </p>
      </div>

      {/* EXPERTISE AREAS */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-slate-900">
          Areas of Expertise
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {consultancyAreas.map((item) => {
            const isSelected =
              selectedDivisions?.consultancyExpertise === item;

            return (
              <div
                key={item}
                onClick={() => handleSelect(item)}
                className={`
                  border rounded-xl px-4 py-3
                  cursor-pointer transition-all
                  select-none
                  ${
                    isSelected
                      ? "bg-[#EAF2FF] border-[#0B1F3A] text-[#0B1F3A] shadow-sm"
                      : "border-slate-200 hover:border-[#C9A227] hover:bg-[#FFFDF5]"
                  }
                `}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium">
                    {item}
                  </span>

                  {isSelected && (
                    <span className="text-[#C9A227] font-bold">
                      ✓
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SELECTED EXPERTISE */}
      {selectedDivisions?.consultancyExpertise && (
        <div className="rounded-xl border border-[#C9A227]/40 bg-[#FFFDF5] p-4">
          <p className="text-sm text-slate-500">
            Selected Area of Expertise
          </p>

          <p className="mt-1 font-semibold text-[#0B1F3A]">
            {selectedDivisions.consultancyExpertise}
          </p>
        </div>
      )}

    </div>
  );
}

