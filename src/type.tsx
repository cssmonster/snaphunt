export type PageItem = {
  id: number;
  title: string;
};

export interface IActor {
  id: number;
  name: string;
  characterName: string;
  url: string;
}

interface ICategory {
  id: number;
  title: string;
}

export interface IMovie {
  id: number;
  url: string;
  name: string;
  desc: string;
  score: number;
  actors: IActor[];
  category: ICategory[];
}
