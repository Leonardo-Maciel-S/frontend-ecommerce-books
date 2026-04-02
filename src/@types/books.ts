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

export interface bookInCart {
  id: string;
  title: string;
  coverImg: string;
  priceInCents: number;
}
