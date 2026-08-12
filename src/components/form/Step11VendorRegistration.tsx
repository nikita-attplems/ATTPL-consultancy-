"use client";

// import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { updateField } from "@/redux/slices/esccomSlice";
import Input from "../ui/Input";
import Select from "../ui/Select";
import type { ESCOMForm } from "@/redux/slices/esccomSlice";
type VendorFields = keyof Pick<
  ESCOMForm,
  | "vendorCategory"
  | "serviceCoverage"
  | "gstNumber"
  | "pan"
  | "vendorExperience"
>;

export default function Step11VendorRegistration() {
  const dispatch = useAppDispatch();

  const esccom = useAppSelector((state) => state.esccom);

  const handleChange = (
    field: VendorFields,
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
          CONSULTANCY PARTNER REGISTRATION
        </h2>

        <p className="text-gray-500">
          Provide details about your consultancy services,
          experience, business credentials, and operational coverage.
        </p>
      </div>

      {/* PARTNER INFORMATION */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Partner Information
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          <Select
            label="Consultancy Partner Category"
            value={esccom.vendorCategory || ""}
            options={[
              "Management Consultancy",
              "Business Consultancy",
              "Financial Consultancy",
              "HR Consultancy",
              "Technology Consultancy",
              "IT Consultancy",
              "Marketing Consultancy",
              "Legal Consultancy",
              "Political Consultancy",
              "Healthcare Consultancy",
              "Education Consultancy",
              "Real Estate Consultancy",
              "Compliance Consultancy",
              "Other Consultancy",
            ]}
            placeholder="Select Partner Category"
            onChange={(value) =>
              handleChange(
                "vendorCategory",
                value
              )
            }
          />

          <Select
            label="Service Coverage"
            value={esccom.serviceCoverage || ""}
            options={[
              "Local",
              "District",
              "State",
              "National",
              "International",
            ]}
            placeholder="Select Coverage"
            onChange={(value) =>
              handleChange(
                "serviceCoverage",
                value
              )
            }
          />

          <Select
            label="Consultancy Experience"
            value={esccom.vendorExperience || ""}
            options={[
              "Fresher",
              "1–3 Years",
              "3–5 Years",
              "5–10 Years",
              "10–20 Years",
              "20+ Years",
            ]}
            placeholder="Select Experience"
            onChange={(value) =>
              handleChange(
                "vendorExperience",
                value
              )
            }
          />

        </div>
      </div>

      {/* BUSINESS CREDENTIALS */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Business Credentials
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          <Input
            label="GST Number"
            value={esccom.gstNumber || ""}
            onChange={(e) =>
              handleChange(
                "gstNumber",
                e.target.value
              )
            }
          />

          <Input
            label="PAN Number"
            value={esccom.pan || ""}
            onChange={(e) =>
              handleChange(
                "pan",
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

        <div className="grid md:grid-cols-5 gap-3">

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