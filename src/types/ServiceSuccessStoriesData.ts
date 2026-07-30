export interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
}

export interface ServiceSuccessStoriesData {
  badge: string;
  title: string;
  description: string;
  stories: CaseStudy[];
}