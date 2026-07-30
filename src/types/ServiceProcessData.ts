export interface ServiceProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceProcessData {
  badge: string;
  title: string;
  description: string;
  steps: ServiceProcessStep[];
}