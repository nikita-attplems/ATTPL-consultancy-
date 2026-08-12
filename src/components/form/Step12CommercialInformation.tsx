"use client";

import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { updateField } from "@/redux/slices/esccomSlice";
import type { ESCOMForm } from "@/redux/slices/esccomSlice";
import Select from "../ui/Select";

type CommercialFields = keyof Pick<
  ESCOMForm,
  | "preferredEngagementModel"
  | "expectedFeeRange"
  | "availability"
  | "languagesSupported"
>;

export default function Step12CommercialInformation() {
  const dispatch = useAppDispatch();

  const esccom = useAppSelector(
    (state) => state.esccom
  );

  const handleChange = (
    field: CommercialFields,
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
        <h2 className="text-2xl font-bold mb-2">
          CONSULTANCY ENGAGEMENT & COMMERCIAL DETAILS
        </h2>

        <p className="text-gray-500">
          Provide your preferred engagement model, professional
          fees, availability, and communication capabilities.
        </p>
      </div>

      {/* ENGAGEMENT MODEL */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Preferred Engagement Model
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          {[
            "One-Time Consultation",
            "Project Based",
            "Monthly Retainer",
            "Quarterly Retainer",
            "Annual Retainer",
            "On Demand",
            "Strategic Partnership",
          ].map((item) => (
            <div
              key={item}
              onClick={() =>
                handleChange(
                  "preferredEngagementModel",
                  item
                )
              }
              className={`
                border rounded-lg px-4 py-3
                cursor-pointer transition-all
                ${
                  esccom.preferredEngagementModel === item
                    ? "bg-blue-100 border-blue-500"
                    : "hover:border-blue-300"
                }
              `}
            >
              {item}
            </div>
          ))}

        </div>
      </div>

      {/* FEE RANGE */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Expected Consultancy Fee
        </h3>

        <Select
          label="Expected Fee Range"
          value={esccom.expectedFeeRange || ""}
          options={[
            "Below ₹10,000",
            "₹10,000–₹50,000",
            "₹50,000–₹2 Lakh",
            "₹2–10 Lakh",
            "₹10–50 Lakh",
            "Above ₹50 Lakh",
            "Negotiable",
          ]}
          placeholder="Select Expected Fee Range"
          onChange={(value) =>
            handleChange(
              "expectedFeeRange",
              value
            )
          }
        />
      </div>

      {/* AVAILABILITY */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Professional Availability
        </h3>

        <div className="grid md:grid-cols-4 gap-4">

          {[
            "Full Time",
            "Part Time",
            "On Demand",
            "Flexible",
          ].map((item) => (
            <div
              key={item}
              onClick={() =>
                handleChange(
                  "availability",
                  item
                )
              }
              className={`
                border rounded-lg px-4 py-3
                cursor-pointer transition-all
                ${
                  esccom.availability === item
                    ? "bg-blue-100 border-blue-500"
                    : "hover:border-blue-300"
                }
              `}
            >
              {item}
            </div>
          ))}

        </div>
      </div>

      {/* LANGUAGES */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Languages Supported
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          {[
            "Hindi",
            "English",
            "Hindi & English",
            "Regional Languages",
            "Multiple Languages",
          ].map((item) => (
            <div
              key={item}
              onClick={() =>
                handleChange(
                  "languagesSupported",
                  item
                )
              }
              className={`
                border rounded-lg px-4 py-3
                cursor-pointer transition-all
                ${
                  esccom.languagesSupported === item
                    ? "bg-blue-100 border-blue-500"
                    : "hover:border-blue-300"
                }
              `}
            >
              {item}
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}