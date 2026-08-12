"use client";

import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { updateField, type ESCOMForm } from "@/redux/slices/esccomSlice";

type MarketplaceFields = keyof Pick<
  ESCOMForm,
  | "marketplaceListing"
  | "displayProfilePublicly"
  | "acceptLeads"
  | "videoConsultation"
  | "physicalConsultation"
  | "interestedPartnerType"
>;

const yesNoOptions = ["Yes", "No"];

const marketplaceOptions: {
  label: string;
  field: MarketplaceFields;
}[] = [
  {
    label: "Do You Want Marketplace Listing?",
    field: "marketplaceListing",
  },
  {
    label: "Display Profile Publicly?",
    field: "displayProfilePublicly",
  },
  {
    label: "Accept Leads From ATTPL?",
    field: "acceptLeads",
  },
  {
    label: "Accept Video Consultation?",
    field: "videoConsultation",
  },
  {
    label: "Accept Physical Consultation?",
    field: "physicalConsultation",
  },
];

const partnerTypes = [
  "District Partner",
  "State Partner",
  "Franchise Partner",
  "Strategic Alliance Partner",
  "Referral Partner",
];

export default function Step13MarketplaceParticipation() {
  const dispatch = useAppDispatch();

  const esccom = useAppSelector((state) => state.esccom);

  const handleChange = (
    field: MarketplaceFields,
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
          MARKETPLACE PARTICIPATION
        </h2>

        <p className="text-gray-500">
          Manage your ATTPL marketplace visibility, consultation
          preferences and partnership interests.
        </p>
      </div>

      {/* MARKETPLACE VISIBILITY */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Marketplace Preferences
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {marketplaceOptions.map((item) => (
            <div
              key={item.field}
              className="border rounded-xl p-5"
            >
              <h4 className="font-medium mb-4">
                {item.label}
              </h4>

              <div className="flex gap-3">
                {yesNoOptions.map((option) => {
                  const isSelected =
                    esccom[item.field] === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        handleChange(
                          item.field,
                          option
                        )
                      }
                      className={`px-6 py-2 rounded-lg border transition-all ${
                        isSelected
                          ? "bg-blue-100 border-blue-500 text-blue-700"
                          : "hover:border-blue-300"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTNERSHIP INTEREST */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Partnership Interest
        </h3>

        <p className="text-gray-500 mb-4">
          Select the type of partnership you are interested in.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {partnerTypes.map((item) => {
            const isSelected =
              esccom.interestedPartnerType === item;

            return (
              <div
                key={item}
                onClick={() =>
                  handleChange(
                    "interestedPartnerType",
                    item
                  )
                }
                className={`border rounded-xl px-4 py-4 cursor-pointer transition-all ${
                  isSelected
                    ? "bg-blue-100 border-blue-500 text-blue-700"
                    : "hover:border-blue-300"
                }`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}