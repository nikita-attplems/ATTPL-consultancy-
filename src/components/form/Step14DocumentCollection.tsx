
"use client";

import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { updateField } from "@/redux/slices/esccomSlice";
import Input from "../ui/Input";
import type { ESCOMForm } from "@/redux/slices/esccomSlice";

type DocumentFields = keyof Pick<
  ESCOMForm,
  | "photo"
  | "aadhaarDocument"
  | "panDocument"
  | "passport"
  | "voterId"
  | "barCouncilCertificate"
  | "enrollmentCertificate"
  | "practiceCertificate"
  | "resume"
  | "firmProfile"
  | "gstCertificate"
  | "organizationRegistration"
  | "professionalReferences"
  | "propertyDocuments"
  | "courtDocuments"
  | "legalDocuments"
  | "otherDocuments"
>;

type DocumentItem = {
  label: string;
  field: DocumentFields;
};

export default function Step14DocumentCollection() {
  const dispatch = useAppDispatch();

  const esccom = useAppSelector((state) => state.esccom);

  const handleChange = (
    field: DocumentFields,
    value: string
  ) => {
    dispatch(
      updateField({
        field,
        value,
      })
    );
  };

  const documents: DocumentItem[] = [
    {
      label: "Photo",
      field: "photo",
    },
    {
      label: "Aadhaar",
      field: "aadhaarDocument",
    },
    {
      label: "PAN",
      field: "panDocument",
    },
    {
      label: "Passport",
      field: "passport",
    },
    {
      label: "Voter ID",
      field: "voterId",
    },
    {
      label: "Bar Council Certificate",
      field: "barCouncilCertificate",
    },
    {
      label: "Enrollment Certificate",
      field: "enrollmentCertificate",
    },
    {
      label: "Practice Certificate",
      field: "practiceCertificate",
    },
    {
      label: "Resume / CV",
      field: "resume",
    },
    {
      label: "Firm Profile",
      field: "firmProfile",
    },
    {
      label: "GST Certificate",
      field: "gstCertificate",
    },
    {
      label: "Organization Registration",
      field: "organizationRegistration",
    },
    {
      label: "Professional References",
      field: "professionalReferences",
    },
    {
      label: "Property Documents",
      field: "propertyDocuments",
    },
    {
      label: "Court Documents",
      field: "courtDocuments",
    },
    {
      label: "Legal Documents",
      field: "legalDocuments",
    },
    {
      label: "Other Supporting Documents",
      field: "otherDocuments",
    },
  ];

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold mb-2">
          DOCUMENT COLLECTION
        </h2>

        <p className="text-gray-500">
          Upload required documents for verification and legal
          service registration.
        </p>
      </div>

      {/* DOCUMENT UPLOAD */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Supporting Documents
        </h3>

        <div className="grid md:grid-cols-3 gap-5">
          {documents.map((doc) => (
            <Input
              key={doc.field}
              type="file"
              label={doc.label}
              value={esccom[doc.field] || ""}
              onChange={(e) =>
                handleChange(
                  doc.field,
                  e.target.files?.[0]?.name || ""
                )
              }
            />
          ))}
        </div>
      </div>

    </div>
  );
}

