export type HomeCuratedCardImageType = 'clipboard' | 'clock';

export interface HomeCuratedCardProps {
  eyebrowText: string;
  cardTitle: string[];
  buttonText?: string;
  imageType?: HomeCuratedCardImageType;
  to: string;
}
