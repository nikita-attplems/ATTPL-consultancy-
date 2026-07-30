export interface ServiceHeroData {
  badge: string;
  title: string;
  description: string[];
  highlights: string[];

  primaryButton: {
    text: string;
    href: string;
  };

  secondaryButton: {
    text: string;
    href: string;
  };
}