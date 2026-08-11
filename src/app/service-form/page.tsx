
"use client";

import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import Header from "@/src/components/layout/Header";
import ProgressBar from "@/src/components/service-form/ui/ProgressBar";

import {
  useAppDispatch,
  useAppSelector,
} from "@/src/redux/hooks";

import {
  clearStates,
  setDepartment,
} from "@/src/redux/slices/esccomSlice";

import { submitServiceForm } from "@/src/redux/thunks/submitServiceFormThunk";

import api from "@/src/redux/api/axios";

/* ======================================================
   CONSULTANCY FORM COMPONENTS
====================================================== */

import Step1BasicInfo from "@/src/components/service-form/forms/Step1Applicant";
import Step2ApplicantCategory from "@/src/components/service-form/forms/Step2BasicInfo";
import Step3Organization from "@/src/components/service-form/forms/Step3Organization";

import Step4ConsultancyProfile from "@/src/components/service-form/forms/Step4ConsultancyProfile";
import Step5ConsultancyServices from "@/src/components/service-form/forms/Step5ConsultancyServices";

import Step6TechnologyAssessment from "@/src/components/service-form/forms/Step6TechnologyAssessment";
import Step7Engagement from "@/src/components/service-form/forms/Step7Engagement";

import Step8LeaderNetwork from "@/src/components/service-form/forms/Step8LeaderNetwork";

import Step9ProfessionalPartner from "@/src/components/service-form/forms/Step9ProfessionalPartnerRegistration";

import Step10VendorRegistration from "@/src/components/service-form/forms/Step10VendorRegistration";

import Step11OrganizationAssessment from "@/src/components/service-form/forms/Step11OrganizationAssessment";

import Step12ProjectRequirement from "@/src/components/service-form/forms/Step12ProjectRequirement";

import Step13DocumentCollection from "@/src/components/service-form/forms/Step13DocumentCollection";

import Step14ConsultationBooking from "@/src/components/service-form/forms/Step14ConsultationBooking";

import Step15ConsentDeclaration from "@/src/components/service-form/forms/Step15ConsentDeclaration";


/* ======================================================
   STEP TYPE
====================================================== */

interface StepItem {
  key: string;
  label: string;
  component: React.ReactNode;
}


/* ======================================================
   CONSULTANCY STEPS
====================================================== */

const ALL_STEPS: StepItem[] = [
  {
    key: "basic",
    label: "Basic",
    component: <Step1BasicInfo />,
  },

  {
    key: "category",
    label: "Category",
    component: <Step2ApplicantCategory />,
  },

  {
    key: "organization",
    label: "Organization",
    component: <Step3Organization />,
  },

  {
    key: "consultancyProfile",
    label: "Profile",
    component: <Step4ConsultancyProfile />,
  },

  {
    key: "consultancyServices",
    label: "Services",
    component: <Step5ConsultancyServices />,
  },

  {
    key: "technologyAssessment",
    label: "Technology",
    component: <Step6TechnologyAssessment />,
  },

  {
    key: "engagement",
    label: "Engagement",
    component: <Step7Engagement />,
  },

  {
    key: "leaderNetwork",
    label: "Leader Network",
    component: <Step8LeaderNetwork />,
  },

  {
    key: "professionalPartner",
    label: "Professional",
    component: <Step9ProfessionalPartner />,
  },

  {
    key: "vendorRegistration",
    label: "Vendor",
    component: <Step10VendorRegistration />,
  },

  {
    key: "organizationAssessment",
    label: "Assessment",
    component: <Step11OrganizationAssessment />,
  },

  {
    key: "projectRequirement",
    label: "Project",
    component: <Step12ProjectRequirement />,
  },

  {
    key: "documents",
    label: "Documents",
    component: <Step13DocumentCollection />,
  },

  {
    key: "consultation",
    label: "Consultation",
    component: <Step14ConsultationBooking />,
  },

  {
    key: "consent",
    label: "Consent",
    component: <Step15ConsentDeclaration />,
  },
];


/* ======================================================
   PAGE
====================================================== */

export default function ConsultancyPage() {
  const [step, setStep] = useState<number>(1);

  const dispatch = useAppDispatch();


  /* ====================================================
     FETCH CONSULTANCY DEPARTMENT
  ==================================================== */

  useEffect(() => {
    dispatch(clearStates());

    fetchConsultancyDepartment();
  }, [dispatch]);


  const fetchConsultancyDepartment = async (): Promise<void> => {
    try {
      const res = await api.get("/dep");

      console.log("Departments Response:", res);

      const departments = res.data?.data || [];

      const consultancyDept = departments.find(
        (dept: { name?: string }) =>
          dept.name?.toLowerCase() === "consultancy"
      );

      if (consultancyDept) {
        console.log(
          "Consultancy Department:",
          consultancyDept
        );

        dispatch(setDepartment(consultancyDept));
      } else {
        console.warn(
          "Consultancy department not found."
        );
      }
    } catch (error) {
      console.error(
        "Consultancy department fetch error:",
        error
      );
    }
  };


  /* ====================================================
     REDUX DATA
  ==================================================== */

  const applicantCategory = useAppSelector(
    (state) =>
      state.esccom.categorySelections
        ?.category?.applicantType
  );

  const formData = useAppSelector(
    (state) => state.esccom
  );

  const {
    loading,
    success,
    error,
  } = formData;


  /* ====================================================
     SUBMIT
  ==================================================== */

  const handleSubmit = (): void => {
    dispatch(submitServiceForm());
  };


  /* ====================================================
     ACTIVE STEPS
  ==================================================== */

  const activeSteps = useMemo(
    () => ALL_STEPS,
    []
  );

  const totalSteps = activeSteps.length;


  /* ====================================================
     PROTECT STEP NUMBER
  ==================================================== */

  useEffect(() => {
    if (step > totalSteps) {
      setStep(totalSteps);
    }
  }, [step, totalSteps]);


  /* ====================================================
     CURRENT COMPONENT
  ==================================================== */

  const currentComponent =
    activeSteps[step - 1]?.component;


  /* ====================================================
     NEXT BUTTON VALIDATION
  ==================================================== */

  const isNextDisabled =
    step === 2 && !applicantCategory;


  /* ====================================================
     RENDER
  ==================================================== */

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* ==================================================
          SIDEBAR
      ================================================== */}

      <aside className="hidden md:flex w-64 bg-white border-r flex-col">

        {/* Sidebar Header */}
        <div className="p-5 border-b">
          <h1 className="text-xl font-bold">
            ATTPL CONSULTANCY
          </h1>

          <p className="text-xs text-gray-500 mt-1">
            Consultancy Registration
          </p>
        </div>


        {/* Scrollable Sidebar */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">

          {activeSteps.map((item, index) => {

            const isActive =
              step === index + 1;

            return (
              <button
                key={item.key}
                type="button"
                onClick={() =>
                  setStep(index + 1)
                }
                className={`w-full text-left p-3 rounded-lg cursor-pointer transition ${
                  isActive
                    ? "bg-sky-500 text-white"
                    : "hover:bg-sky-100"
                }`}
              >
                <div className="text-xs">
                  Step {index + 1}
                </div>

                <div className="text-sm font-medium">
                  {item.label}
                </div>
              </button>
            );
          })}

        </div>

      </aside>


      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <div className="flex-1 flex flex-col h-full bg-white">


        {/* ==================================================
            MOBILE STEP BAR
        ================================================== */}

        <div className="md:hidden bg-white border-b overflow-x-auto">

          <div className="flex gap-2 p-2">

            {activeSteps.map((item, index) => (

              <button
                key={item.key}
                type="button"
                onClick={() =>
                  setStep(index + 1)
                }
                className={`px-3 py-1 text-xs rounded whitespace-nowrap ${
                  step === index + 1
                    ? "bg-sky-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>

            ))}

          </div>

        </div>


        {/* ==================================================
            HEADER
        ================================================== */}

        <Header />


        {/* ==================================================
            PROGRESS BAR
        ================================================== */}

        <div className="px-4 sm:px-6 pt-4">

          <ProgressBar
            step={step}
            total={totalSteps}
          />

        </div>


        {/* ==================================================
            TOP ACCENT LINE
        ================================================== */}

        <div className="h-1 bg-sky-400 mt-3" />


        {/* ==================================================
            FORM CONTENT
        ================================================== */}

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">

          {currentComponent}

        </div>


        {/* ==================================================
            FOOTER
        ================================================== */}

        <div className="border-t px-4 sm:px-6 py-4 bg-white">

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">


            {/* BACK */}
            <button
              type="button"
              disabled={step === 1}
              onClick={() =>
                setStep((current) =>
                  Math.max(current - 1, 1)
                )
              }
              className="w-full sm:w-auto px-5 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>


            {/* STEP COUNTER */}
            <span className="text-sm text-gray-500">
              Step {step} / {totalSteps}
            </span>


            {/* NEXT / SUBMIT */}

            {step === totalSteps ? (

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded disabled:opacity-50"
              >
                {loading
                  ? "Submitting..."
                  : "Submit"}
              </button>

            ) : (

              <button
                type="button"
                disabled={isNextDisabled}
                onClick={() =>
                  setStep((current) =>
                    Math.min(
                      current + 1,
                      totalSteps
                    )
                  )
                }
                className="w-full sm:w-auto px-6 py-2 bg-sky-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>

            )}

          </div>

        </div>


        {/* ==================================================
            STATUS
        ================================================== */}

        {success && (
          <p className="text-green-600 text-center py-2">
            Submitted successfully ✅
          </p>
        )}

        {error && (
          <p className="text-red-600 text-center py-2">
            {error}
          </p>
        )}

      </div>

    </div>
  );
}
