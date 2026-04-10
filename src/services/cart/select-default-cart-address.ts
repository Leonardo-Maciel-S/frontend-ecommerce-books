import { api } from "@/lib/axios";
import type { AxiosError } from "axios";

export async function selectDefaultCartAddress(id: string) {
  try {
    const response = await api.patch("/cart/set-default-address/" + id, null, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(
      (error as AxiosError<{ message: string }>).response?.data.message,
    );
  }
}
