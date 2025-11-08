export interface Book {
  id: string | undefined;
  title: string;
  author: string;
  synopsis: string;
  priceInCents: number;
  coverImg: string;
  evaluation?: number | undefined;
  userId: string;
}
