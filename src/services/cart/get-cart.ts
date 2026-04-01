import type { Cart } from "@/@types/cart";
import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

export async function getCart() {
  try {
    const response = await api.get<{ cart: Cart }>("/cart", {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}
