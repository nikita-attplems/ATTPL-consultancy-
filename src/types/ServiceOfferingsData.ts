export interface ServiceOffering {
  title: string;
  description: string;
  image: string;
}

export interface ServiceOfferingsData {
  badge: string;
  title: string;
  offerings: ServiceOffering[];
}