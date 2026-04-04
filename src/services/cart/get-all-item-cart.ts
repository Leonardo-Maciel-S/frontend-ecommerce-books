import type { ItemCartResponse } from "@/@types/item-cart";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

export async function getAllItemCart() {
  try {
    const response = await api.get<ItemCartResponse>("/cart/all-cart-item", {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}
