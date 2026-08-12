
"use client";

import { useState } from "react";

// import { useAppSelector } from "@/src/redux/hooks";
import { useAppSelector } from "@/redux/hooks";

export default function Step16ConsentDeclaration() {
  const formData = useAppSelector((state) => state.esccom);

  const [signature, setSignature] = useState<File | null>(null);
  const [declarationsChecked, setDeclarationsChecked] = useState<boolean[]>(
    [false, false, false, false]
  );

  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const declarations = [
    "I confirm that all submitted information is accurate and complete.",
    "I authorize ATTPL EMS Pvt Ltd to verify submitted information.",
    "I agree to ATTPL Privacy Policy and Terms & Conditions.",
    "I agree to receive communication via WhatsApp, SMS, Email and Phone Call.",
  ];

  const handleDeclarationChange = (index: number) => {
    setDeclarationsChecked((previous) =>
      previous.map((checked, i) =>
        i === index ? !checked : checked
      )
    );
  };

  function formatLabel(key: string) {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (c) => c.toUpperCase())
      .trim();
  }

  function renderValue(value: unknown): string {
    if (
      value === null ||
      value === undefined ||
      value === ""
    ) {
      return "—";
    }

    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }

    if (Array.isArray(value)) {
      return value.length ? value.join(", ") : "—";
    }

    if (typeof value === "object") {
      const entries = Object.entries(
        value as Record<string, unknown>
      ).filter(([, v]) => v !== null && v !== undefined && v !== "");

      return entries.length
        ? entries
            .map(([key, value]) => `${key}: ${String(value)}`)
            .join(", ")
        : "—";
    }

    return String(value);
  }

  const hiddenFields = [
    "loading",
    "success",
    "error",
  ];

  const entries = Object.entries(formData).filter(
    ([key, value]) =>
      !hiddenFields.includes(key) &&
      value !== "" &&
      value !== null &&
      value !== undefined &&
      (!Array.isArray(value) || value.length > 0)
  );

  const allDeclarationsAccepted =
    declarationsChecked.every(Boolean);

  const handleSubmit = async () => {
    if (!allDeclarationsAccepted) {
      setError(
        "Please accept all declarations before submitting."
      );
      return;
    }

    if (!signature) {
      setError("Please upload your signature.");
      return;
    }

    if (!date) {
      setError("Please select the declaration date.");
      return;
    }

    if (!place.trim()) {
      setError("Please enter the place.");
      return;
    }

    try {
      setLoading(true);
      setSuccess(false);
      setError("");

      console.log("Submitting Legal Form:", {
        formData,
        signature,
        date,
        place,
      });

      /*
        TODO:
        Replace this with your actual backend API.

        Example:

        const formDataPayload = new FormData();

        formDataPayload.append(
          "formData",
          JSON.stringify(formData)
        );

        formDataPayload.append(
          "signature",
          signature
        );

        formDataPayload.append(
          "declarationDate",
          date
        );

        formDataPayload.append(
          "declarationPlace",
          place
        );

        const response = await fetch(
          "http://localhost:5000/api/escom",
          {
            method: "POST",
            body: formDataPayload,
          }
        );

        if (!response.ok) {
          throw new Error("Submission failed");
        }
      */

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      setSuccess(true);
    } catch (err) {
      console.error(err);

      setError(
        "Failed to submit application. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold mb-2">
          CONSENT & DECLARATION
        </h2>

        <p className="text-gray-500">
          Review your information, accept the declarations,
          and confirm your legal service application.
        </p>
      </div>

      {/* DECLARATIONS */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Declaration
        </h3>

        <div className="space-y-4">
          {declarations.map((item, index) => (
            <label
              key={index}
              className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={declarationsChecked[index]}
                onChange={() =>
                  handleDeclarationChange(index)
                }
                className="mt-1 h-4 w-4"
              />

              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* SIGNATURE */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Digital Signature
        </h3>

        <label className="block mb-2 text-sm font-medium">
          Upload Signature *
        </label>

        <p className="text-xs text-gray-500 mb-3">
          Upload your signature image or PDF for confirmation.
        </p>

        <input
          type="file"
          accept="image/*,.pdf"
          className="w-full border rounded-xl px-4 py-3 text-sm"
          onChange={(e) =>
            setSignature(
              e.target.files?.[0] || null
            )
          }
        />

        {signature && (
          <p className="text-xs text-green-600 mt-2 truncate">
            Selected: {signature.name}
          </p>
        )}
      </div>

      {/* DATE & PLACE */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Declaration Details
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          <div>
            <label className="block mb-2 text-sm font-medium">
              Date *
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Place *
            </label>

            <input
              type="text"
              value={place}
              onChange={(e) =>
                setPlace(e.target.value)
              }
              placeholder="Enter place"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>
      </div>

      {/* REVIEW */}
      <div>
        <h3 className="text-xl font-bold mb-4">
          Review Your Information
        </h3>

        <div className="rounded-xl border overflow-hidden bg-white">

          {entries.length > 0 ? (
            entries.map(([key, value], index) => (
              <div
                key={key}
                className={`grid grid-cols-1 md:grid-cols-2 gap-3 p-4 ${
                  index !== entries.length - 1
                    ? "border-b"
                    : ""
                }`}
              >
                <div className="font-semibold text-gray-700">
                  {formatLabel(key)}
                </div>

                <div className="text-gray-600 break-words">
                  {renderValue(value)}
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-gray-500">
              No information available for review.
            </div>
          )}

        </div>
      </div>

      {/* ERROR */}
      {error && (
        <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* SUCCESS */}
      {success && (
        <div className="rounded-lg border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-600">
          Your legal service application has been submitted
          successfully.
        </div>
      )}

      {/* SUBMIT */}
      <div className="pt-4">

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className={`px-8 py-3 rounded-xl font-semibold transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {loading
            ? "Submitting..."
            : "Submit Application"}
        </button>

      </div>

    </div>
  );
}

