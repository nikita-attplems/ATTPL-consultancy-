
import Step1Applicant from "@/components/form/Step1Applicant";
import Step02Contact from "@/components/form/Step02Contact";
import Step03Location from "@/components/form/Step03Location";
import Step04OrganizationProfile from "@/components/form/Step04OrganizationProfile";
import Step05LegalServicesRequired from "@/components/form/Step05LegalServicesRequired";
import Step06ClientRequirement from "@/components/form/Step06ClientRequirement";
import Step07PracticeAreas from "@/components/form/Step07PracticeAreas";
import Step08ProfessionalProfile from "@/components/form/Step08AdvocateProfile";
import Step09GeographicCourtCoverage from "@/components/form/Step09GeographicCourtCoverage";
import Step10LawFirmProfile from "@/components/form/Step10LawFirmProfile";
import Step11VendorRegistration from "@/components/form/Step11VendorRegistration";
import Step12CommercialInformation from "@/components/form/Step12CommercialInformation";
import Step13MarketplaceParticipation from "@/components/form/Step13MarketplaceParticipation";
import Step14DocumentCollection from "@/components/form/Step14DocumentCollection";
import Step15ConsultationBooking from "@/components/form/Step15ConsultationBooking";
import Step16ConsentDeclaration from "@/components/form/Step16Consentdeclaration";

export interface DynamicStep {
  id: number;
  title: string;
  component: React.ComponentType;
}

export const getDynamicSteps = (
  categorySelections: Record<string, string>,
  applicantCategory?: string
): DynamicStep[] => {
  const steps: DynamicStep[] = [];

  let seq = 1;

  const add = (
    title: string,
    component: React.ComponentType
  ) => {
    steps.push({
      id: seq++,
      title,
      component,
    });
  };

  // =====================================================
  // STEP 1
  // APPLICANT IDENTIFICATION
  // =====================================================

  add(
    "Applicant Identification",
   Step1Applicant
  );

  // =====================================================
  // STEP 2
  // PERSONAL / CONTACT PROFILE
  // =====================================================

  add(
    "Personal & Contact Profile",
    Step02Contact
  );

  // =====================================================
  // STEP 3
  // LOCATION DETAILS
  // =====================================================

  add(
    "Location Details",
    Step03Location
  );

  // =====================================================
  // STEP 4
  // ORGANIZATION / CONSULTANCY PROFILE
  // =====================================================

  add(
    "Organization / Consultancy Profile",
  Step04OrganizationProfile
  );

  // =====================================================
  // STEP 5
  // CONSULTANCY SERVICES REQUIRED
  // =====================================================

  add(
    "Consultancy Services Required",
  Step05LegalServicesRequired
  );

  // =====================================================
  // STEP 6
  // CLIENT REQUIREMENT
  // =====================================================

  add(
    "Client Requirement",
    Step06ClientRequirement
  );

  // =====================================================
  // STEP 7
  // PRACTICE / EXPERTISE AREAS
  // =====================================================

  add(
    "Practice & Expertise Areas",
    Step07PracticeAreas
  );

  // =====================================================
  // STEP 8
  // PROFESSIONAL PROFILE
  // =====================================================

  add(
    "Professional Profile",
    Step08ProfessionalProfile
  );

  // =====================================================
  // STEP 9
  // GEOGRAPHIC COVERAGE
  // =====================================================

  add(
    "Geographic Coverage",
    Step09GeographicCourtCoverage
  );

  // =====================================================
  // STEP 10
  // COMMERCIAL INFORMATION
  // =====================================================

  add(
    "Commercial Information",
  Step10LawFirmProfile
  );

  // =====================================================
  // STEP 11
  // MARKETPLACE PARTICIPATION
  // =====================================================

  add(
    "Marketplace Participation",
   Step11VendorRegistration
  );

  // =====================================================
  // STEP 12
  // DOCUMENT COLLECTION
  // =====================================================

  add(
    "Document Collection",
    Step12CommercialInformation
  );

  // =====================================================
  // STEP 13
  // CONSULTATION BOOKING
  // =====================================================

  add(
    "Consultation Booking",
    Step13MarketplaceParticipation
  );

  // =====================================================
  // STEP 14
  // CONSENT / REVIEW / SUBMIT
  // =====================================================

  add(
    "Consent, Review & Submit",
   Step14DocumentCollection
  );
  
  // S15
  add( "Consultation Booking", Step15ConsultationBooking);

  // S16
  add("Consent, Review & Submit", Step16ConsentDeclaration);

  return steps;
};