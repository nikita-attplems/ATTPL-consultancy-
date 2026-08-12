"use client";


import { useAppDispatch,useAppSelector } from "@/redux/hooks";

import { updateField } from "@/redux/slices/esccomSlice";

const geographicOptions = {
  countries: [
    "India",
    "USA",
    "UK",
    "UAE",
    "Canada",
    "Australia",
    "Other",
  ],

  regions: [
    "Local / City Level",
    "District Level",
    "State Level",
    "Multiple States",
    "Pan India",
    "International",
  ],

  clientSegments: [
    "Individuals",
    "Startups",
    "MSMEs",
    "Corporates",
    "Government Organizations",
    "Educational Institutions",
    "Healthcare Organizations",
    "NGOs / Non-Profits",
  ],

  deliveryModes: [
    "On-Site Consulting",
    "Remote Consulting",
    "Hybrid Consulting",
    "Video Consultation",
    "Workshops & Training",
    "On-Demand Advisory",
  ],
};

type ConsultancyCoverageField = "serviceCoverage";

export default function Step09GeographicCourtCoverage() {
  const dispatch = useAppDispatch();

  const esccom = useAppSelector(
    (state) => state.esccom
  );

  const handleChange = (
    field: ConsultancyCoverageField,
    value: string
  ) => {
    dispatch(
      updateField({
        field,
        value,
      })
    );
  };

  const renderOptions = (
    title: string,
    options: string[],
    selectedValue: string
  ) => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <div className="grid md:grid-cols-3 gap-3">
        {options.map((item) => {
          const isSelected =
            selectedValue === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() =>
                handleChange(
                  "serviceCoverage",
                  item
                )
              }
              className={`
                text-left
                border rounded-xl
                px-4 py-3
                cursor-pointer
                transition-all
                ${
                  isSelected
                    ? "bg-sky-100 border-sky-500 text-sky-700"
                    : "hover:border-sky-300"
                }
              `}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold mb-2">
          CONSULTANCY SERVICE COVERAGE
        </h2>

        <p className="text-gray-500">
          Tell us where you provide consultancy services,
          whom you serve, and how your consulting services
          are delivered.
        </p>
      </div>

      {/* GEOGRAPHIC COVERAGE */}
      {renderOptions(
        "Geographic Coverage",
        geographicOptions.regions,
        esccom.serviceCoverage || ""
      )}

      {/* COUNTRY COVERAGE */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">
          Countries Served
        </h3>

        <div className="grid md:grid-cols-4 gap-3">
          {geographicOptions.countries.map(
            (country) => (
              <button
                key={country}
                type="button"
                className="
                  text-left
                  border rounded-xl
                  px-4 py-3
                  cursor-pointer
                  transition-all
                  hover:border-sky-300
                "
              >
                {country}
              </button>
            )
          )}
        </div>
      </div>

      {/* CLIENT SEGMENTS */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">
          Client Segments Served
        </h3>

        <div className="grid md:grid-cols-3 gap-3">
          {geographicOptions.clientSegments.map(
            (item) => (
              <button
                key={item}
                type="button"
                className="
                  text-left
                  border rounded-xl
                  px-4 py-3
                  cursor-pointer
                  transition-all
                  hover:border-sky-300
                "
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      {/* DELIVERY MODE */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">
          Consultancy Delivery Mode
        </h3>

        <div className="grid md:grid-cols-3 gap-3">
          {geographicOptions.deliveryModes.map(
            (item) => (
              <button
                key={item}
                type="button"
                className="
                  text-left
                  border rounded-xl
                  px-4 py-3
                  cursor-pointer
                  transition-all
                  hover:border-sky-300
                "
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

    </div>
  );
}