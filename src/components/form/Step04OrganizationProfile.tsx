
"use client";



import Select from "../ui/Select";

import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { updateField } from "@/redux/slices/esccomSlice";
import Input from "../ui/Input";
import type { ESCOMForm } from "@/redux/slices/esccomSlice";

/* ============================================================
   ORGANIZATION FIELDS
============================================================ */

type OrganizationField = keyof Pick<
  ESCOMForm,
  | "organizationName"
  | "designation"
  | "website"
  | "gstNumber"
  | "organizationPan"
  | "organizationType"
  | "yearEstablished"
  | "numberOfEmployees"
  | "numberOfOffices"
  | "annualRevenue"
  | "serviceCoverage"
>;

/* ============================================================
   COMPONENT
============================================================ */

export default function Step04OrganizationProfile() {
  const dispatch = useAppDispatch();

  const esccom = useAppSelector(
    (state) => state.esccom
  );

  /* ==========================================================
     HANDLE CHANGE
  ========================================================== */

  const handleChange = (
    field: OrganizationField,
    value: string
  ) => {
    dispatch(
      updateField({
        field,
        value,
      })
    );
  };

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <div className="max-w-6xl mx-auto space-y-10">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div>
        <h2 className="text-2xl font-bold text-[#0B1F3A]">
          ORGANIZATION PROFILE
        </h2>

        <p className="text-gray-500 mt-2">
          Provide your organization, consultancy,
          business, and professional profile details.
        </p>
      </div>

      {/* ======================================================
          ORGANIZATION INFORMATION
      ====================================================== */}

      <div>

        <h3 className="text-xl font-semibold text-[#0B1F3A] mb-5">
          Organization Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <Input
            label="Organization / Firm Name *"
            value={
              esccom.organizationName || ""
            }
            onChange={(e) =>
              handleChange(
                "organizationName",
                e.target.value
              )
            }
          />

          <Input
            label="Designation / Role"
            value={
              esccom.designation || ""
            }
            onChange={(e) =>
              handleChange(
                "designation",
                e.target.value
              )
            }
          />

          <Input
            label="Website"
            value={
              esccom.website || ""
            }
            onChange={(e) =>
              handleChange(
                "website",
                e.target.value
              )
            }
          />

          <Input
            label="GST Number"
            value={
              esccom.gstNumber || ""
            }
            onChange={(e) =>
              handleChange(
                "gstNumber",
                e.target.value
              )
            }
          />

          <Input
            label="Organization PAN"
            value={
              esccom.organizationPan || ""
            }
            onChange={(e) =>
              handleChange(
                "organizationPan",
                e.target.value
              )
            }
          />

        </div>

      </div>

      {/* ======================================================
          ORGANIZATION TYPE
      ====================================================== */}

      <div>

        <h3 className="text-xl font-semibold text-[#0B1F3A] mb-5">
          Organization Type
        </h3>

        <div className="max-w-md">

          <Select
            label="Select Organization Type"
            value={
              esccom.organizationType || ""
            }
            options={[
              "Individual Consultant",
              "Proprietorship",
              "Partnership",
              "LLP",
              "Private Limited Company",
              "Public Limited Company",
              "Consultancy Firm",
              "Professional Services Firm",
              "NGO",
              "Trust",
              "Society",
              "Government Organization",
              "Educational Institution",
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

        </div>

      </div>

      {/* ======================================================
          BUSINESS / ORGANIZATION INFORMATION
      ====================================================== */}

      <div>

        <h3 className="text-xl font-semibold text-[#0B1F3A] mb-5">
          Business Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <Input
            label="Year Established"
            value={
              esccom.yearEstablished || ""
            }
            onChange={(e) =>
              handleChange(
                "yearEstablished",
                e.target.value
              )
            }
          />

          <Input
            label="Number of Employees"
            value={
              esccom.numberOfEmployees || ""
            }
            onChange={(e) =>
              handleChange(
                "numberOfEmployees",
                e.target.value
              )
            }
          />

          <Input
            label="Number of Offices"
            value={
              esccom.numberOfOffices || ""
            }
            onChange={(e) =>
              handleChange(
                "numberOfOffices",
                e.target.value
              )
            }
          />

          <Input
            label="Annual Revenue"
            value={
              esccom.annualRevenue || ""
            }
            onChange={(e) =>
              handleChange(
                "annualRevenue",
                e.target.value
              )
            }
          />

        </div>

      </div>

      {/* ======================================================
          CONSULTANCY SERVICE COVERAGE
      ====================================================== */}

      <div>

        <h3 className="text-xl font-semibold text-[#0B1F3A] mb-2">
          Consultancy Service Coverage
        </h3>

        <p className="text-sm text-gray-500 mb-5">
          Select the geographical area where your
          consultancy services are available.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">

          {[
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
                text-center font-medium
                ${
                  esccom.serviceCoverage === item
                    ? "bg-[#F8F1DD] border-[#C9A227] text-[#0B1F3A]"
                    : "border-gray-200 text-gray-700 hover:border-[#C9A227] hover:bg-[#F8F1DD]/50"
                }
              `}
            >
              {item}
            </div>

          ))}

        </div>

      </div>

      {/* ======================================================
          PROFILE SUMMARY
      ====================================================== */}

      {esccom.organizationName && (
        <div className="bg-[#F8F1DD] border border-[#C9A227]/40 rounded-xl p-5">

          <h3 className="font-semibold text-[#0B1F3A] mb-2">
            Organization Profile
          </h3>

          <p className="text-sm text-gray-600">
            {esccom.organizationName}
            {esccom.organizationType
              ? ` • ${esccom.organizationType}`
              : ""}
            {esccom.serviceCoverage
              ? ` • ${esccom.serviceCoverage} Coverage`
              : ""}
          </p>

        </div>
      )}

    </div>
  );
}

