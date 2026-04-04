import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

export async function addItemCart(id: string) {
  try {
    const response = await api.post("/cart/add-cart-item/" + id, null, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(
      (error as AxiosError<{ message: string }>).response?.data.message,
    );
  }
}
