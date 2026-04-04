import type { ItemCart } from "@/@types/item-cart";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

export async function incrementItem(id: string | undefined) {
  try {
    const response = await api.patch<ItemCart>("/cart/increment/" + id, null, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}
