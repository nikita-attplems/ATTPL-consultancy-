
"use client";

import { useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ProgressBar from "@/components/ui/ProgressBar";
import Header from "@/components/layout/Header";
import SuccessDialog from "@/components/dialog/SuccessDialog";

import { RootState } from "@/redux/store";
import { useAppDispatch,useAppSelector } from "@/redux/hooks";


import { resetSubmitStatus } from "@/redux/slices/esccomSlice";

import { getDynamicSteps,DynamicStep } from "@/components/constants/form/esccomSteps";

import { submitServiceForm } from "@/redux/thunks/submitServiceForm";
import fetchDepartments from "@/redux/thunks/fetchDepartments";

export default function ESCOMPage() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useAppDispatch();

  const submitStatus = useAppSelector(
    (state) => state.esccom.submitStatus
  );

  const submitError = useAppSelector(
    (state) => state.esccom.submitError
  );

  const applicantCategory = useSelector(
    (state: RootState) => state.esccom.applicantCategory
  );

  const categorySelections = useAppSelector(
    (state) => state.esccom.categorySelections
  );

  /*
   * ================================
   * DYNAMIC STEPS
   * ================================
   */

  const steps: DynamicStep[] = useMemo(
    () =>
      getDynamicSteps(
        categorySelections,
        applicantCategory
      ),
    [applicantCategory, categorySelections]
  );

  const totalSteps = steps.length;

  /*
   * ================================
   * FETCH DEPARTMENTS
   * ================================
   */

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  /*
   * ================================
   * KEEP STEP VALID
   * ================================
   */

  useEffect(() => {
    if (totalSteps === 0) {
      setStep(1);
      return;
    }

    if (step > totalSteps) {
      setStep(totalSteps);
    }
  }, [totalSteps, step]);

  /*
   * ================================
   * RESET SUBMISSION STATUS
   * ================================
   */

  useEffect(() => {
    dispatch(resetSubmitStatus());
  }, [dispatch]);

  /*
   * ================================
   * CURRENT STEP
   * ================================
   */

  const currentStepData = steps[step - 1];

  if (!currentStepData) {
    return null;
  }

  const CurrentComponent = currentStepData.component;

  /*
   * ================================
   * CONTINUE / SUBMIT
   * ================================
   */

  const handleContinueButtonClick = async () => {
    if (step === totalSteps) {
      if (isSubmitting) return;

      setIsSubmitting(true);

      try {
        await dispatch(submitServiceForm()).unwrap();
      } catch (error) {
        console.error(
          "Consultancy form submission failed:",
          error
        );
      } finally {
        setIsSubmitting(false);
      }

      return;
    }

    setStep((prev) => prev + 1);
  };

  /*
   * ================================
   * RENDER
   * ================================
   */

return (
  <>
    {/* ================================
        SUCCESS / ERROR DIALOG
    ================================= */}

    <SuccessDialog
      open={
        submitStatus === "succeeded" ||
        submitStatus === "failed"
      }
      type={
        submitStatus === "failed"
          ? "error"
          : "success"
      }
      message={
        submitStatus === "failed"
          ? submitError ??
            "We could not submit your consultancy application. Please try again."
          : undefined
      }
      onClose={() =>
        dispatch(resetSubmitStatus())
      }
    />

    {/* ================================
        MAIN PAGE
    ================================= */}

    <div className="min-h-screen bg-[#F8F8F6]">
      <div className="flex h-screen">

        {/* =========================================
            SIDEBAR
        ========================================= */}

        <aside className="hidden lg:flex w-100 bg-white border-r border-[#E5E5E5] flex-col overflow-hidden">

          {/* LOGO / BRAND */}

          <div className="p-6 border-b border-[#E5E5E5]">

            <h2 className="text-xl font-bold text-[#111111]">
              ATTPL Consultancy
            </h2>

            <p className="text-sm text-[#6B7280] mt-1">
              Consultancy Service Request Form
            </p>

            <p className="text-sm text-[#6B7280] mt-1">
              ATTPL Consultancy Marketplace &
              Partner Network™
            </p>

            <div className="flex items-center gap-2 font-medium mt-2">

              <span className="text-[#111111]">
                विशेषज्ञ सलाह
              </span>

              <span className="text-[#D1D5DB]">
                •
              </span>

              <span className="text-[#C9A227]">
                Trusted Consultancy Support
              </span>

            </div>

          </div>

          {/* =========================================
              STEPS
          ========================================= */}

          <div className="flex-1 overflow-y-auto py-5">

            {steps.map((s, index) => {

              const stepNumber = index + 1;

              const active =
                step === stepNumber;

              const completed =
                stepNumber < step;

              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() =>
                    setStep(stepNumber)
                  }
                  className={`
                    w-full
                    flex
                    items-center
                    gap-4
                    px-6
                    py-3
                    transition-all
                    duration-200

                    ${
                      active
                        ? "bg-[#111111] text-white shadow-md"
                        : "text-[#6B7280] hover:bg-[#F7F1D7] hover:text-[#111111]"
                    }
                  `}
                >

                  {/* STEP NUMBER */}

                  <div
                    className={`
                      w-9
                      h-9
                      rounded-full
                      flex
                      items-center
                      justify-center
                      font-semibold
                      shrink-0

                      ${
                        active
                          ? "bg-[#C9A227] text-white"
                          : completed
                            ? "bg-[#F7F1D7] text-[#111111]"
                            : "border border-[#E5E5E5] text-[#9CA3AF]"
                      }
                    `}
                  >
                    {completed
                      ? "✓"
                      : stepNumber}
                  </div>

                  {/* STEP TITLE */}

                  <span className="text-sm font-medium text-left">
                    {s.title}
                  </span>

                </button>
              );
            })}

          </div>

          {/* SIDEBAR FOOTER */}

          <div className="border-t border-[#E5E5E5] p-5">

            <p className="text-sm text-[#6B7280]">
              Step {step} of {totalSteps}
            </p>

          </div>

        </aside>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <main className="flex-1 flex flex-col overflow-hidden">

          {/* HEADER */}

          <Header />

          {/* PROGRESS */}

          <div className="bg-white border-b border-[#E5E5E5] px-6 py-3">

            <ProgressBar
              step={step}
              total={totalSteps}
            />

          </div>

          {/* FORM CONTENT */}

          <div className="flex-1 overflow-y-auto p-6">

            <div className="max-w-6xl mx-auto">

              <CurrentComponent />

            </div>

          </div>

          {/* =========================================
              FOOTER
          ========================================= */}

          <div className="bg-white border-t border-[#E5E5E5] p-5">

            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-3">

              {/* PREVIOUS */}

              <button
                type="button"
                disabled={step === 1}
                onClick={() =>
                  setStep((prev) =>
                    Math.max(prev - 1, 1)
                  )
                }
                className="
                  px-6
                  py-3
                  rounded-lg
                  border
                  border-[#D1D5DB]
                  text-[#222222]
                  hover:bg-[#F7F1D7]
                  hover:border-[#C9A227]
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  transition-all
                  duration-200
                "
              >
                Previous
              </button>

              {/* CONTINUE / SUBMIT */}

              {step === totalSteps ? (

                <button
                  type="button"
                  onClick={
                    handleContinueButtonClick
                  }
                  disabled={isSubmitting}
                  className="
                    px-8
                    py-3
                    rounded-lg
                    bg-[#111111]
                    hover:bg-[#2B2B2B]
                    text-white
                    border
                    border-[#111111]
                    transition-all
                    duration-200
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Consultancy Application"}
                </button>

              ) : (

                <button
                  type="button"
                  onClick={
                    handleContinueButtonClick
                  }
                  className="
                    px-8
                    py-3
                    rounded-lg
                    bg-[#111111]
                    hover:bg-[#2B2B2B]
                    text-white
                    border
                    border-[#111111]
                    transition-all
                    duration-200
                  "
                >
                  Continue
                </button>

              )}

            </div>

          </div>

        </main>

      </div>
    </div>
  </>
);
}

