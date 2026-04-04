import type { bookInCart } from "./books";

export interface ItemCart {
  id?: string | undefined;
  cartId: string;
  bookId: string;
  quantity: number;
  createdAt?: Date | undefined;
}

export interface ItemCartResponse {
  cartItems: {
    cartItem: ItemCart;
    book: bookInCart;
  }[];
  subtotal: number;
}
