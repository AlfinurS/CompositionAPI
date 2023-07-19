export type characterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
};

export type responseListType = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: characterType[];
};
