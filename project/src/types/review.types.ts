export type Review = {
  id: number;
  comment: string;
  rating: string;
  user: {
    id: number;
    name: string;
  };
  date: string;
}
