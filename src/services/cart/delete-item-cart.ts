import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

export async function deleteItemCart(id: string) {
  try {
    const response = await api.delete("/cart/delete/" + id, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
}
