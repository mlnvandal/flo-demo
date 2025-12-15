export type Title = {
  slug: string;
  name: string;
  year: number;
  durationMin: number;
  rating: number;
  tags: string[];
  synopsis: string;
  cover: {
    gradientFrom: string;
    gradientTo: string;
  };
};

export type Collection = {
  slug: string;
  name: string;
  description: string;
  titleSlugs: string[];
};

