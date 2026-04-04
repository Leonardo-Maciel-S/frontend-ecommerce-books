import type { ItemCart } from "@/@types/item-cart";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

export async function decreaseItem(id: string | undefined) {
  try {
    const response = await api.patch<ItemCart>("/cart/decrease/" + id, null, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}
