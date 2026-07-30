export const serviceData = {
  "corporate-advisory":
    () => import("./corporateAdvisory").then((module) => module.default),

  "business-consulting":
    () => import("./businessConsulting").then((module) => module.default),

    "registration-services":
    () => import("./registrationServices").then((module) => module.default),

     "certification-services":
    () => import("./certificationService").then((module) => module.default),

     "project-consulting":
    () => import("./projectConsulting").then((module) => module.default),

     "subsidy-consulting":
    () => import("./subsidyConsulting").then((module) => module.default),

     "legal-advisory":
    () => import("./legalAdvisory").then((module) => module.default),

     "ca-accounting-services":
    () => import("./ca-accounting-services").then((module) => module.default),

    
     "compliance-management":
    () => import("./compliance-management").then((module) => module.default),

         "digital-transformation":
    () => import("./digital-transformation").then((module) => module.default),


  

};
