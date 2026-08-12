
"use client";

import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { updateField } from "@/redux/slices/esccomSlice";
import Input from "../ui/Input";
import type { ESCOMForm } from "@/redux/slices/esccomSlice";

/* ============================================================
   LOCATION FIELDS
============================================================ */

type LocationField = keyof Pick<
  ESCOMForm,
  | "country"
  | "state"
  | "district"
  | "tehsil"
  | "city"
  | "villageWard"
  | "pinCode"
  | "latitude"
  | "longitude"
  | "gpsLocation"
  | "currentAddress"
  | "permanentAddress"
>;

/* ============================================================
   COMPONENT
============================================================ */

export default function Step03Location() {
  const dispatch = useAppDispatch();

  const formData = useAppSelector(
    (state) => state.esccom
  );

  /* ==========================================================
     GET FIELD VALUE
  ========================================================== */

  const getValue = (
    field: LocationField
  ): string => {
    return (formData[field] as string) ?? "";
  };

  /* ==========================================================
     HANDLE CHANGE
  ========================================================== */

  const handleChange = (
    field: LocationField,
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
          LOCATION & ADDRESS
        </h2>

        <p className="text-gray-500 mt-2">
          Provide your location and address details
          for consultancy communication, service
          delivery, and professional engagement.
        </p>
      </div>

      {/* ======================================================
          LOCATION INFORMATION
      ====================================================== */}

      <div>

        <h3 className="text-xl font-semibold text-[#0B1F3A] mb-5">
          Location Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <Input
            label="Country *"
            value={getValue("country")}
            onChange={(e) =>
              handleChange(
                "country",
                e.target.value
              )
            }
          />

          <Input
            label="State *"
            value={getValue("state")}
            onChange={(e) =>
              handleChange(
                "state",
                e.target.value
              )
            }
          />

          <Input
            label="District"
            value={getValue("district")}
            onChange={(e) =>
              handleChange(
                "district",
                e.target.value
              )
            }
          />

          <Input
            label="Tehsil"
            value={getValue("tehsil")}
            onChange={(e) =>
              handleChange(
                "tehsil",
                e.target.value
              )
            }
          />

          <Input
            label="City"
            value={getValue("city")}
            onChange={(e) =>
              handleChange(
                "city",
                e.target.value
              )
            }
          />

          <Input
            label="Village / Ward"
            value={getValue("villageWard")}
            onChange={(e) =>
              handleChange(
                "villageWard",
                e.target.value
              )
            }
          />

          <Input
            label="PIN Code *"
            value={getValue("pinCode")}
            onChange={(e) =>
              handleChange(
                "pinCode",
                e.target.value
              )
            }
          />

        </div>

      </div>

      {/* ======================================================
          GPS / GEO LOCATION
      ====================================================== */}

      <div>

        <h3 className="text-xl font-semibold text-[#0B1F3A] mb-2">
          GPS / Geo Location
        </h3>

        <p className="text-sm text-gray-500 mb-5">
          Location coordinates may be used to identify
          your consultancy service area and support
          location-based professional engagement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <Input
            label="Latitude"
            value={getValue("latitude")}
            onChange={(e) =>
              handleChange(
                "latitude",
                e.target.value
              )
            }
          />

          <Input
            label="Longitude"
            value={getValue("longitude")}
            onChange={(e) =>
              handleChange(
                "longitude",
                e.target.value
              )
            }
          />

          <Input
            label="GPS Location"
            value={getValue("gpsLocation")}
            onChange={(e) =>
              handleChange(
                "gpsLocation",
                e.target.value
              )
            }
          />

        </div>

      </div>

      {/* ======================================================
          ADDRESS DETAILS
      ====================================================== */}

      <div>

        <h3 className="text-xl font-semibold text-[#0B1F3A] mb-5">
          Address Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <Input
            label="Current / Communication Address *"
            value={getValue("currentAddress")}
            onChange={(e) =>
              handleChange(
                "currentAddress",
                e.target.value
              )
            }
          />

          <Input
            label="Permanent Address"
            value={getValue("permanentAddress")}
            onChange={(e) =>
              handleChange(
                "permanentAddress",
                e.target.value
              )
            }
          />

        </div>

      </div>

      {/* ======================================================
          CONSULTANCY SERVICE AREA
      ====================================================== */}

      <div className="bg-[#F8F1DD] border border-[#C9A227]/40 rounded-xl p-5">

        <h3 className="font-semibold text-[#0B1F3A] mb-2">
          Consultancy Location
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          Your location information helps us understand
          the geographical area associated with your
          consultancy profile and coordinate relevant
          services, consultations, and professional
          partnerships.
        </p>

      </div>

    </div>
  );
}

