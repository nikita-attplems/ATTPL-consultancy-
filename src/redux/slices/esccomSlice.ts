
import { Department,Service } from "@/services/dep-service";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { submitServiceForm } from "../thunks/submitServiceForm";
import { FileMeta } from "@/types/ecom";

/**
 * ============================================================
 * CONSULTANCY FORM TYPE
 * ============================================================
 */

export interface ESCOMForm {
  /* ==========================================================
     APPLICANT
     ========================================================== */

  applicantCategory: string;
  categorySelections: Record<string, string>;

  /* ==========================================================
     PERSONAL INFORMATION
     ========================================================== */

  fullName: string;
  fatherName: string;
  gender: string;
  dob: string;
  maritalStatus: string;
  nationality: string;
  photograph: string;

  mobile: string;
  whatsapp: string;
  alternate: string;
  email: string;

  aadhaar: string;
  pan: string;
  passport: string;
  voterId: string;
  drivingLicense: string;

  preferredCommunication: string;
  preferredLanguage: string;

  leadSource: string;

  passportNumber: string;
  voterIdNumber: string;
  drivingLicenseNumber: string;



  

  /* ==========================================================
     ADDRESS INFORMATION
     ========================================================== */

  country: string;
  state: string;
  district: string;
  tehsil: string;
  city: string;
  villageWard: string;
  pinCode: string;

  latitude: string;
  longitude: string;
  gpsLocation: string;

  currentAddress: string;
  permanentAddress: string;

  /* ==========================================================
     ORGANIZATION PROFILE
     ========================================================== */

  organizationName: string;
  organizationType: string;
  designation: string;
  website: string;

  registrationNumber: string;
  gstNumber: string;
  organizationPan: string;

  yearEstablished: string;
  numberOfEmployees: string;
  numberOfOffices: string;
  annualRevenue: string;

  serviceCoverage: string;

  organizationDescription: string;
  organizationObjectives: string;

  /* ==========================================================
     SOCIAL / DIGITAL PRESENCE
     ========================================================== */

  linkedIn: string;
  facebook: string;
  instagram: string;
  youtube: string;

  linkedInProfile: string;
  linkedInPage: string;

/* ==========================================================
CONSULTANCY / STRATEGIC PROFILE
========================================================== */

consultancyType: string;
consultancyCategory: string;

consultancyExperience: string;
yearsOfExperience: string;
experience: string;

areasOfExpertise: string;
practiceAreas: string;
strategicExpertise: string;

sectorsServed: string;
industriesServed: string;

geographicCoverage: string;

keyCapabilities: string;
consultingApproach: string;

previousProjects: string;
majorClients: string;
  /* ==========================================================
     CONSULTANCY SERVICES
     ========================================================== */

  selectedConsultancyServices: string;

  primaryService: string;
  secondaryServices: string;

  businessConsulting: string;
  strategicConsulting: string;
  managementConsulting: string;
  politicalConsulting: string;
  technologyConsulting: string;
  digitalConsulting: string;
  financialConsulting: string;
  projectConsulting: string;

  serviceDescription: string;

  /* ==========================================================
     TECHNOLOGY ASSESSMENT
     ========================================================== */

  technologyUsage: string;
  digitalMaturity: string;

  currentTechnology: string;
  technologyRequirements: string;

  softwareSystems: string;
  dataManagement: string;

  automationRequirements: string;
  aiRequirements: string;

  technologyChallenges: string;

  /* ==========================================================
     ENGAGEMENT / PURCHASE
     ========================================================== */

  preferredEngagementModel: string;

  engagementType: string;
  engagementDuration: string;

  expectedFeeRange: string;
  estimatedBudget: string;

  paymentPreference: string;

  availability: string;
  decisionTimeline: string;
languagesSupported: string;
  urgency: string;
  urgencyLevel: string;

  /* ==========================================================
     LEADER / POLITICAL NETWORK
     ========================================================== */

  leaderType: string;
  leaderName: string;

  politicalOrganization: string;
  politicalRole: string;

  constituency: string;
  stateConstituency: string;

  politicalExperience: string;

  campaignExperience: string;
  campaignRequirements: string;

  voterEngagementRequirements: string;
  publicOutreachRequirements: string;

  leaderNetworkRequirements: string;

  /* ==========================================================
     PROFESSIONAL PARTNER
     ========================================================== */

  professionalCategory: string;
  professionalRole: string;

  professionalExperience: string;
  professionalExpertise: string;

  professionalOrganization: string;

  professionalRegistrationNumber: string;

  professionalServices: string;

  professionalAvailability: string;

  professionalReferences: string;

  professionalProfile: string;

  /* ==========================================================
     VENDOR / SERVICE PROVIDER
     ========================================================== */

  vendorCategory: string;
  vendorName: string;

  vendorExperience: string;
  vendorServices: string;

  vendorCapabilities: string;

  vendorCoverage: string;

  vendorRegistrationNumber: string;

  vendorWebsite: string;

  vendorDescription: string;

  vendorReferences: string;

  /* ==========================================================
     ORGANIZATION ASSESSMENT
     ========================================================== */

  assessmentType: string;

  currentSituation: string;
  currentChallenges: string;

  organizationalStrengths: string;
  organizationalWeaknesses: string;

  growthObjectives: string;

  performanceIssues: string;

  operationalChallenges: string;

  strategicChallenges: string;

  assessmentRequirements: string;

  expectedAssessmentOutcome: string;

  /* ==========================================================
     PROJECT REQUIREMENTS
     ========================================================== */

  projectTitle: string;
  projectDescription: string;
  matterDescription: string;

  projectObjectives: string;

  projectScope: string;

  projectRequirements: string;

  currentChallenge: string;

  expectedOutcome: string;

  projectLocation: string;

  projectTimeline: string;

  projectStartDate: string;
  projectEndDate: string;

  projectBudget: string;

  decisionTimelineProject: string;


/* ==========================================================
DOCUMENT COLLECTION
========================================================== */

documents: Record<string, FileMeta>;

photo: string;

aadhaarDocument: string;
panDocument: string;
passportDocument: string;
// passport: string;

voterIdDocument: string;
// voterId: string;

organizationRegistration: string;
organizationProfile: string;
firmProfile: string;

gstCertificate: string;

professionalProfileDocument: string;
resume: string;

barCouncilCertificate: string;
enrollmentCertificate: string;
practiceCertificate: string;
// professionalReferences: string;

propertyDocuments: string;
courtDocuments: string;
legalDocuments: string;

projectDocuments: string;
financialDocuments: string;
referenceDocuments: string;

otherDocuments: string;

  /* ==========================================================
     MARKETPLACE PARTICIPATION
     ========================================================== */

  marketplaceListing: string;

  displayProfilePublicly: string;

  acceptLeads: string;

  videoConsultation: string;

  physicalConsultation: string;

  interestedPartnerType: string;

  partnerNetworkParticipation: string;

  marketplaceServices: string;

  /* ==========================================================
     CONSULTATION BOOKING
     ========================================================== */

  needFreeConsultation: string;

  consultationType: string;

  preferredDate: string;
  preferredTime: string;

  consultationMode: string;

  consultationPurpose: string;

  consultationNotes: string;

  /* ==========================================================
     CONSENT / DECLARATION
     ========================================================== */

  informationAccuracy: string;

  termsAccepted: string;

  privacyAccepted: string;

  communicationConsent: string;

  declarationAccepted: string;

  applicantSignature: string;

  declarationDate: string;

  /* ==========================================================
     DEPARTMENT / SERVICE DATA
     ========================================================== */

  departments?: Department[];

  servicesByDepartment?: Record<string, Service[]>;

  selectedDepartmentId?: string;

  selectedDepartment?: Department | null;

  categoryDepartmentMap?: Record<
    string,
    {
      departmentId: string;
      serviceIds: string[];
    }
  >;

  /* ==========================================================
     SUBMISSION
     ========================================================== */

  submitStatus: "idle" | "loading" | "succeeded" | "failed";

  submitError: string | null;

  /* ==========================================================
     SELECTIONS
     ========================================================== */

  selectedDivisions: Record<string, string>;
}


/**
 * ============================================================
 * STRING FIELD HELPER
 * ============================================================
 */

export type StringFields<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];


export type UpdatableFields = Exclude<
    StringFields<ESCOMForm>,
    undefined | null
>;
export interface UpdatePayload {
  field: UpdatableFields;
  value: string;
  
}


/**
 * ============================================================
 * INITIAL STATE
 * ============================================================
 */

const initialState: ESCOMForm = {
  /* ==========================================================
     APPLICANT
     ========================================================== */

  applicantCategory: "",
  categorySelections: {},

  /* ==========================================================
     PERSONAL INFORMATION
     ========================================================== */

  fullName: "",
  fatherName: "",
  gender: "",
  dob: "",
  maritalStatus: "",
  nationality: "",
  photograph: "",

  mobile: "",
  whatsapp: "",
  alternate: "",
  email: "",

  aadhaar: "",
  pan: "",
  passport: "",
  voterId: "",
  drivingLicense: "",

  preferredCommunication: "",
  preferredLanguage: "",

  leadSource: "",

  passportNumber: "",
  voterIdNumber: "",
  drivingLicenseNumber: "",

  /* ==========================================================
     ADDRESS
     ========================================================== */

  country: "",
  state: "",
  district: "",
  tehsil: "",
  city: "",
  villageWard: "",
  pinCode: "",

  latitude: "",
  longitude: "",
  gpsLocation: "",

  currentAddress: "",
  permanentAddress: "",

  /* ==========================================================
     ORGANIZATION
     ========================================================== */

  organizationName: "",
  organizationType: "",
  designation: "",
  website: "",

  registrationNumber: "",
  gstNumber: "",
  organizationPan: "",

  yearEstablished: "",
  numberOfEmployees: "",
  numberOfOffices: "",
  annualRevenue: "",

  serviceCoverage: "",

  organizationDescription: "",
  organizationObjectives: "",

  /* ==========================================================
     DIGITAL PRESENCE
     ========================================================== */

  linkedIn: "",
  facebook: "",
  instagram: "",
  youtube: "",

  linkedInProfile: "",
  linkedInPage: "",

  /* ==========================================================
     CONSULTANCY PROFILE
     ========================================================== */

  consultancyType: "",
  consultancyCategory: "",

  consultancyExperience: "",
  yearsOfExperience: "",
  experience: "",

  areasOfExpertise: "",
  strategicExpertise: "",

  sectorsServed: "",
  industriesServed: "",

  geographicCoverage: "",

  keyCapabilities: "",
  consultingApproach: "",

  previousProjects: "",
  majorClients: "",

  /* ==========================================================
     CONSULTANCY SERVICES
     ========================================================== */

  selectedConsultancyServices: "",

  primaryService: "",
  secondaryServices: "",

  businessConsulting: "",
  strategicConsulting: "",
  managementConsulting: "",
  politicalConsulting: "",
  technologyConsulting: "",
  digitalConsulting: "",
  financialConsulting: "",
  projectConsulting: "",

  serviceDescription: "",

  /* ==========================================================
     TECHNOLOGY
     ========================================================== */

  technologyUsage: "",
  digitalMaturity: "",

  currentTechnology: "",
  technologyRequirements: "",

  softwareSystems: "",
  dataManagement: "",

  automationRequirements: "",
  aiRequirements: "",

  technologyChallenges: "",

  /* ==========================================================
     ENGAGEMENT
     ========================================================== */

  preferredEngagementModel: "",

  engagementType: "",
  engagementDuration: "",

  expectedFeeRange: "",
  estimatedBudget: "",

  paymentPreference: "",

  availability: "",
  decisionTimeline: "",
  languagesSupported: "",

  urgency: "",
  urgencyLevel: "",

  /* ==========================================================
     LEADER / POLITICAL NETWORK
     ========================================================== */

  leaderType: "",
  leaderName: "",

  politicalOrganization: "",
  politicalRole: "",

  constituency: "",
  stateConstituency: "",

  politicalExperience: "",

  campaignExperience: "",
  campaignRequirements: "",

  voterEngagementRequirements: "",
  publicOutreachRequirements: "",

  leaderNetworkRequirements: "",

  /* ==========================================================
     PROFESSIONAL PARTNER
     ========================================================== */

  professionalCategory: "",
  professionalRole: "",

  professionalExperience: "",
  professionalExpertise: "",

  professionalOrganization: "",

  professionalRegistrationNumber: "",

  professionalServices: "",

  professionalAvailability: "",

  professionalReferences: "",

  professionalProfile: "",

  /* ==========================================================
     VENDOR
     ========================================================== */

  vendorCategory: "",
  vendorName: "",

  vendorExperience: "",
  vendorServices: "",

  vendorCapabilities: "",

  vendorCoverage: "",

  vendorRegistrationNumber: "",

  vendorWebsite: "",

  vendorDescription: "",

  vendorReferences: "",

  /* ==========================================================
     ORGANIZATION ASSESSMENT
     ========================================================== */

  assessmentType: "",

  currentSituation: "",
  currentChallenges: "",

  organizationalStrengths: "",
  organizationalWeaknesses: "",

  growthObjectives: "",

  performanceIssues: "",

  operationalChallenges: "",
  strategicChallenges: "",

  assessmentRequirements: "",

  expectedAssessmentOutcome: "",

  /* ==========================================================
     PROJECT
     ========================================================== */

  projectTitle: "",
  projectDescription: "",
  matterDescription: "",

  projectObjectives: "",

  projectScope: "",

  projectRequirements: "",

  currentChallenge: "",

  expectedOutcome: "",

  projectLocation: "",

  projectTimeline: "",

  projectStartDate: "",
  projectEndDate: "",

  projectBudget: "",

  decisionTimelineProject: "",

 /* ==========================================================
DOCUMENTS
========================================================== */

documents: {},

photo: "",

aadhaarDocument: "",
panDocument: "",
passportDocument: "",
// passport: "",

voterIdDocument: "",
// voterId: "",

// drivingLicenseDocument: "",

organizationRegistration: "",
organizationProfile: "",
firmProfile: "",

gstCertificate: "",

professionalProfileDocument: "",
resume: "",

barCouncilCertificate: "",
enrollmentCertificate: "",
practiceCertificate: "",
// professionalReferences: "",

propertyDocuments: "",
courtDocuments: "",
legalDocuments: "",

projectDocuments: "",
financialDocuments: "",
referenceDocuments: "",

otherDocuments: "",

  /* ==========================================================
     MARKETPLACE
     ========================================================== */

  marketplaceListing: "",

  displayProfilePublicly: "",

  acceptLeads: "",

  videoConsultation: "",

  physicalConsultation: "",

  interestedPartnerType: "",

  partnerNetworkParticipation: "",

  marketplaceServices: "",

  /* ==========================================================
     CONSULTATION
     ========================================================== */

  needFreeConsultation: "",

  consultationType: "",

  preferredDate: "",
  preferredTime: "",

  consultationMode: "",

  consultationPurpose: "",
  consultationNotes: "",

  /* ==========================================================
     CONSENT
     ========================================================== */

  informationAccuracy: "",
  practiceAreas:"",

  termsAccepted: "",

  privacyAccepted: "",

  communicationConsent: "",

  declarationAccepted: "",

  applicantSignature: "",

  declarationDate: "",

  /* ==========================================================
     DEPARTMENT
     ========================================================== */

  departments: [],

  servicesByDepartment: {},

  selectedDepartmentId: "",

  selectedDepartment: null,

  categoryDepartmentMap: {},

  /* ==========================================================
     SUBMISSION
     ========================================================== */

  submitStatus: "idle",

  submitError: null,

  /* ==========================================================
     SELECTIONS
     ========================================================== */

  selectedDivisions: {},
};


/**
 * ============================================================
 * SAFE FIELD UPDATER
 * ============================================================
 */

function setField<
  K extends UpdatableFields & keyof ESCOMForm
>(
  state: ESCOMForm,
  field: K,
  value: string
) {
  state[field] = value as ESCOMForm[K];
}


/**
 * ============================================================
 * SLICE
 * ============================================================
 */

const esccomSlice = createSlice({
  name: "esccom",

  initialState,

  reducers: {
    /**
     * Generic string field updater
     */
    updateField: (
      state,
      action: PayloadAction<UpdatePayload>
    ) => {
      const { field, value } = action.payload;

      setField(state, field, value);
    },


    /**
     * Applicant Category
     */
    setApplicantCategory: (
      state,
      action: PayloadAction<string>
    ) => {
      state.applicantCategory = action.payload;
    },


    /**
     * Category Selection
     */
    updateCategorySelection: (
      state,
      action: PayloadAction<{
        group: string;
        value: string;
      }>
    ) => {
      state.categorySelections[
        action.payload.group
      ] = action.payload.value;
    },


    /**
     * Division Selection
     */
    toggleDivision: (
      state,
      action: PayloadAction<{
        section: string;
        value: string;
      }>
    ) => {
      state.selectedDivisions[
        action.payload.section
      ] = action.payload.value;
    },


    /**
     * Reset Submit Status
     */
    resetSubmitStatus: (state) => {
      state.submitStatus = "idle";
      state.submitError = null;
    },


    /**
     * Departments
     */
    setDepartments: (
      state,
      action: PayloadAction<Department[]>
    ) => {
      state.departments = action.payload;
    },


    /**
     * Services For Department
     */
    setServicesForDepartment: (
      state,
      action: PayloadAction<{
        departmentId: string;
        services: Service[];
      }>
    ) => {
      const {
        departmentId,
        services,
      } = action.payload;

      if (!state.servicesByDepartment) {
        state.servicesByDepartment = {};
      }

      state.servicesByDepartment[
        departmentId
      ] = services;
    },


    /**
     * Selected Department ID
     */
    setSelectedDepartment: (
      state,
      action: PayloadAction<string>
    ) => {
      state.selectedDepartmentId =
        action.payload;
    },


    /**
     * Selected Consultancy Department
     *
     * Kept as an object as well so the
     * Consultancy page can store the
     * complete department returned by API.
     */
    setDepartment: (
      state,
      action: PayloadAction<Department | null>
    ) => {
      state.selectedDepartment =
        action.payload;

      state.selectedDepartmentId =
        action.payload?.id ?? "";
    },


    /**
     * Reset Everything
     */
    resetEsccom: () => initialState,
  },


  /**
   * ==========================================================
   * SUBMISSION STATES
   * ==========================================================
   */

  extraReducers: (builder) => {
    builder

      .addCase(
        submitServiceForm.pending,
        (state) => {
          state.submitStatus = "loading";
          state.submitError = null;
        }
      )

      .addCase(
        submitServiceForm.fulfilled,
        () => ({
          ...initialState,

          submitStatus: "succeeded",

          submitError: null,
        })
      )

      .addCase(
        submitServiceForm.rejected,
        (state, action) => {
          state.submitStatus = "failed";

          state.submitError =
            action.error.message ??
            "Failed to submit consultancy application";
        }
      );
  },
});


/**
 * ============================================================
 * EXPORT ACTIONS
 * ============================================================
 */

export const {
  updateField,

  setApplicantCategory,

  updateCategorySelection,

  toggleDivision,

  resetSubmitStatus,

  setDepartments,

  setServicesForDepartment,

  setSelectedDepartment,

  setDepartment,

  resetEsccom,
} = esccomSlice.actions;


/**
 * ============================================================
 * EXPORT REDUCER
 * ============================================================
 */

export default esccomSlice.reducer;

