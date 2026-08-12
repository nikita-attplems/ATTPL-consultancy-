"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface SuccessDialogProps {
  open: boolean;
  type?: "success" | "error";
  title?: string;
  message?: string;
  buttonLabel?: string;
  onClose?: () => void;
}

export default function SuccessDialog({
  open,
  type = "success",
  title,
  message,
  buttonLabel,
  onClose,
}: SuccessDialogProps) {
  const router = useRouter();

  if (!open) return null;

  const isError = type === "error";

  const dialogTitle =
    title ?? (isError ? "Submission Failed" : "Form Submitted Successfully");

  const dialogMessage =
    message ??
    (isError
      ? "We could not submit your application. Please try again in a moment."
      : "Your form has been submitted successfully. Our legal team will review your request and contact you shortly.");

  const handleAction = () => {
    if (isError) {
      onClose?.();
      return;
    }

    router.push("/");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F3A]/60 backdrop-blur-sm">
      <div className="w-full max-w-md mx-4 rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-2xl">
        <div className="text-center">
          {isError ? (
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-4xl text-red-600">
              ⚠
            </div>
          ) : (
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#F8F1DD]">
              <Image
                src="/images/logo-crop.gif"
                alt="Form Submitted"
                width={120}
                height={120}
                className="mx-auto"
              />
            </div>
          )}

          <h2 className="mt-6 text-2xl font-bold text-[#0B1F3A]">
            {dialogTitle}
          </h2>

          <p className="mt-3 text-[#64748B] leading-relaxed">
            {dialogMessage}
          </p>

          <button
            onClick={handleAction}
            className={`mt-8 w-full rounded-xl px-5 py-3 font-semibold transition-all duration-300 ${
              isError
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-[#0B1F3A] text-white hover:bg-[#132F52]"
            }`}
          >
            {buttonLabel ?? (isError ? "Close" : "Go To Home")}
          </button>
        </div>
      </div>
    </div>
  );
}