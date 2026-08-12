
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { createServiceForm } from "@/services/service-form-service";


export const submitServiceForm = createAsyncThunk(
  "serviceForm/submit",
  async (_arg, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const form = state.esccom;

      // ================= DEPARTMENT =================


// const departmentId =
//   form.selectedDepartmentId ||
//   form.selectedDepartment?.id ||
//   form.categoryDepartmentMap?.[
//     form.applicantCategory
//   ]?.departmentId;

// console.log("DEPARTMENT DEBUG:", {
//   selectedDepartmentId: form.selectedDepartmentId,
//   selectedDepartment: form.selectedDepartment,
//   applicantCategory: form.applicantCategory,
//   categoryDepartmentMap: form.categoryDepartmentMap,
//   departmentId,
// });
//       // ================= SERVICE =================

//       let serviceId =
//         state.esccom.categoryDepartmentMap?.[
//           form.applicantCategory
//         ]?.serviceIds?.[0] ?? "";

//       if (!serviceId && departmentId) {
//         const services =
//           state.esccom.servicesByDepartment?.[departmentId];

//         if (services && services.length > 0) {
//           serviceId = services[0].id;
//         }
//       }
 const departmentId =
        form.selectedDepartmentId ||
        state.esccom.categoryDepartmentMap?.[form.applicantCategory]
          ?.departmentId;

      let serviceId =
        state.esccom.categoryDepartmentMap?.[form.applicantCategory]
          ?.serviceIds?.[0] ?? "";
      if (!serviceId && departmentId) {
        const services = state.esccom.servicesByDepartment?.[departmentId];
        if (services && services.length) serviceId = services[0].id;
      }

      if (!departmentId) {
        return rejectWithValue(
          new Error("Department not selected")
        );
      }

      // ================= FILES =================
            const { getFileStrict } = await import("@/services/fileStore");



      const finalDocuments: Record<string, File> = {};

      if (form.documents) {
        for (const [field, meta] of Object.entries(
          form.documents
        )) {
          if (meta) {
            const file = await getFileStrict(field, meta);

            if (file) {
              finalDocuments[field] = file;
            }
          }
        }
      }

      // ================= SUBMIT =================

      const response = await createServiceForm({
        departmentId,
        serviceId,

        name: form.fullName,
        email: form.email,
        phone: form.mobile,

        formData: {
          // ==========================================
          // APPLICANT / CONTACT INFORMATION
          // ==========================================

          applicantCategory: form.applicantCategory,

          fullName: form.fullName,
          mobile: form.mobile,
          email: form.email,

          // ==========================================
          // ADDRESS INFORMATION
          // ==========================================

          country: form.country,
          state: form.state,
          district: form.district,
          tehsil: form.tehsil,
          city: form.city,
          villageWard: form.villageWard,
          pinCode: form.pinCode,

          currentAddress: form.currentAddress,
          permanentAddress: form.permanentAddress,

          latitude: form.latitude,
          longitude: form.longitude,
          gpsLocation: form.gpsLocation,

          // ==========================================
          // CONSULTANCY / ORGANIZATION INFORMATION
          // ==========================================

          organizationName: form.organizationName,
          organizationType: form.organizationType,
          designation: form.designation,
          website: form.website,

          gstNumber: form.gstNumber,
          organizationPan: form.organizationPan,

          yearEstablished: form.yearEstablished,
          numberOfEmployees: form.numberOfEmployees,
          numberOfOffices: form.numberOfOffices,
          annualRevenue: form.annualRevenue,

          serviceCoverage: form.serviceCoverage,

          // ==========================================
          // CONSULTANCY REQUIREMENT
          // ==========================================

          projectTitle: form.projectTitle,
          matterDescription: form.matterDescription,
          currentChallenge: form.currentChallenge,
          expectedOutcome: form.expectedOutcome,

          urgency: form.urgency,
          estimatedBudget: form.estimatedBudget,
          decisionTimeline: form.decisionTimeline,
          

          // ==========================================
          // CONSULTANCY / PROFESSIONAL PROFILE
          // ==========================================

          professionalCategory: form.professionalCategory,
          experience: form.experience,

          linkedInProfile: form.linkedInProfile,

          // ==========================================
          // COMMERCIAL INFORMATION
          // ==========================================

          preferredEngagementModel:
            form.preferredEngagementModel,

          expectedFeeRange: form.expectedFeeRange,

          availability: form.availability,

          languagesSupported:
            form.languagesSupported,

          // ==========================================
          // MARKETPLACE PARTICIPATION
          // ==========================================

          marketplaceListing:
            form.marketplaceListing,

          displayProfilePublicly:
            form.displayProfilePublicly,

          acceptLeads:
            form.acceptLeads,

          videoConsultation:
            form.videoConsultation,

          physicalConsultation:
            form.physicalConsultation,

          interestedPartnerType:
            form.interestedPartnerType,

          // ==========================================
          // CONSULTANCY SERVICES / SELECTIONS
          // ==========================================

          selectedDivisions:
            form.selectedDivisions,

          categorySelections:
            form.categorySelections,

          // ==========================================
          // DOCUMENTS
          // ==========================================

          photo: form.photo,

          aadhaarDocument:
            form.aadhaarDocument,

          panDocument:
            form.panDocument,

          passport:
            form.passport,

          voterId:
            form.voterId,

          resume:
            form.resume,

          firmProfile:
            form.firmProfile,

          gstCertificate:
            form.gstCertificate,

          organizationRegistration:
            form.organizationRegistration,

          professionalReferences:
            form.professionalReferences,

          otherDocuments:
            form.otherDocuments,

          documents:
            form.documents,
        },

        documents: finalDocuments,
      });

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

