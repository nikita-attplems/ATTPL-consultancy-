"use client";

import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { updateField } from "@/redux/slices/esccomSlice";
import Input from "../ui/Input";
import Select from "../ui/Select";

type ConsultancyProfileField =
  | "organizationName"
  | "designation"
  | "yearEstablished"
  | "numberOfEmployees"
  | "numberOfOffices"
  | "annualRevenue"
  | "serviceCoverage"
  | "website"
  | "linkedIn"
  | "organizationType"
  | "practiceAreas";

export default function Step10LawFirmProfile() {
  const dispatch = useAppDispatch();

  const esccom = useAppSelector((state) => state.esccom);

  const handleChange = (
    field: ConsultancyProfileField,
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
          CONSULTANCY ORGANIZATION ASSESSMENT
        </h2>

        <p className="text-gray-500">
          Provide details about your consultancy organization,
          operations, experience, and service capabilities.
        </p>
      </div>

      {/* ORGANIZATION INFORMATION */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Consultancy Information
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          <Input
            label="Consultancy / Organization Name"
            value={esccom.organizationName || ""}
            onChange={(e) =>
              handleChange(
                "organizationName",
                e.target.value
              )
            }
          />

          <Input
            label="Designation / Role"
            value={esccom.designation || ""}
            onChange={(e) =>
              handleChange(
                "designation",
                e.target.value
              )
            }
          />

          <Select
            label="Organization Type"
            value={esccom.organizationType || ""}
            options={[
              "Individual Consultant",
              "Consultancy Firm",
              "Private Limited Company",
              "LLP",
              "Partnership Firm",
              "MSME",
              "Startup",
              "NGO",
              "Trust",
              "Society",
              "Government Organization",
              "Other",
            ]}
            placeholder="Select Organization Type"
            onChange={(value) =>
              handleChange(
                "organizationType",
                value
              )
            }
          />

          <Input
            label="Year Established"
            value={esccom.yearEstablished || ""}
            onChange={(e) =>
              handleChange(
                "yearEstablished",
                e.target.value
              )
            }
          />

          <Input
            label="Number of Employees"
            value={esccom.numberOfEmployees || ""}
            onChange={(e) =>
              handleChange(
                "numberOfEmployees",
                e.target.value
              )
            }
          />

          <Input
            label="Number of Offices"
            value={esccom.numberOfOffices || ""}
            onChange={(e) =>
              handleChange(
                "numberOfOffices",
                e.target.value
              )
            }
          />

          <Input
            label="Annual Revenue"
            value={esccom.annualRevenue || ""}
            onChange={(e) =>
              handleChange(
                "annualRevenue",
                e.target.value
              )
            }
          />

          <Input
            label="Website"
            value={esccom.website || ""}
            onChange={(e) =>
              handleChange(
                "website",
                e.target.value
              )
            }
          />

          <Input
            label="LinkedIn Profile / Page"
            value={esccom.linkedIn || ""}
            onChange={(e) =>
              handleChange(
                "linkedIn",
                e.target.value
              )
            }
          />

        </div>
      </div>

      {/* CONSULTANCY EXPERIENCE */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Consultancy Experience & Expertise
        </h3>

        <div className="grid md:grid-cols-2 gap-4">

          <Input
            label="Areas of Consultancy / Expertise"
            value={esccom.practiceAreas || ""}
            onChange={(e) =>
              handleChange(
                "practiceAreas",
                e.target.value
              )
            }
          />

          <Input
            label="Service Coverage"
            value={esccom.serviceCoverage || ""}
            onChange={(e) =>
              handleChange(
                "serviceCoverage",
                e.target.value
              )
            }
          />

        </div>
      </div>

      {/* SERVICE COVERAGE */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Operational Coverage
        </h3>

        <div className="grid md:grid-cols-4 gap-3">

          {[
            "Local",
            "District",
            "State",
            "National",
            "International",
          ].map((item) => (
            <div
              key={item}
              onClick={() =>
                handleChange(
                  "serviceCoverage",
                  item
                )
              }
              className={`
                border rounded-lg px-4 py-3
                cursor-pointer transition-all
                ${
                  esccom.serviceCoverage === item
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