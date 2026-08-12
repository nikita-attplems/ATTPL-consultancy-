"use client";

import { useAppDispatch,useAppSelector } from "@/redux/hooks";

import { setApplicantCategory,updateCategorySelection } from "@/redux/slices/esccomSlice";

// import Select from "../ui/Select";
import Select from "../ui/Select";

const categories: Record<string, string[]> = {
  CLIENT_BUYER: [
    "Individual Citizen",
    "NRI",
    "Startup",
    "MSME",
    "LLP",
    "Private Limited Company",
    "Partnership Firm",
    "NGO",
    "Trust",
    "Society",
    "Corporate Group",
    "Government Department",
    "Educational Institution",
    "Healthcare Organization",
  ],

  PROFESSIONAL_PARTNER: [
    "Advocate",
    "Senior Advocate",
    "Legal Consultant",
    "Corporate Counsel",
    "Arbitrator",
    "Mediator",
    "Retired Judge",
    "IPR Consultant",
    "Trademark Professional",
    "Copyright Professional",
    "Patent Professional",
    "Property Law Specialist",
    "Compliance Specialist",
  ],

  LEGAL_ORGANIZATION: [
    "Law Firm",
    "Legal Consultancy",
    "Arbitration Centre",
    "Mediation Centre",
    "Legal Process Outsourcing Company",
  ],

  LEGAL_VENDOR: [
    "Property Verification Vendor",
    "Due Diligence Vendor",
    "Court Filing Vendor",
    "Documentation Vendor",
    "Investigation Agency",
    "Legal Research Agency",
    "Translation Agency",
    "Trademark Vendor",
    "Patent Vendor",
  ],

  ATTPL_LEGAL_TEAM: [
    "Sales Team",
    "Business Development Team",
    "State Coordinator",
    "District Coordinator",
    "Franchise Manager",
  ],
};

const categoryLabels: Record<string, string> = {
  CLIENT_BUYER: "Client / Buyer",
  PROFESSIONAL_PARTNER: "Professional Partner",
  LEGAL_ORGANIZATION: "Legal Organization",
  LEGAL_VENDOR: "Legal Vendor",
  ATTPL_LEGAL_TEAM: "ATTPL Legal Team",
};

const groupOptions = Object.keys(categoryLabels).map(
  (key) => categoryLabels[key]
);

export default function Step1Applicant() {
  const dispatch = useAppDispatch();

  const applicantCategory = useAppSelector(
    (state) => state.esccom.applicantCategory
  );

  const categorySelections = useAppSelector(
    (state) => state.esccom.categorySelections
  );

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
  const handleSubCategorySelect = (value: string) => {
    if (!applicantCategory) return;

    dispatch(
      updateCategorySelection({
        group: applicantCategory,
        value,
      })
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">
          APPLICANT IDENTIFICATION
        </h2>

        <p className="text-gray-500 -mt-4 mb-2">
          Select applicant category and business type
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">

        <Select
          label="Applicant Category"
          value={
            applicantCategory
              ? categoryLabels[applicantCategory]
              : ""
          }
          options={groupOptions}
          placeholder="Select Applicant Category"
          onChange={handleGroupSelect}
        />

        {applicantCategory && (
          <Select
            label={`${categoryLabels[applicantCategory]} Type`}
            value={
              categorySelections?.[applicantCategory] || ""
            }
            options={categories[applicantCategory] || []}
            placeholder={`Select ${categoryLabels[applicantCategory]} Type`}
            onChange={handleSubCategorySelect}
          />
        )}

      </div>
    </div>
  );
}