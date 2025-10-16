export type Workshop = {
  title: string;
  date: string;
  time: string;
  description: string;
};

export type Review = {
  name: string;
  country: string;
  content: string;
};

export type Tutor = {
  id: number | string;
  name: string;
  image: string;
  countryCode: string;
  accent: string;
  experience: string;
  language: string;
  video?: string;
  about?: string;
  skills?: string[];
  availability?: Record<string, string[]>;
  workshops?: Workshop[];
  reviews?: Review[];
};