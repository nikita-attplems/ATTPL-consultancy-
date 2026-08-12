
"use client";

import { useAppDispatch,useAppSelector } from "@/redux/hooks";
// import { updateField } from "@/src/redux/slices/esccomSlice";
import { updateField } from "@/redux/slices/esccomSlice";

import Input from "../ui/Input";
import Select from "../ui/Select";

type RequirementField =
  | "projectTitle"
  | "matterDescription"
  | "currentChallenge"
  | "expectedOutcome"
  | "urgency"
  | "estimatedBudget"
  | "decisionTimeline";

export default function Step06ClientRequirement() {
  const dispatch = useAppDispatch();

  const esccom = useAppSelector((state) => state.esccom);

  const handleChange = (
    field: RequirementField,
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
          CONSULTANCY REQUIREMENT DISCOVERY
        </h2>

        <p className="text-gray-500">
          Tell us about your business, project, challenges, and
          consultancy requirements so we can connect you with the
          right expertise.
        </p>
      </div>

      {/* PROJECT / CONSULTANCY INFORMATION */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-slate-900">
          Project & Consultancy Information
        </h3>

        <div className="grid md:grid-cols-2 gap-4">

          <Input
            label="Project / Requirement Title"
            value={esccom.projectTitle || ""}
            onChange={(e) =>
              handleChange(
                "projectTitle",
                e.target.value
              )
            }
          />

          <Input
            label="Current Business Challenge"
            value={esccom.currentChallenge || ""}
            onChange={(e) =>
              handleChange(
                "currentChallenge",
                e.target.value
              )
            }
          />

          <Input
            label="Project / Requirement Description"
            value={esccom.matterDescription || ""}
            onChange={(e) =>
              handleChange(
                "matterDescription",
                e.target.value
              )
            }
          />

          <Input
            label="Expected Outcome"
            value={esccom.expectedOutcome || ""}
            onChange={(e) =>
              handleChange(
                "expectedOutcome",
                e.target.value
              )
            }
          />

        </div>
      </div>

      {/* CONSULTANCY URGENCY */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-slate-900">
          Requirement Urgency
        </h3>

        <Select
          label="How Urgent Is Your Requirement?"
          value={esccom.urgency || ""}
          options={[
            "Immediate",
            "Within 7 Days",
            "Within 30 Days",
            "Within 3 Months",
            "Future Planning",
          ]}
          placeholder="Select Requirement Urgency"
          onChange={(value) =>
            handleChange(
              "urgency",
              value
            )
          }
        />
      </div>

      {/* CONSULTANCY BUDGET */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-slate-900">
          Estimated Consultancy Budget
        </h3>

        <Select
          label="Estimated Budget Range"
          value={esccom.estimatedBudget || ""}
          options={[
            "Below ₹10,000",
            "₹10,000–₹50,000",
            "₹50,000–₹2 Lakh",
            "₹2–10 Lakh",
            "₹10–50 Lakh",
            "Above ₹50 Lakh",
            "To Be Discussed",
          ]}
          placeholder="Select Budget Range"
          onChange={(value) =>
            handleChange(
              "estimatedBudget",
              value
            )
          }
        />
      </div>

      {/* DECISION TIMELINE */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-slate-900">
          Decision Timeline
        </h3>

        <Select
          label="When Do You Plan To Start?"
          value={esccom.decisionTimeline || ""}
          options={[
            "Immediately",
            "Within 30 Days",
            "Within 90 Days",
            "Within 6 Months",
            "Future Planning",
          ]}
          placeholder="Select Decision Timeline"
          onChange={(value) =>
            handleChange(
              "decisionTimeline",
              value
            )
          }
        />
      </div>

    </div>
  );
}

