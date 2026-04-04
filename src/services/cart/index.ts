import { addItemCart } from "./add-item-cart";
import { decreaseItem } from "./decrease-item";
import { getAllItemCart } from "./get-all-item-cart";
import { getCart } from "./get-cart";
import { incrementItem } from "./increment-item";

export const cartService = {
  getCart,
  getAllItemCart,
  incrementItem,
  decreaseItem,
  addItemCart,
};
