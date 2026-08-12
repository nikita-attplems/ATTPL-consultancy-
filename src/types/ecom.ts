export interface ESCOMForm {
  // Step 1 - Applicant Identification
  applicantCategory: string;
  categorySelections: Record<string, string>;

  // Step 2 - Personal Profile
  fullName: string;
  fatherName: string;
  gender: string;
  dob: string;
  maritalStatus: string;
  photograph: string;
  nationality: string;
  mobile: string;
  whatsapp: string;
  email: string;
  aadhaar: string;
  pan: string;
  passport: string;
  voterId: string;
  drivingLicense: string;
  preferredCommunication: string;
  preferredLanguage: string;
  leadSource: string;

  // Step 3 - Location
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

  // Step 4 - Organization Profile
  organizationName: string;
  designation: string;
  website: string;
  gstNumber: string;
  organizationPan: string;
  organizationType: string;
  yearEstablished: string;
  numberOfEmployees: string;
  numberOfOffices: string;
  annualRevenue: string;
  serviceCoverage: string;

  // Step 5 - Legal Services
  selectedDivisions: Record<string, string>;

  // Step 6 - Client Requirement
  projectTitle: string;
  matterDescription: string;
  currentChallenge: string;
  expectedOutcome: string;
  urgency: string;
  estimatedBudget: string;
  decisionTimeline: string;

  // Step 8 - Advocate / Professional Profile
  professionalCategory: string;
  experience: string;
  barCouncilNumber: string;
  enrollmentDate: string;
  stateBarCouncil: string;
  barAssociationName: string;
  courtRegistrationDetails: string;
  linkedInProfile: string;

  // Step 9 - Practice Areas
  practiceAreas: string;

  // Step 11 - Law Firm Profile
  lawFirmName: string;
  numberOfPartners: string;
  numberOfAssociates: string;
  officeLocations: string;
  casesHandledAnnually: string;
  averageMonthlyCapacity: string;
  linkedInPage: string;
  firmProfileUpload: string;

  // Step 12 - Vendor Registration
  vendorCategory: string;
  vendorExperience: string;

  // Step 13 - Commercial Information
  preferredEngagementModel: string;
  expectedFeeRange: string;
  availability: string;
  languagesSupported: string;

  // Step 14 - Marketplace Participation
  marketplaceListing: string;
  displayProfilePublicly: string;
  acceptLeads: string;
  videoConsultation: string;
  physicalConsultation: string;
  interestedPartnerType: string;

  // Step 15 - Documents
  photo: string;
  aadhaarDocument: string;
  panDocument: string;
  barCouncilCertificate: string;
  enrollmentCertificate: string;
  practiceCertificate: string;
  resume: string;
  firmProfile: string;
  gstCertificate: string;
  organizationRegistration: string;
  professionalReferences: string;
  propertyDocuments: string;
  courtDocuments: string;
  legalDocuments: string;
  otherDocuments: string;

  // Step 16 - Consultation Booking
  needFreeConsultation: string;
  consultationType: string;
  preferredDate: string;
  preferredTime: string;
  urgencyLevel: string;
}

export interface FileMeta {
  name: string;
  size: number;
  url?: string;
  type?: string;
  lastModified?: number;
}