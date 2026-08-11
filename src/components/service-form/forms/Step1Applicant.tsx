"use client";

import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";

import {
  updateCategorySelection,
  setApplicantCategory,
} from "@/src/redux/slices/esccomSlice";

const GROUP = "category";
/* ✅ FULL OPTIONS (UPDATED AS PER YOUR REQUIREMENT) */
const OPTIONS = {
  PATIENT: [
    "Individual Patient",
    "Family Member",
    "Senior Citizen",
    "Women Patient",
    "Child Patient",
    "International Patient",
    "Corporate Employee",
  ],

  DOCTOR: [
    "Allopathic Doctor",
    "Ayurveda Doctor",
    "Homeopathy Doctor",
    "Unani Doctor",
    "Siddha Doctor",
    "Yoga Therapist",
    "Naturopathy Expert",
    "Physiotherapist",
    "Psychologist",
    "Psychiatrist",
    "Nutritionist",
    "Speech Therapist",
    "Occupational Therapist",
  ],

  ORGANIZATION: [
    "Clinic",
    "Hospital",
    "Multi Specialty Hospital",
    "Super Specialty Hospital",
    "AYUSH Hospital",
    "Diagnostic Center",
    "Laboratory",
    "Blood Bank",
    "Pharmacy",
    "Wellness Center",
    "Telemedicine Company",
    "Medical Tourism Company",
  ],

  PARTNER: [
    "Healthcare Consultant",
    "Healthcare Lawyer",
    "Healthcare CA",
    "Insurance Advisor",
    "Healthcare IT Consultant",
    "NABH Consultant",
    "NABL Consultant",
    "Medical Tourism Consultant",
  ],

  VENDOR: [
    "Medical Equipment Supplier",
    "Medical Device Manufacturer",
    "Pharmaceutical Company",
    "Pharma Distributor",
    "Diagnostic Equipment Vendor",
    "Healthcare Software Company",
    "Telemedicine Provider",
    "AI Healthcare Provider",
  ],

  LEADER: [
    "State Healthcare Leader",
    "Regional Healthcare Leader",
    "District Healthcare Leader",
    "Healthcare NGO Leader",
    "Healthcare Association Leader",
    "Healthcare Franchise Partner",
    "Healthcare Investor",
  ],
};

export default function Step2ApplicantCategory() {
  const dispatch = useAppDispatch();

  const data =
    useAppSelector(
      (state) => state.esccom.categorySelections?.category
    ) || {};

  /* ✅ HANDLE CHANGE */
  const handleChange = (field, value) => {
    dispatch(
      updateCategorySelection({
        group: GROUP,
        field,
        value,
      })
    );

    // ✅ Sync with main category
    if (field === "applicantType") {
      dispatch(setApplicantCategory(value));
    }
  };

  const subOptions = useMemo(() => {
    return OPTIONS[data?.applicantType] || [];
  }, [data?.applicantType]);

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        APPLICANT CATEGORY
      </h2>

      {/* ✅ MAIN CATEGORY */}
      <div>
        <label className="block mb-1 font-medium">
          Who Are You?
        </label>

        <select
          value={data?.applicantType || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange("applicantType", e.target.value);
            handleChange("applicantSubType", "");
          }}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select Category</option>

          <option value="PATIENT">
            PATIENT / CLIENT
          </option>

          <option value="DOCTOR">
            DOCTOR / HEALTHCARE PROFESSIONAL
          </option>

          <option value="ORGANIZATION">
            HEALTHCARE ORGANIZATION
          </option>

          <option value="PARTNER">
            HEALTHCARE PARTNER
          </option>

          <option value="VENDOR">
            VENDOR / MARKETPLACE PARTNER
          </option>

          <option value="LEADER">
            HEALTHCARE LEADER NETWORK
          </option>
        </select>
      </div>

      {/* ✅ SUB CATEGORY */}
      {data?.applicantType && (
        <div>
          <label className="block mb-1 font-medium">
            Select Category Type
          </label>

          <select
            value={data?.applicantSubType || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("applicantSubType", e.target.value)
            }
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select Option</option>

            {subOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}