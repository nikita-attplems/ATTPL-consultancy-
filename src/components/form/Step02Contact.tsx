
"use client";

import { useAppDispatch,useAppSelector } from "@/redux/hooks";


import { setApplicantCategory,updateCategorySelection } from "@/redux/slices/esccomSlice";

import Select from "../ui/Select";

/* ============================================================
   CONSULTANCY APPLICANT CATEGORIES
============================================================ */

const categories: Record<string, string[]> = {
  CLIENT_BUYER: [
    "Individual / Entrepreneur",
    "Startup",
    "MSME",
    "Private Limited Company",
    "Public Limited Company",
    "LLP",
    "Partnership Firm",
    "Corporate Group",
    "NGO",
    "Trust",
    "Society",
    "Government Department",
    "Educational Institution",
    "Healthcare Organization",
    "Other Organization",
  ],

  CONSULTANCY_PROFESSIONAL: [
    "Business Consultant",
    "Management Consultant",
    "Strategy Consultant",
    "Financial Consultant",
    "HR Consultant",
    "Marketing Consultant",
    "Political Consultant",
    "Technology Consultant",
    "IT Consultant",
    "Legal Consultant",
    "Tax Consultant",
    "Compliance Consultant",
    "Project Management Consultant",
    "Process Consultant",
    "Industry Specialist",
    "Independent Consultant",
  ],

  CONSULTANCY_ORGANIZATION: [
    "Consultancy Firm",
    "Management Consulting Firm",
    "Business Advisory Firm",
    "Strategy Consulting Firm",
    "Financial Consultancy",
    "HR Consultancy",
    "Marketing Consultancy",
    "Political Consultancy",
    "Technology Consultancy",
    "IT Consulting Company",
    "Professional Services Firm",
    "Research & Advisory Organization",
  ],

  PROFESSIONAL_PARTNER: [
    "Industry Expert",
    "Business Advisor",
    "Chartered Accountant",
    "Company Secretary",
    "Lawyer / Advocate",
    "Architect",
    "Engineer",
    "Technology Professional",
    "Financial Professional",
    "HR Professional",
    "Marketing Professional",
    "Political Strategist",
    "Research Professional",
    "Other Professional",
  ],

  CONSULTANCY_VENDOR: [
    "Technology Vendor",
    "Software / SaaS Provider",
    "Digital Marketing Agency",
    "Research Agency",
    "Data & Analytics Provider",
    "Training Provider",
    "Recruitment Agency",
    "Documentation Service Provider",
    "Event Management Provider",
    "Media Agency",
    "Design Agency",
    "Outsourcing Provider",
    "Other Service Provider",
  ],

  ATTPL_CONSULTANCY_TEAM: [
    "Sales Team",
    "Business Development Team",
    "State Coordinator",
    "District Coordinator",
    "Regional Coordinator",
    "Franchise Manager",
    "Partner Manager",
    "Consultancy Network Manager",
  ],
};

/* ============================================================
   CATEGORY LABELS
============================================================ */

const categoryLabels: Record<string, string> = {
  CLIENT_BUYER: "Client / Buyer",

  CONSULTANCY_PROFESSIONAL:
    "Consultancy Professional",

  CONSULTANCY_ORGANIZATION:
    "Consultancy Organization",

  PROFESSIONAL_PARTNER:
    "Professional Partner",

  CONSULTANCY_VENDOR:
    "Consultancy Vendor",

  ATTPL_CONSULTANCY_TEAM:
    "ATTPL Consultancy Team",
};

/* ============================================================
   GROUP OPTIONS
============================================================ */

const groupOptions =
  Object.keys(categoryLabels).map(
    (key) => categoryLabels[key]
  );

/* ============================================================
   COMPONENT
============================================================ */

export default function Step02Contact() {
  const dispatch = useAppDispatch();

  /* ==========================================================
     REDUX
  ========================================================== */

  const applicantCategory =
    useAppSelector(
      (state) =>
        state.esccom.applicantCategory
    );

  const categorySelections =
    useAppSelector(
      (state) =>
        state.esccom.categorySelections
    );

  /* ==========================================================
     CATEGORY SELECT
  ========================================================== */

const handleGroupSelect = (selectedLabel: string) => {
  const selectedKey = Object.keys(categoryLabels).find(
    (key) => categoryLabels[key] === selectedLabel
  );

  console.log("CATEGORY SELECT DEBUG:", {
    selectedLabel,
    selectedKey,
  });

  if (selectedKey) {
    dispatch(setApplicantCategory(selectedKey));

    console.log(
      "DISPATCHED CATEGORY =",
      selectedKey
    );
  }
};

  /* ==========================================================
     SUB CATEGORY SELECT
  ========================================================== */

  const handleSubCategorySelect = (
    value: string
  ) => {
    if (!applicantCategory) return;

    dispatch(
      updateCategorySelection({
        group: applicantCategory,
        value,
      })
    );
  };

  /* ==========================================================
     CURRENT SUB CATEGORY
  ========================================================== */

  const selectedSubCategory =
    applicantCategory
      ? categorySelections?.[
          applicantCategory
        ] || ""
      : "";

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <div className="max-w-6xl mx-auto space-y-8">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div>
        <h2 className="text-2xl font-bold text-[#0B1F3A]">
          APPLICANT CATEGORY
        </h2>

        <p className="text-gray-500 mt-2">
          Select the category that best describes
          your consultancy requirement, professional
          profile, organization, or partnership role.
        </p>
      </div>

      {/* ======================================================
          CATEGORY SELECTION
      ====================================================== */}

      <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">

        <h3 className="text-lg font-semibold text-[#0B1F3A] mb-5">
          Consultancy Applicant Identification
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* ==================================================
              MAIN CATEGORY
          ================================================== */}

          <Select
            label="Applicant Category *"
            value={
              applicantCategory
                ? categoryLabels[
                    applicantCategory
                  ]
                : ""
            }
            options={groupOptions}
            placeholder="Select Applicant Category"
            onChange={
              handleGroupSelect
            }
          />

          {/* ==================================================
              SUB CATEGORY
          ================================================== */}

          {applicantCategory && (
            <Select
              label={`${categoryLabels[applicantCategory]} Type *`}
              value={
                selectedSubCategory
              }
              options={
                categories[
                  applicantCategory
                ] || []
              }
              placeholder={`Select ${categoryLabels[applicantCategory]} Type`}
              onChange={
                handleSubCategorySelect
              }
            />
          )}

        </div>

      </div>

      {/* ======================================================
          SELECTED CATEGORY SUMMARY
      ====================================================== */}

      {applicantCategory &&
        selectedSubCategory && (
          <div className="bg-[#F8F1DD] border border-[#C9A227]/40 rounded-xl p-5">

            <p className="text-sm text-gray-500">
              Selected Applicant Type
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-2">

              <span className="font-semibold text-[#0B1F3A]">
                {
                  categoryLabels[
                    applicantCategory
                  ]
                }
              </span>

              <span className="text-gray-400">
                →
              </span>

              <span className="font-semibold text-[#C9A227]">
                {selectedSubCategory}
              </span>

            </div>

          </div>
        )}

      {/* ======================================================
          INFORMATION
      ====================================================== */}

      <div className="text-sm text-gray-500 border-l-4 border-[#C9A227] pl-4">

        Your applicant category helps us understand
        your consultancy requirements and determine
        the relevant services, professional profile,
        engagement model, and partnership options.

      </div>

    </div>
  );
}

