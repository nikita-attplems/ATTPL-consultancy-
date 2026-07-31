// 
export const serviceData = {
  "corporate-advisory": () => import("./corporateAdvisory").then((m) => m.default),
  "business-consulting": () => import("./businessConsulting").then((m) => m.default),
  "registration-services": () => import("./registrationServices").then((m) => m.default),
  "certification-services": () => import("./certificationService").then((m) => m.default),
  "project-consulting": () => import("./projectConsulting").then((m) => m.default),
  "subsidy-consulting": () => import("./subsidyConsulting").then((m) => m.default),
  "legal-advisory": () => import("./legalAdvisory").then((m) => m.default),
  "ca-accounting-services": () => import("./ca-accounting-services").then((m) => m.default),
  "compliance-management": () => import("./compliance-management").then((m) => m.default),
  "digital-transformation": () => import("./digital-transformation").then((m) => m.default),
};

export type ServiceSlug = keyof typeof serviceData;