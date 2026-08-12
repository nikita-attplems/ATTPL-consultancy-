
"use client";

import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { updateField } from "@/redux/slices/esccomSlice";
import Input from "../ui/Input";
import Select from "../ui/Select";
import type { ESCOMForm } from "@/redux/slices/esccomSlice";

type ConsultationFields = keyof Pick<
  ESCOMForm,
  | "needFreeConsultation"
  | "consultationType"
  | "preferredDate"
  | "preferredTime"
  | "urgencyLevel"
>;

export default function Step15ConsultationBooking() {
  const dispatch = useAppDispatch();

  const esccom = useAppSelector(
    (state) => state.esccom
  );

  const handleChange = (
    field: ConsultationFields,
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
          CONSULTATION BOOKING
        </h2>

        <p className="text-gray-500">
          Schedule your legal consultation preferences.
        </p>
      </div>

      {/* FREE CONSULTATION */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Need Free Consultation?
        </h3>

        <div className="flex gap-4">
          {["Yes", "No"].map((item) => (
            <button
              type="button"
              key={item}
              onClick={() =>
                handleChange(
                  "needFreeConsultation",
                  item
                )
              }
              className={`px-6 py-3 border rounded-lg transition ${
                esccom.needFreeConsultation === item
                  ? "bg-blue-100 border-blue-500"
                  : "hover:border-blue-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* CONSULTATION TYPE */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Consultation Type
        </h3>

        <Select
          label="Consultation Type"
          value={esccom.consultationType || ""}
          options={[
            "Phone Consultation",
            "Video Consultation",
            "Office Meeting",
            "Site Visit",
            "Legal Audit",
          ]}
          placeholder="Select Consultation Type"
          onChange={(value) =>
            handleChange(
              "consultationType",
              value
            )
          }
        />
      </div>

      {/* SCHEDULE DETAILS */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Schedule Details
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          <Input
            type="date"
            label="Preferred Date"
            value={esccom.preferredDate || ""}
            onChange={(e) =>
              handleChange(
                "preferredDate",
                e.target.value
              )
            }
          />

          <Input
            type="time"
            label="Preferred Time"
            value={esccom.preferredTime || ""}
            onChange={(e) =>
              handleChange(
                "preferredTime",
                e.target.value
              )
            }
          />

        </div>
      </div>

      {/* URGENCY */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Urgency Level
        </h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            "Immediate",
            "Within 7 Days",
            "Within 30 Days",
            "Planning Stage",
          ].map((item) => (
            <div
              key={item}
              onClick={() =>
                handleChange(
                  "urgencyLevel",
                  item
                )
              }
              className={`border rounded-lg px-4 py-3 cursor-pointer transition ${
                esccom.urgencyLevel === item
                  ? "bg-blue-100 border-blue-500"
                  : "hover:border-blue-300"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

