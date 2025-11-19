export type Painting = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  year: any;
  file: string;
  name: string;
  slug: string;
  src: string;
  materials: string;
  process: string;
  description: string;
  extraImages?: string[];
  video?: string;
};

export type CategoryInfo = {
  title: string;
  description: string;
  paintings: Painting[];
};
