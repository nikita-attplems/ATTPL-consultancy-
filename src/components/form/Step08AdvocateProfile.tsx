
"use client";

import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { updateField } from "@/redux/slices/esccomSlice";
import Input from "../ui/Input";
import Select from "../ui/Select";



type ProfessionalField =
  | "professionalCategory"
  | "experience"
  | "linkedInProfile"
  | "availability"
  | "languagesSupported"
   | "matterDescription";

export default function Step08ProfessionalProfile() {
  const dispatch = useAppDispatch();

  const esccom = useAppSelector(
    (state) => state.esccom
  );

  const handleChange = (
    field: ProfessionalField,
    value: string
  ) => {
    dispatch(
      updateField({
        field,
        value,
      })
    );
  };

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-slate-900">
          CONSULTANT / PROFESSIONAL PROFILE
        </h2>

        <p className="text-gray-500">
          Provide your professional background, experience,
          availability, and consultancy profile details.
        </p>
      </div>

      {/* PROFESSIONAL INFORMATION */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-slate-900">
          Professional Information
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          {/* PROFESSIONAL CATEGORY */}
          <Select
            label="Professional Category"
            value={esccom.professionalCategory || ""}
            options={[
              "Business Consultant",
              "Management Consultant",
              "Strategy Consultant",
              "Financial Consultant",
              "Investment Consultant",
              "Technology Consultant",
              "IT Consultant",
              "HR Consultant",
              "Marketing Consultant",
              "Legal & Compliance Consultant",
              "Tax Consultant",
              "Risk Consultant",
              "Project Management Consultant",
              "Digital Transformation Consultant",
              "AI & Automation Consultant",
              "Industry Specialist",
              "Independent Consultant",
              "Other",
            ]}
            placeholder="Select Professional Category"
            onChange={(value) =>
              handleChange(
                "professionalCategory",
                value
              )
            }
          />

          {/* EXPERIENCE */}
          <Select
            label="Professional Experience"
            value={esccom.experience || ""}
            options={[
              "Fresher",
              "1–3 Years",
              "3–5 Years",
              "5–10 Years",
              "10–15 Years",
              "15–20 Years",
              "20+ Years",
            ]}
            placeholder="Select Experience"
            onChange={(value) =>
              handleChange(
                "experience",
                value
              )
            }
          />

          {/* LINKEDIN */}
          <Input
            label="LinkedIn Profile"
            value={esccom.linkedInProfile || ""}
            onChange={(e) =>
              handleChange(
                "linkedInProfile",
                e.target.value
              )
            }
          />

        </div>
      </div>

      {/* AVAILABILITY */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-slate-900">
          Professional Availability
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          <Select
            label="Availability"
            value={esccom.availability || ""}
            options={[
              "Immediately Available",
              "Available Within 7 Days",
              "Available Within 30 Days",
              "Part Time",
              "Full Time",
              "On Project Basis",
              "By Appointment",
            ]}
            placeholder="Select Availability"
            onChange={(value) =>
              handleChange(
                "availability",
                value
              )
            }
          />

        </div>
      </div>

      {/* LANGUAGES */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-slate-900">
          Languages Supported
        </h3>

        <Input
          label="Languages You Can Provide Consultancy In"
          value={esccom.languagesSupported || ""}
          onChange={(e) =>
            handleChange(
              "languagesSupported",
              e.target.value
            )
          }
        />

        <p className="text-xs text-gray-500 mt-2">
          Example: Hindi, English, Marathi, Gujarati
        </p>
      </div>

      {/* PROFILE SUMMARY */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-slate-900">
          Professional Profile Summary
        </h3>

        <Input
          label="Professional / Consultancy Summary"
          value={esccom.matterDescription || ""}
          onChange={(e) =>
            handleChange(
              "matterDescription",
              e.target.value
            )
          }
        />

        <p className="text-xs text-gray-500 mt-2">
          Briefly describe your expertise, professional background,
          industries served, and key capabilities.
        </p>
      </div>

    </div>
  );
}
